<template>
  <footer class="mt-auto py-3 text-muted">
    <div class="text-center">
      Made by Unicorns. <font-awesome-icon :icon="['fad', 'unicorn']" />
      <div class="small">{{ environment }}</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  computed: {
    environment: function () {
      return process.env.NODE_ENV;
    },
  },
});
</script>
