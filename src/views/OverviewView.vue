<template>
  <navbar active="overviewLink" :environment-data-prop="environmentData" />
  <overviewComponent
    :economy-data-prop="economyData"
    :vehicle-data-prop="vehicleData"
    :meta-data-prop="metaData"
    :environment-data-prop="environmentData"
    :sales-data-prop="salesData"
    :farms-data-prop="farmsData"
    :player-data-prop="playerData"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OverviewComponent from "@/components/OverviewComponent.vue";
import Navbar from "@/components/Navbar.vue";
import dataService from "@/services/dataService";
import router from "@/router";
import mappingService from "@/services/mappingService";

export default defineComponent({
  name: "OverviewView",
  components: {
    overviewComponent: OverviewComponent,
    navbar: Navbar,
  },
  data: (): {
    economyData: EconomyData;
    vehicleData: VehicleData;
    metaData: MetaData;
    environmentData: EnvironmentData;
    salesData: SalesData;
    farmsData: FarmsData;
    playerData: PlayerData;
    websocketData: WebsocketData | undefined;
  } => ({
    economyData: {} as EconomyData,
    vehicleData: {} as VehicleData,
    metaData: {} as MetaData,
    environmentData: {} as EnvironmentData,
    salesData: {} as SalesData,
    farmsData: {} as FarmsData,
    playerData: {} as PlayerData,
    websocketData: {} as WebsocketData,
  }),
  watch: {
    websocketData: async function (val) {
      if (val !== undefined) {
        let websocketData = val as WebsocketData;

        if (websocketData.economyData) {
          this.economyData = mappingService.mapEconomyData(
            websocketData.economyData,
            this.economyData
          );
        }

        if (websocketData.vehiclesData && websocketData.vehiclesData.vehicles) {
          this.vehicleData = mappingService.mapVehicleData(
            websocketData.vehiclesData,
            this.vehicleData
          );
        }

        if (websocketData.metadataData && websocketData.farmData) {
          this.metaData = mappingService.mapMetaData(
            websocketData.metadataData,
            websocketData.farmData,
            this.metaData
          );
        }

        if (websocketData.modsData) {
          this.metaData = mappingService.mapModData(
            websocketData.modsData,
            this.metaData
          );
        }

        if (websocketData.environmentData) {
          this.environmentData = mappingService.mapEnvironmentData(
            websocketData.environmentData,
            this.environmentData
          );
        }

        // SALES

        if (websocketData.farmData) {
          this.farmsData = mappingService.mapFarmData(
            websocketData.farmData,
            this.farmsData
          );
        }

        if (websocketData.playerData) {
          this.playerData = mappingService.mapPlayerData(
            websocketData.playerData
          );
        }

        if (
          websocketData.metadataData &&
          websocketData.metadataData.metadata &&
          websocketData.metadataData.metadata[0] &&
          websocketData.metadataData.metadata[0].savegameIndex !== undefined &&
          (this.$route.query.savegame === undefined ||
            this.$route.query.savegame === "" ||
            this.$route.query.savegame !==
              websocketData.metadataData.metadata[0].savegameIndex.toString())
        ) {
          await router.push({
            name: "Overview",
            params: {
              locale: this.$i18n.locale,
            },
            query: {
              serverCode: this.$route.query.serverCode,
              savegame:
                websocketData.metadataData.metadata[0].savegameIndex.toString(),
            },
          });
          router.go(0);
        }

        this.websocketData = undefined;
      }
    },
  },
  methods: {
    queryData: async function () {
      let url = window.location.origin as string;
      let savegame = this.$route.query.savegame as string;

      this.economyData = await dataService.getEconomyData(url, savegame);
      this.vehicleData = await dataService.getVehicleData(url, savegame);
      this.metaData = await dataService.getMetaData(url, savegame);
      this.environmentData = await dataService.getEnvironmentData(
        url,
        savegame
      );
      this.salesData = await dataService.getSalesData(url, savegame);
      this.farmsData = await dataService.getFarmsData(url, savegame);
    },
    queryWebsocketData: async function () {
      dataService.getWebsocketData();
      setTimeout(() => {
        this.websocketData = dataService.websocketData;
      }, 1000);
    },
  },
  async mounted(): Promise<void> {
    if (
      this.$route.query.savegame === undefined ||
      this.$route.query.savegame === ""
    ) {
      await router.push({
        name: "Overview",
        params: {
          locale: this.$i18n.locale,
        },
        query: {
          serverCode: this.$route.query.serverCode,
          savegame: "1",
        },
      });
    }

    dataService.openWebsocket("ws://" + window.location.host + "/plumber");

    await this.queryData();

    setInterval(() => this.queryData(), 3600000);
    setInterval(() => this.queryWebsocketData(), 2000);
  },
});
</script>
