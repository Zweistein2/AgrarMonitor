<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light shadow mb-3"
    role="navigation"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link
          :to="{
            name: 'Overview',
            params: {
              locale: this.$i18n.locale,
            },
            query: {
              savegame: this.$route.query.savegame,
            },
          }"
        >
          <img alt="FS22 Logo" src="@/assets/logo.png" height="35" />
        </router-link>
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
              id="overviewLink"
              :to="{
                name: 'Overview',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
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
              id="missionLink"
              :to="{
                name: 'Mission',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("missions") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="statisticsLink"
              :to="{
                name: 'Statistics',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
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
                name: 'Balance',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("balance") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="calculatorLink"
              :to="{
                name: 'Calculation',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("calculator") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="farmsLink"
              :to="{
                name: 'Farms',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("farms") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link disabled"
              id="productionsLink"
              :to="{
                name: 'Balance',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("productions") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link disabled"
              id="tricksLink"
              :to="{
                name: 'Balance',
                params: {
                  locale: this.$i18n.locale,
                },
                query: {
                  serverCode: this.$route.query.serverCode,
                  savegame: this.$route.query.savegame,
                },
              }"
            >
              {{ $t("tricks") }}
            </router-link>
          </li>
        </ul>
      </div>
      <div
        class="mb-2 mb-lg-0 me-2 pe-2 separated"
        v-if="
          today !== undefined &&
          environmentData !== undefined &&
          Object.keys(environmentData).length > 1
        "
      >
        {{ $t("ingameTime") }}
        {{ $d(today, "date") }} -
        {{ $d(today, "time") }}
      </div>
      <div class="mb-2 mb-lg-0 me-2 pe-2 separated">
        <savegameSwitcher />
      </div>
      <div class="mb-2 mb-lg-0">
        <localeSwitcher />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import SavegameSwitcher from "@/components/SavegameSwitcher.vue";

export default defineComponent({
  name: "Navbar",
  components: {
    localeSwitcher: LocaleSwitcher,
    SavegameSwitcher: SavegameSwitcher,
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  props: {
    active: String,
    environmentDataProp: Object as PropType<EnvironmentData>,
  },
  data: () => ({
    today: new Date(),
    environmentData: {} as EnvironmentData,
  }),
  watch: {
    locale(): void {
      this.$router.replace({
        params: {
          locale: this.locale,
        },
        query: {
          url: window.location.origin,
          serverCode: this.$route.query.serverCode,
          savegame: this.$route.query.savegame,
        },
      });
    },
    environmentDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.environmentData = val;

          this.updateTime();
        }
      },
      deep: true,
      immediate: true,
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
  methods: {
    updateTime(): void {
      if (
        this.environmentData &&
        this.environmentData.daysPerPeriod &&
        this.environmentData.currentDay &&
        this.environmentData.weather &&
        this.environmentData.weather.forecast
      ) {
        let currentMonth =
          Math.ceil(
            this.environmentData.currentDay / this.environmentData.daysPerPeriod
          ) % 12;
        let currentDay =
          ((this.environmentData.currentDay /
            this.environmentData.daysPerPeriod -
            currentMonth +
            1) *
            this.environmentData.daysPerPeriod) %
          12;

        if (
          this.environmentData.dayTimeHour !== undefined &&
          this.environmentData.dayTimeMinutes !== undefined
        ) {
          this.today = new Date(
            1999,
            currentMonth + 1,
            currentDay,
            this.environmentData.dayTimeHour,
            this.environmentData.dayTimeMinutes
          );
        } else if (this.environmentData.dayTime !== undefined) {
          this.today = new Date(
            1999,
            currentMonth + 1,
            currentDay,
            ~~(this.environmentData.dayTime / 60),
            ~~(this.environmentData.dayTime % 60)
          );
        }
      }
    },
  },
  beforeUpdate() {
    this.updateTime();
  },
});
</script>

<style scoped>
.separated {
  border-right: 2px solid rgba(0, 0, 0, 0.15);
}
</style>
