<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light shadow mb-3"
    role="navigation"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img alt="FS22 Logo" src="@/assets/logo.png" height="35" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="homeTab">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="homeLink"
              :to="{
                name: 'Home',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  url: this.$route.query.url,
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("home") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="storageLink"
              :to="{
                name: 'Storage',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  url: this.$route.query.url,
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("storage") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="vehiclesLink"
              :to="{
                name: 'Vehicles',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  url: this.$route.query.url,
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("vehicles", 2) }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="statisticsLink"
              :to="{
                name: 'Storage',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  url: this.$route.query.url,
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("statistics") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="balanceLink"
              :to="{
                name: 'Storage',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  url: this.$route.query.url,
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("balance") }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mb-2 mb-lg-0">
        <localeSwitcher />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

export default defineComponent({
  name: "Navbar",
  components: {
    localeSwitcher: LocaleSwitcher,
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  props: {
    active: String,
  },
  watch: {
    locale(): void {
      this.$router.replace({
        params: {
          locale: this.locale,
        },
        query: {
          url: this.$route.query.url,
          serverCode: this.$route.query.serverCode,
          savegame: this.$route.query.savegame,
        },
      });
    },
  },
  mounted() {
    if (this.active) {
      let activeElement = document.getElementById(this.active);

      if (activeElement) {
        activeElement.classList.add("active");
      }
    }
  },
});
</script>
