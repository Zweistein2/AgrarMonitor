<template>
  <navbar active="vehiclesLink" :environment-data="environmentData" />
  <div class="row m-1">
    <VehicleComponent :farms-data="farmsData" :vehicle-data="vehicleData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VehicleComponent from "@/components/VehicleComponent.vue";
import dataService from "@/services/dataService";
import Navbar from "@/components/Navbar.vue";

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
  } => ({
    vehicleData: {} as VehicleData,
    farmsData: {} as FarmsData,
    environmentData: {} as EnvironmentData,
  }),
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
  },
  async created(): Promise<void> {
    await this.queryData();

    setInterval(() => this.queryData(), 60000);
  },
});
</script>
