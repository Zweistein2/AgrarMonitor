<template>
  <navbar active="vehiclesLink" :environment-data-prop="environmentData" />
  <div class="row m-1">
    <VehicleComponent
      :farms-data-prop="farmsData"
      :vehicle-data-prop="vehicleData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VehicleComponent from "@/components/VehicleComponent.vue";
import dataService from "@/services/dataService";
import Navbar from "@/components/Navbar.vue";
import router from "@/router";
import mappingService from "@/services/mappingService";

export default defineComponent({
  name: "VehicleView",
  components: {
    VehicleComponent,
    navbar: Navbar,
  },
  data: (): {
    vehicleData: VehicleData;
    farmsData: FarmsData;
    environmentData: EnvironmentData;
    websocketData: WebsocketData | undefined;
  } => ({
    vehicleData: {} as VehicleData,
    farmsData: {} as FarmsData,
    environmentData: {} as EnvironmentData,
    websocketData: {} as WebsocketData,
  }),
  watch: {
    websocketData: async function (val) {
      if (val !== undefined) {
        let websocketData = val as WebsocketData;

        if (websocketData.vehiclesData && websocketData.vehiclesData.vehicles) {
          this.vehicleData = mappingService.mapVehicleData(
            websocketData.vehiclesData,
            this.vehicleData
          );
        }

        if (websocketData.farmData) {
          this.farmsData = mappingService.mapFarmData(
            websocketData.farmData,
            this.farmsData
          );
        }

        if (websocketData.environmentData) {
          this.environmentData = mappingService.mapEnvironmentData(
            websocketData.environmentData,
            this.environmentData
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
            name: "Vehicles",
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
    queryData: async function (): Promise<void> {
      let url = window.location.origin as string;
      let savegame = this.$route.query.savegame as string;
      this.vehicleData = await dataService.getVehicleData(url, savegame);
      this.farmsData = await dataService.getFarmsData(url, savegame);
      this.environmentData = await dataService.getEnvironmentData(
        url,
        savegame
      );
    },
    queryWebsocketData: async function () {
      dataService.getWebsocketData();
      setTimeout(() => {
        this.websocketData = dataService.websocketData;
      }, 1000);
    },
  },
  async created(): Promise<void> {
    dataService.openWebsocket("ws://" + window.location.host + "/plumber");

    await this.queryData();

    setInterval(() => this.queryData(), 3600000);
    setInterval(() => this.queryWebsocketData(), 2000);
  },
});
</script>
