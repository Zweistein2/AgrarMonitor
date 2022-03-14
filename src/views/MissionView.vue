<template>
  <navbar active="missionLink" :environment-data="environmentData" />
  <div class="row m-1">
    <missionComponent
      :mission-data="missionData"
      :farms-data="farmsData"
      :placeables-data="placeablesData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dataService from "@/services/dataService";
import Navbar from "@/components/Navbar.vue";
import MissionComponent from "@/components/MissionComponent.vue";

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
  } => ({
    missionData: {} as MissionsData,
    farmsData: {} as FarmsData,
    placeablesData: {} as PlaceableData,
    environmentData: {} as EnvironmentData,
  }),
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
  },
  async created(): Promise<void> {
    await this.queryData();

    setInterval(() => this.queryData(), 60000);
  },
});
</script>
