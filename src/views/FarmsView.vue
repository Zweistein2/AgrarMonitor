<template>
  <navbar active="farmsLink" :environment-data="environmentData" />
  <div class="row m-1">
    <FarmsComponent :farms-data="farmsData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dataService from "@/services/dataService";
import Navbar from "@/components/Navbar.vue";
import FarmsComponent from "@/components/FarmsComponent.vue";

export default defineComponent({
  name: "FarmsView",
  components: {
    FarmsComponent,
    navbar: Navbar,
  },
  data: (): { farmsData: FarmsData; environmentData: EnvironmentData } => ({
    farmsData: {} as FarmsData,
    environmentData: {} as EnvironmentData,
  }),
  methods: {
    queryData: async function (): Promise<void> {
      let url = window.location.origin as string;
      let savegame = this.$route.query.savegame as string;
      let farmsDataRaw = (await dataService.getFarmsData(
        url,
        savegame
      )) as FarmsData;

      for (let farm of farmsDataRaw.farm) {
        if (farm.contracting === undefined) {
          farm.contracting = {} as FarmContracts;
          farm.contracting.farm = Array<FarmContract>();
        }
      }

      this.farmsData = farmsDataRaw;
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
