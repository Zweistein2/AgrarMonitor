<template>
  <navbar active="storageLink" />
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
import dataService from "@/utils/dataService";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "StorageView",
  components: {
    StorageComponent,
    navbar: Navbar,
  },
  data: (): { placeablesData: PlaceableData; farmsData: FarmsData } => ({
    placeablesData: {
      placeable: [
        {
          silo: {
            storage: {
              node: [] as Array<StorageNode>,
            } as StorageObject,
          } as Silo,
        } as Placeable,
      ],
    } as PlaceableData,
    farmsData: {
      farm: [] as Array<Farm>,
    } as FarmsData,
  }),
  methods: {
    queryData: async function (): Promise<void> {
      let url = this.$route.query.url as string;
      let savegame = this.$route.query.savegame as string;
      this.placeablesData = await dataService.getPlaceablesData(url, savegame);
      this.farmsData = await dataService.getFarmsData(url, savegame);
    },
  },
  async created(): Promise<void> {
    await this.queryData();

    setInterval(() => this.queryData(), 60000);
  },
});
</script>
