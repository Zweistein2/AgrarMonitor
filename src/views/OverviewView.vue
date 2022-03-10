<template>
  <navbar active="overviewLink" :environment-data="environmentData" />
  <overviewComponent
    :server-data="serverData"
    :economy-data="economyData"
    :vehicle-data="vehicleData"
    :meta-data="metaData"
    :environment-data="environmentData"
    :sales-data="salesData"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OverviewComponent from "@/components/OverviewComponent.vue";
import Navbar from "@/components/Navbar.vue";
import dataService from "@/services/dataService";
import router from "@/router";

export default defineComponent({
  name: "OverviewView",
  components: {
    overviewComponent: OverviewComponent,
    navbar: Navbar,
  },
  data: (): {
    serverData: ServerData;
    economyData: EconomyData;
    vehicleData: VehicleData;
    metaData: MetaData;
    environmentData: EnvironmentData;
    salesData: SalesData;
  } => ({
    serverData: {} as ServerData,
    economyData: {} as EconomyData,
    vehicleData: {} as VehicleData,
    metaData: {} as MetaData,
    environmentData: {} as EnvironmentData,
    salesData: {} as SalesData,
  }),
  methods: {
    queryData: async function () {
      let url = window.location.origin as string;
      let serverCode = this.$route.query.serverCode as string;
      let savegame = this.$route.query.savegame as string;

      this.serverData = await dataService.getServerData(url);
      this.economyData = await dataService.getEconomyData(
        url,
        serverCode,
        savegame
      );
      this.vehicleData = await dataService.getVehicleData(
        url,
        serverCode,
        savegame
      );
      this.metaData = await dataService.getMetaData(url, serverCode, savegame);
      this.environmentData = await dataService.getEnvironmentData(
        url,
        savegame
      );
      this.salesData = await dataService.getSalesData(url, savegame);
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

    await this.queryData();

    setInterval(() => this.queryData(), 60000);
  },
});
</script>
