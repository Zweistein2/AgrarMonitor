<template>
  <navbar active="calculatorLink" :environment-data-prop="environmentData" />
  <CalculationComponent
    :economy-data-prop="economyData"
    :meta-data-prop="metaData"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import CalculationComponent from "@/components/CalculationComponent.vue";
import dataService from "@/services/dataService";
import router from "@/router";
import mappingService from "@/services/mappingService";

export default defineComponent({
  name: "CalculationView",
  components: {
    CalculationComponent,
    navbar: Navbar,
  },
  data: (): {
    economyData: EconomyData;
    environmentData: EnvironmentData;
    metaData: MetaData;
    websocketData: WebsocketData | undefined;
  } => ({
    economyData: {} as EconomyData,
    environmentData: {} as EnvironmentData,
    metaData: {} as MetaData,
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

        if (websocketData.environmentData) {
          this.environmentData = mappingService.mapEnvironmentData(
            websocketData.environmentData,
            this.environmentData
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
            name: "Calculation",
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
      this.economyData = await dataService.getEconomyData(url, savegame);
      this.environmentData = await dataService.getEnvironmentData(
        url,
        savegame
      );
      this.metaData = await dataService.getMetaData(url, savegame);
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
