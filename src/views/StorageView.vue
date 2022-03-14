<template>
  <navbar active="storageLink" :environment-data="environmentData" />
  <div class="row m-1">
    <StorageComponent
      :farms-data="farmsData"
      :placeables-data="placeablesData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StorageComponent from "@/components/StorageComponent.vue";
import dataService from "@/services/dataService";
import Navbar from "@/components/Navbar.vue";

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
  } => ({
    placeablesData: {} as PlaceableData,
    farmsData: {} as FarmsData,
    environmentData: {} as EnvironmentData,
  }),
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
  },
  async created(): Promise<void> {
    await this.queryData();

    setInterval(() => this.queryData(), 60000);
  },
});
</script>
