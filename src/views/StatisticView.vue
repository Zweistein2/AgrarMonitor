<template>
  <navbar active="statisticsLink" :environment-data="environmentData" />
  <div class="row m-1">
    <StatisticComponent
      :farms-data="farmsData"
      :placeables-data="placeablesData"
      :economy-data="economyData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dataService from "@/services/dataService";
import Navbar from "@/components/Navbar.vue";
import StatisticComponent from "@/components/StatisticComponent.vue";

export default defineComponent({
  name: "StatisticView",
  components: {
    StatisticComponent,
    navbar: Navbar,
  },
  data: (): {
    farmsData: FarmsData;
    placeablesData: PlaceableData;
    environmentData: EnvironmentData;
    economyData: EconomyData;
  } => ({
    farmsData: {} as FarmsData,
    placeablesData: {} as PlaceableData,
    environmentData: {} as EnvironmentData,
    economyData: {} as EconomyData,
  }),
  methods: {
    queryData: async function (): Promise<void> {
      let url = window.location.origin as string;
      let serverCode = this.$route.query.serverCode as string;
      let savegame = this.$route.query.savegame as string;
      this.farmsData = await dataService.getFarmsData(url, savegame);
      this.placeablesData = await dataService.getPlaceablesData(url, savegame);
      this.environmentData = await dataService.getEnvironmentData(
        url,
        savegame
      );
      this.economyData = await dataService.getEconomyData(
        url,
        serverCode,
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
