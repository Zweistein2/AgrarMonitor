<template>
  <router-view />
  <footerComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    footerComponent: FooterComponent,
  },
});
</script>
