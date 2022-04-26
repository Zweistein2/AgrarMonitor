<template>
  <div class="input-group">
    <span class="input-group-addon m-auto me-1">
      {{ $t("savegame") + ": " }}
    </span>
    <v-select
      class="saveSelector"
      v-model="savegame"
      :clearable="false"
      :searchable="false"
      :options="[
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
      ]"
    >
      <template v-slot:option="save">
        {{ save.label }}
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

export default defineComponent({
  name: "SavegameSwitcher",
  components: {
    "v-select": vSelect,
  },
  computed: {
    computedSavegame() {
      return this.$route.query.savegame;
    },
    locale() {
      return this.$i18n.locale;
    },
  },
  data: () => ({
    savegame: "1" as string,
  }),
  watch: {
    savegame: async function (val) {
      if (this.$route.query.savegame !== this.savegame) {
        await this.$router.push({
          params: {
            locale: this.locale,
          },
          query: {
            serverCode: this.$route.query.serverCode,
            savegame: val,
          },
        });
        this.$router.go(0);
      }
    },
  },
  mounted() {
    if (typeof this.computedSavegame === "string") {
      this.savegame = this.computedSavegame;
    }
  },
});
</script>

<style>
.saveSelector .vs__dropdown-toggle {
  border: none !important;
  height: 35px;
}

.saveSelector .vs__dropdown-toggle .vs__search,
.vs__search:focus {
  line-height: unset !important;
  margin: unset !important;
  padding: unset !important;
}

.saveSelector .vs__dropdown-toggle .vs__selected-options {
  line-height: unset !important;
  margin: unset !important;
  padding: 5px !important;
}

.saveSelector .vs__dropdown-toggle .vs__selected-options .vs__selected {
  line-height: unset !important;
  margin: unset !important;
  padding: unset !important;
  border: unset !important;
}
</style>
