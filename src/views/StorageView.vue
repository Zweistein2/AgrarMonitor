<template>
  <navbar active="storageLink" :environment-data-prop="environmentData" />
  <div class="row m-1">
    <StorageComponent
      :farms-data-prop="farmsData"
      :placeables-data-prop="placeablesData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StorageComponent from "@/components/StorageComponent.vue";
import dataService from "@/services/dataService";
import Navbar from "@/components/Navbar.vue";
import router from "@/router";
import mappingService from "@/services/mappingService";

export default defineComponent({
  name: "StorageView",
  components: {
    StorageComponent,
    navbar: Navbar,
  },
  data: (): {
    placeablesData: PlaceableData;
    farmsData: FarmsData;
    environmentData: EnvironmentData;
    websocketData: WebsocketData | undefined;
  } => ({
    placeablesData: {} as PlaceableData,
    farmsData: {} as FarmsData,
    environmentData: {} as EnvironmentData,
    websocketData: {} as WebsocketData,
  }),
  watch: {
    websocketData: async function (val) {
      if (val !== undefined) {
        let websocketData = val as WebsocketData;

        if (websocketData.placeableData) {
          this.placeablesData = mappingService.mapPlaceablesData(
            websocketData.placeableData,
            this.placeablesData
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
            name: "Storage",
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
      this.placeablesData = await dataService.getPlaceablesData(url, savegame);
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
