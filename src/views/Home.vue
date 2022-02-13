<template>
  <navbar active="homeLink" />
  <ServerInformations />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ServerInformations from "@/components/ServerInformations.vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "Home",
  components: {
    ServerInformations,
    navbar: Navbar,
  },
});
</script>
