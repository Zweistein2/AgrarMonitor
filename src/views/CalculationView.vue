<template>
  <navbar active="calculatorLink" :environment-data="environmentData" />
  <CalculationComponent :economy-data="economyData" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import CalculationComponent from "@/components/CalculationComponent.vue";
import dataService from "@/services/dataService";

export default defineComponent({
  name: "CalculationView",
  components: {
    CalculationComponent,
    navbar: Navbar,
  },
  data: (): { economyData: EconomyData; environmentData: EnvironmentData } => ({
    economyData: {} as EconomyData,
    environmentData: {} as EnvironmentData,
  }),
  methods: {
    queryData: async function (): Promise<void> {
      let url = window.location.origin as string;
      let savegame = this.$route.query.savegame as string;
      let serverCode = this.$route.query.serverCode as string;
      this.economyData = await dataService.getEconomyData(
        url,
        serverCode,
        savegame
      );
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
