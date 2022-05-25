<template>
  <div class="row m-1" id="masonry" data-masonry='{"percentPosition": true }'>
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3">
      <div class="card mb-3">
        <div class="card-header">{{ $t("map") }}</div>
        <div class="card-body">
          <mapComponent
            :meta-data-prop="metaData"
            :vehicle-data-prop="vehicleData"
            :farms-data-prop="farmsData"
            :player-data-prop="playerData"
            :show-fields="false"
            :show-vehicles="true"
          />
        </div>
      </div>
    </div>
    <div
      v-if="metaData !== undefined && Object.keys(metaData).length > 2"
      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
    >
      <div class="card">
        <div
          class="card-header clickable"
          data-bs-toggle="collapse"
          data-bs-target="#localInfo"
          aria-expanded="false"
          aria-controls="localInfo"
        >
          <h5 class="card-title">
            {{ $t("serverinfo") }}
          </h5>
        </div>
        <div class="collapse card-body" id="localInfo">
          <table class="table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{{ metaData.settings.savegameName }}</td>
              </tr>
              <tr>
                <th>Aktuelle Karte</th>
                <td>{{ metaData.settings.mapTitle }}</td>
              </tr>
              <tr>
                <th>Geld</th>
                <td v-if="metaData.statistics.money !== undefined">
                  {{
                    $n(Number.parseFloat(metaData.statistics.money), "currency")
                  }}
                </td>
              </tr>
              <tr>
                <th>Automatisches Speicherintervall</th>
                <td v-if="metaData.settings.autoSaveInterval !== 0.0">
                  Alle {{ metaData.settings.autoSaveInterval }} Min.
                </td>
                <td v-else>Aus</td>
              </tr>
              <tr>
                <th>Schwierigkeit</th>
                <td>
                  {{ $t("difficulty_" + metaData.settings.difficulty) }}
                </td>
              </tr>
              <tr>
                <th>Schwierigkeit Wirtschaft</th>
                <td>
                  {{ $t("difficulty_" + metaData.settings.economicDifficulty) }}
                </td>
              </tr>
              <tr>
                <th>Zeitskalierung</th>
                <td v-if="metaData.settings.timeScale !== 1.0">
                  x{{ metaData.settings.timeScale }}
                </td>
                <td v-else>
                  {{ $t("realtime") }}
                </td>
              </tr>
              <tr>
                <th>Verkehr</th>
                <td>
                  {{ $t("on_off_" + metaData.settings.trafficEnabled) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="metaData !== undefined && Object.keys(metaData).length > 2"
      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
    >
      <div class="card">
        <div
          class="card-header clickable"
          data-bs-toggle="collapse"
          data-bs-target="#season"
          aria-expanded="false"
          aria-controls="season"
        >
          <h5 class="card-title">
            {{ $t("season") }}
          </h5>
        </div>
        <div class="collapse card-body" id="season">
          <table class="table">
            <tbody>
              <tr>
                <th>Saisonales Wachstum</th>
                <td>
                  {{ $t("growthMode_" + metaData.settings.growthMode) }}
                </td>
              </tr>
              <tr>
                <th>Tage pro Monat</th>
                <td>
                  {{ metaData.settings.plannedDaysPerPeriod }}
                </td>
              </tr>
              <tr>
                <th>Visuelle Jahreszeiten</th>
                <td>
                  {{
                    $t(
                      "seasonalVisuals_" +
                        metaData.settings.fixedSeasonalVisuals
                    )
                  }}
                </td>
              </tr>
              <tr>
                <th>Schnee</th>
                <td>
                  {{ $t("on_off_" + metaData.settings.isSnowEnabled) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="metaData !== undefined && Object.keys(metaData).length > 2"
      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
    >
      <div class="card">
        <div
          class="card-header clickable"
          data-bs-toggle="collapse"
          data-bs-target="#plants"
          aria-expanded="false"
          aria-controls="plants"
        >
          <h5 class="card-title">
            {{ $t("plants") }}
          </h5>
        </div>
        <div
          v-if="metaData !== undefined"
          class="card-body collapse"
          id="plants"
        >
          <table class="table">
            <tbody>
              <tr>
                <th>Fruchtzerstörung</th>
                <td>
                  {{ $t("on_off_" + metaData.settings.fruitDestruction) }}
                </td>
              </tr>
              <tr>
                <th>Pflügen notwendig</th>
                <td>
                  {{ $t("on_off_" + metaData.settings.plowingRequiredEnabled) }}
                </td>
              </tr>
              <tr>
                <th>Lesesteine</th>
                <td>
                  {{ $t("on_off_" + metaData.settings.stonesEnabled) }}
                </td>
              </tr>
              <tr>
                <th>Kalk notwendig</th>
                <td>
                  {{ $t("on_off_" + metaData.settings.limeRequired) }}
                </td>
              </tr>
              <tr>
                <th>Unkraut</th>
                <td>
                  {{ $t("on_off_" + metaData.settings.weedsEnabled) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="metaData !== undefined && Object.keys(metaData).length > 2"
      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
    >
      <div class="card">
        <div
          class="card-header clickable"
          data-bs-toggle="collapse"
          data-bs-target="#vehicleSettings"
          aria-expanded="false"
          aria-controls="vehicleSettings"
        >
          <h5 class="card-title">
            {{ $t("vehicleSettings") }}
          </h5>
        </div>
        <div class="card-body collapse" id="vehicleSettings">
          <table class="table">
            <tbody>
              <tr>
                <th>Schmutz</th>
                <td>
                  {{ $t("dirtInterval_" + metaData.settings.dirtInterval) }}
                </td>
              </tr>
              <tr>
                <th>Automatischer Motorstart</th>
                <td>
                  {{
                    $t("on_off_" + metaData.settings.automaticMotorStartEnabled)
                  }}
                </td>
              </tr>
              <tr>
                <th>Stop-and-Go-Bremsung</th>
                <td>
                  {{ $t("on_off_" + metaData.settings.stopAndGoBraking) }}
                </td>
              </tr>
              <tr>
                <th>Anhänger Füll Limit</th>
                <td>
                  {{ $t("on_off_" + metaData.settings.trailerFillLimit) }}
                </td>
              </tr>
              <tr>
                <th>Spritverbrauch</th>
                <td>
                  {{ $t("fuel_" + metaData.settings.fuelUsage) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="metaData !== undefined && Object.keys(metaData).length > 2"
      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
    >
      <div class="card">
        <div
          class="card-header clickable"
          data-bs-toggle="collapse"
          data-bs-target="#helper"
          aria-expanded="false"
          aria-controls="helper"
        >
          <h5 class="card-title">
            {{ $t("helper") }}
          </h5>
        </div>
        <div class="card-body collapse" id="helper">
          <table class="table">
            <tbody>
              <tr>
                <th>Helferbetankung - Kraftstoff</th>
                <td>
                  {{ $t("helper_" + metaData.settings.helperBuyFuel) }}
                </td>
              </tr>
              <tr>
                <th>Helferbetankung - Saatgut</th>
                <td>
                  {{ $t("helper_" + metaData.settings.helperBuySeeds) }}
                </td>
              </tr>
              <tr>
                <th>Helferbetankung - Dünger</th>
                <td>
                  {{ $t("helper_" + metaData.settings.helperBuyFertilizer) }}
                </td>
              </tr>
              <tr>
                <th>Helferbetankung - Gülle</th>
                <td>
                  {{ $t("helper_" + metaData.settings.helperSlurrySource) }}
                </td>
              </tr>
              <tr>
                <th>Helferbetankung - Mist</th>
                <td>
                  {{ $t("helper_" + metaData.settings.helperManureSource) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="metaData !== undefined && Object.keys(metaData).length > 2"
      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
    >
      <div class="card">
        <div
          class="card-header clickable"
          data-bs-toggle="collapse"
          data-bs-target="#modsLocal"
          aria-expanded="false"
          aria-controls="modsLocal"
        >
          <h5 class="card-title">
            {{ $t("mods") }}
          </h5>
        </div>
        <div class="card-body collapse" id="modsLocal">
          <table class="table">
            <tbody>
              <tr v-for="mod in metaData.mod" :key="mod.fileHash">
                <th>{{ mod.title }}</th>
                <td>{{ mod.version }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="
        economyData !== undefined &&
        economyData.fillTypes !== undefined &&
        economyData.fillTypes.fillType !== undefined &&
        Object.keys(economyData.fillTypes.fillType).length > 0 &&
        metaData !== undefined &&
        Object.keys(metaData).length > 2
      "
      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
    >
      <div class="card">
        <div
          class="card-header clickable"
          data-bs-toggle="collapse"
          data-bs-target="#economy"
          aria-expanded="false"
          aria-controls="economy"
        >
          <h5 class="card-title">
            {{ $t("economy") }}
            <img
              class="economyIcon"
              v-if="selectedFillType !== undefined"
              alt="IconLogo"
              :src="iconSrc(selectedFillType.fillType)"
              height="32"
            />
          </h5>
        </div>
        <div
          v-if="metaData !== undefined"
          class="card-body collapse"
          id="economy"
        >
          <table class="table">
            <tbody>
              <div class="dropdown">
                <v-select
                  v-model="selectedFillType"
                  :clearable="false"
                  :options="economyData.fillTypes.fillType"
                  :get-option-label="
                    (fillType) =>
                      `${$t(
                        fillType.fillType !== undefined
                          ? fillType.fillType
                          : 'UNKNOWN'
                      )}`
                  "
                >
                  <template v-slot:option="fillType">
                    <img
                      alt="IconLogo"
                      :src="iconSrc(fillType.fillType)"
                      height="32"
                    />
                    {{ $t(fillType.fillType) }}
                  </template>
                </v-select>
                <div v-if="selectedFillType !== undefined">
                  <table class="table">
                    <tbody>
                      <tr
                        v-for="period in selectedFillType.history.period"
                        :key="period.period"
                      >
                        <th>
                          {{
                            $d(
                              new Date(
                                1999,
                                Number.parseInt(period.period) + 1
                              ),
                              "month"
                            )
                          }}
                        </th>
                        <td>
                          {{
                            $n(
                              getValueForDifficulty(
                                period.text,
                                this.metaData.settings.economicDifficulty
                              ),
                              "currency"
                            )
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="
        today !== undefined &&
        environmentData !== undefined &&
        Object.keys(environmentData).length > 1
      "
      class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 col-xxl-6 mb-3"
    >
      <div class="card">
        <div
          class="card-header clickable"
          data-bs-toggle="collapse"
          data-bs-target="#environment"
          aria-expanded="false"
          aria-controls="environment"
        >
          <h5 class="card-title">
            {{ $t("environment") }} - {{ $d(today, "date") }} -
            {{ $d(today, "time") }}
          </h5>
        </div>
        <div class="card-body collapse" id="environment">
          <forecastComponent :environment-data-prop="environmentData" />
        </div>
      </div>
    </div>
    <div
      v-if="farmsData !== undefined && Object.keys(farmsData).length > 0"
      class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
    >
      <div class="card">
        <div
          class="card-header clickable"
          data-bs-toggle="collapse"
          data-bs-target="#farms"
          aria-expanded="false"
          aria-controls="farms"
        >
          <h5 class="card-title">
            {{ $t("farms") }}
          </h5>
        </div>
        <div class="card-body collapse" id="farms">
          <table class="table">
            <tbody>
              <tr v-for="farm in farmsData.farm" :key="farm.farmId">
                <span :style="'color: ' + this.getFarmColorById(farm.farmId)">
                  {{ farm.name }}
                </span>
                <div
                  :style="
                    'color: ' +
                    this.getFarmColorById(farm.farmId) +
                    '; display: inline-block'
                  "
                >
                  <font-awesome-icon :icon="['fad', 'user-cowboy']" />
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import "vue-select/dist/vue-select.css";
import Masonry from "masonry-layout";
import vSelect from "vue-select";
import calculationService from "@/services/calculationService";
import MapComponent from "@/components/MapComponent.vue";
import ForecastComponent from "@/components/ForecastComponent.vue";
import farmsMap from "@/utils/farms";

export default defineComponent({
  name: "OverviewComponent",
  components: {
    "v-select": vSelect,
    forecastComponent: ForecastComponent,
    mapComponent: MapComponent,
  },
  props: {
    economyDataProp: Object as PropType<EconomyData>,
    vehicleDataProp: Object as PropType<VehicleData>,
    farmsDataProp: Object as PropType<FarmsData>,
    metaDataProp: Object as PropType<MetaData>,
    environmentDataProp: Object as PropType<EnvironmentData>,
    salesDataProp: Object as PropType<SalesData>,
    playerDataProp: Object as PropType<PlayerData>,
  },
  data: () => ({
    today: new Date(),
    storageFillStatesPerFarm: new Map<
      number,
      Array<[string, Map<string, number>]>
    >(),
    selectedFillType: {
      fillType: "WHEAT",
      totalAmount: 0,
      history: {
        period: [] as Array<Period>,
      } as PeriodHistory,
    } as FillType,
    masonry: {} as Masonry,
    masonryScript: {} as HTMLScriptElement,
    economyData: {} as EconomyData,
    vehicleData: {} as VehicleData,
    farmsData: {} as FarmsData,
    metaData: {} as MetaData,
    environmentData: {} as EnvironmentData,
    salesData: {} as SalesData,
    playerData: {} as PlayerData,
  }),
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  watch: {
    economyDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.economyData = val;
        }
      },
      deep: true,
      immediate: true,
    },
    economyData: function () {
      if (
        this.economyData &&
        this.economyData.fillTypes &&
        this.economyData.fillTypes.fillType &&
        this.economyData.fillTypes.fillType.length > 0
      ) {
        this.selectedFillType = this.economyData.fillTypes.fillType[1];
      }
    },
    vehicleDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.vehicleData = val;
        }
      },
      deep: true,
      immediate: true,
    },
    farmsDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.farmsData = val;
        }
      },
      deep: true,
      immediate: true,
    },
    metaDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.metaData = val;
        }
      },
      deep: true,
      immediate: true,
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
    salesDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.salesData = val;
        }
      },
      deep: true,
      immediate: true,
    },
    playerDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.playerData = val;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    getValueForDifficulty: function (
      value: number,
      difficulty: number
    ): number {
      return calculationService.getValueForDifficulty(value, difficulty);
    },
    updateMasonry: function (): void {
      if (this.masonry.layout) {
        this.masonry.layout();
      }
    },
    iconSrc: function (name: string): string {
      try {
        return require(`@/assets/icons/${name}.png`);
      } catch (e) {
        return require("@/assets/icons/AIR.png");
      }
    },
    getFarmColorById(id: number): string {
      if (this.farmsData !== undefined && this.farmsData.farm !== undefined) {
        for (let farm of this.farmsData.farm) {
          if (farm.farmId === id && farm.color !== undefined) {
            let farmColorData = farmsMap.get(farm.color);

            if (farmColorData) {
              return (
                "rgba(" +
                farmColorData[1] +
                ", " +
                farmColorData[2] +
                ", " +
                farmColorData[3] +
                ", 1)"
              );
            }
          }
        }
      }

      return "rgba(255, 255, 255, 0.3)";
    },
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
  beforeUpdate(): void {
    this.updateTime();
  },
  mounted(): void {
    if (this.masonryScript.id === undefined) {
      this.masonryScript = document.createElement("script");
      this.masonryScript.setAttribute(
        "src",
        "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
      );
      this.masonryScript.setAttribute("id", "masonryScript");
      document.head.appendChild(this.masonryScript);
    }
  },
  unmounted(): void {
    if (this.masonryScript.id !== undefined) {
      document.head.removeChild(this.masonryScript);
    }
  },
  updated(): void {
    let row = document.querySelector("#masonry") as Element;
    this.masonry = new Masonry(row, {
      percentPosition: true,
    });

    let elements = document.getElementsByClassName("collapse");
    for (let i = 0; i < elements.length; i++) {
      let element = elements.item(i);
      if (element !== null) {
        element.addEventListener("hidden.bs.collapse", () => {
          this.updateMasonry();
        });
        element.addEventListener("shown.bs.collapse", () => {
          this.updateMasonry();
        });
      }
    }

    this.updateMasonry();
  },
});
</script>

<style scoped>
.economyIcon {
  position: absolute;
}

.clickable:hover {
  cursor: pointer;
}

#environment {
  align-items: center;
  justify-content: center;
  background-color: rgba(238, 237, 237, 0.438);
  color: rgb(105, 104, 104);
}
</style>
