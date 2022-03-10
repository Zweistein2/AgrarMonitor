<template>
  <navbar active="balanceLink" :environment-data="environmentData" />
  <div class="row m-1">
    <BalanceComponent :farms-data="farmsData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dataService from "@/services/dataService";
import Navbar from "@/components/Navbar.vue";
import BalanceComponent from "@/components/BalanceComponent.vue";

export default defineComponent({
  name: "BalanceView",
  components: {
    BalanceComponent,
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
      this.farmsData = await dataService.getFarmsData(url, savegame);
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
