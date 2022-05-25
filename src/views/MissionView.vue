<template>
  <navbar active="missionLink" :environment-data-prop="environmentData" />
  <div class="row m-1">
    <missionComponent
      :mission-data-prop="missionData"
      :farms-data-prop="farmsData"
      :placeables-data-prop="placeablesData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dataService from "@/services/dataService";
import Navbar from "@/components/Navbar.vue";
import MissionComponent from "@/components/MissionComponent.vue";
import router from "@/router";
import mappingService from "@/services/mappingService";

export default defineComponent({
  name: "MissionView",
  components: {
    missionComponent: MissionComponent,
    navbar: Navbar,
  },
  data: (): {
    missionData: MissionsData;
    farmsData: FarmsData;
    placeablesData: PlaceableData;
    environmentData: EnvironmentData;
    websocketData: WebsocketData | undefined;
  } => ({
    missionData: {} as MissionsData,
    farmsData: {} as FarmsData,
    placeablesData: {} as PlaceableData,
    environmentData: {} as EnvironmentData,
    websocketData: {} as WebsocketData,
  }),
  watch: {
    websocketData: async function (val) {
      if (val !== undefined) {
        let websocketData = val as WebsocketData;

        if (websocketData.missionsData) {
          this.missionData = mappingService.mapMissionsData(
            websocketData.missionsData,
            this.missionData
          );
        }

        if (websocketData.farmData) {
          this.farmsData = mappingService.mapFarmData(
            websocketData.farmData,
            this.farmsData
          );
        }

        if (websocketData.placeableData) {
          this.placeablesData = mappingService.mapPlaceablesData(
            websocketData.placeableData,
            this.placeablesData
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
            name: "Mission",
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
      this.missionData = await dataService.getMissionsData(url, savegame);
      this.farmsData = await dataService.getFarmsData(url, savegame);
      this.placeablesData = await dataService.getPlaceablesData(url, savegame);
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
