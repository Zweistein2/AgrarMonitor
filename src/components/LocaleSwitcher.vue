<template>
  <div class="input-group">
    <span class="input-group-addon m-auto">
      <img
        class="langIcon mb-1"
        alt="LanguageIcon"
        :src="require(`@/assets/locales/${$i18n.locale}.png`)"
      />
    </span>
    <v-select
      class="langSelector"
      v-model="$i18n.locale"
      :clearable="false"
      :searchable="false"
      :options="$i18n.availableLocales"
      :get-option-label="() => ''"
    >
      <template v-slot:option="locale">
        <img
          alt="LanguageIcon"
          :src="require(`@/assets/locales/${locale.label}.png`)"
        />
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

export default defineComponent({
  name: "LocaleSwitcher",
  components: {
    "v-select": vSelect,
  },
});
</script>

<style>
.langSelector .vs__dropdown-toggle {
  border: none !important;
}

.langSelector .vs__dropdown-toggle .vs__search,
.vs__search:focus {
  line-height: unset !important;
  margin: unset !important;
  padding: unset !important;
}

.langSelector .vs__dropdown-toggle .vs__selected-options {
  line-height: unset !important;
  margin: unset !important;
  padding: 5px !important;
}

.langSelector .vs__dropdown-toggle .vs__selected-options .vs__selected {
  line-height: unset !important;
  margin: unset !important;
  padding: unset !important;
  border: unset !important;
}

.langSelector .vs__dropdown-menu {
  left: -10px;
}
</style>
