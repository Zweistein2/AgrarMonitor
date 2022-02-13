<template>
  <navbar active="vehiclesLink" />
  <div class="row m-1">
    <VehicleComponent :farms-data="farmsData" :vehicle-data="vehicleData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VehicleComponent from "@/components/VehicleComponent.vue";
import dataService from "@/utils/dataService";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "VehicleView",
  components: {
    VehicleComponent,
    navbar: Navbar,
  },
  data: (): { vehicleData: VehicleData; farmsData: FarmsData } => ({
    vehicleData: {} as VehicleData,
    farmsData: {
      farm: [] as Array<Farm>,
    } as FarmsData,
  }),
  methods: {
    queryData: async function (): Promise<void> {
      let url = this.$route.query.url as string;
      let serverCode = this.$route.query.serverCode as string;
      let savegame = this.$route.query.savegame as string;
      this.vehicleData = await dataService.getVehicleData(
        url,
        serverCode,
        savegame
      );
      this.farmsData = await dataService.getFarmsData(url, savegame);
    },
  },
  async created(): Promise<void> {
    await this.queryData();

    setInterval(() => this.queryData(), 60000);
  },
});
</script>
