<template>
  <div class="row m-1" data-masonry='{"percentPosition": true }'>
    <div class="col-3 mb-3">
      <div class="card mb-3">
        <div class="card-header">{{ $t("map") }}</div>
        <div class="card-body">
          <div id="mapContainer">
            <mapComponent
              :meta-data="metaData"
              :server-data="serverData"
              :vehicle-data="vehicleData"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="serverData && Object.keys(serverData).length > 5 && metaData"
      class="col-3 mb-3"
    >
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#server">{{
              $t("serverinfo")
            }}</a>
          </h5>
        </div>
        <div class="collapse card-body" id="server">
          <table class="table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{{ serverData.name }}</td>
              </tr>
              <tr>
                <th>Version</th>
                <td>{{ serverData.version }}</td>
              </tr>
              <tr>
                <th>Aktuelle Karte</th>
                <td>{{ serverData.mapName }}</td>
              </tr>
              <tr>
                <th>Spieler online</th>
                <td>
                  {{ serverData.Slots.numUsed }} /
                  {{ serverData.Slots.capacity }}
                </td>
              </tr>
              <tr>
                <th>Geld</th>
                <td v-if="metaData.statistics.money">
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
      v-if="
        ((serverData && Object.keys(serverData).length <= 5) || !serverData) &&
        metaData
      "
      class="col-3 mb-3"
    >
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a
              class="undecorated"
              data-bs-toggle="collapse"
              href="#localInfo"
              >{{ $t("serverinfo") }}</a
            >
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
                <td v-if="metaData.statistics.money">
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
    <div v-if="metaData" class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#season">{{
              $t("season")
            }}</a>
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
    <div v-if="metaData" class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#plants">{{
              $t("plants")
            }}</a>
          </h5>
        </div>
        <div v-if="metaData" class="card-body collapse" id="plants">
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
    <div v-if="metaData" class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a
              class="undecorated"
              data-bs-toggle="collapse"
              href="#vehicleSettings"
              >{{ $t("vehicleSettings") }}</a
            >
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
    <div v-if="metaData" class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#helper">{{
              $t("helper")
            }}</a>
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
      v-if="serverData && Object.keys(serverData).length > 5"
      class="col-3 mb-3"
    >
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#mods">{{
              $t("mods")
            }}</a>
          </h5>
        </div>
        <div class="card-body collapse" id="mods">
          <table class="table">
            <tbody>
              <tr v-for="mod in serverData.Mods.Mod" :key="mod.hash">
                <th>{{ mod.text }}</th>
                <td>{{ mod.author }}</td>
                <td>{{ mod.version }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="
        ((serverData && Object.keys(serverData).length <= 5) || !serverData) &&
        metaData
      "
      class="col-3 mb-3"
    >
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a
              class="undecorated"
              data-bs-toggle="collapse"
              href="#modsLocal"
              >{{ $t("mods") }}</a
            >
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
    <div v-if="economyData" class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#economy">
              {{ $t("economy") }}
            </a>
            <img
              class="economyIcon"
              v-if="selectedFillType"
              alt="IconLogo"
              :src="require(`@/assets/${selectedFillType.fillType}.png`)"
              height="32"
            />
          </h5>
        </div>
        <div v-if="metaData" class="card-body collapse" id="economy">
          <table class="table">
            <tbody>
              <div class="dropdown">
                <v-select
                  v-model="selectedFillType"
                  :clearable="false"
                  :options="economyData.fillTypes.fillType"
                  :get-option-label="(fillType) => `${$t(fillType.fillType)}`"
                >
                  <template v-slot:option="fillType">
                    <img
                      alt="IconLogo"
                      :src="require(`@/assets/${fillType.fillType}.png`)"
                      height="32"
                    />
                    {{ $t(fillType.fillType) }}
                  </template>
                </v-select>
                <div v-if="selectedFillType">
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
    <div v-if="economyData" class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#sold">{{
              $t("sold")
            }}</a>
          </h5>
        </div>
        <div class="card-body collapse" id="sold">
          <table class="table">
            <tbody>
              <tr
                v-for="fillType in economyData.fillTypes.fillType.filter(
                  (item) => item.totalAmount > 0
                )"
                :key="fillType.fillType"
              >
                <th>
                  <img
                    alt="IconLogo"
                    :src="require(`@/assets/${fillType.fillType}.png`)"
                    height="32"
                  />
                  {{ $t(fillType.fillType) }}
                </th>
                <td>
                  {{ $n(Number.parseFloat(fillType.totalAmount), "liter") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="missionsData" class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#missions">{{
              $t("missions")
            }}</a>
          </h5>
        </div>
        <div class="card-body collapse" id="missions">
          <table class="table">
            <tbody>
              <tr
                v-for="mission in missionsData.mission"
                :key="mission.activeId"
              >
                <th>
                  {{ $t(mission.type) }}
                </th>
                <td>
                  {{ $n(Number.parseFloat(mission.reward), "currency") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="forecastData" class="col-6 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a
              class="undecorated"
              data-bs-toggle="collapse"
              href="#environment"
            >
              {{ $t("environment") }} - {{ $d(today, "date") }} -
              {{ $d(today, "time") }}
            </a>
          </h5>
        </div>
        <div class="card-body collapse" id="environment">
          <div class="row row-cols-6">
            <template
              v-for="[index, forecast] in forecastData.forecast.entries()"
              :key="index"
            >
              <div class="col">
                <div class="row row1">
                  {{ $t("WEATHER_" + forecast.typeName) }}
                </div>
                <div class="row row2">
                  <img
                    class="img-fluid weatherIcon"
                    alt="WeatherIconLogo"
                    :src="require(`@/assets/WEATHER_${forecast.typeName}.png`)"
                  />
                </div>
                <div
                  class="row row3"
                  v-if="
                    $d(forecast.start, 'dateShort') ===
                    $d(forecast.end, 'dateShort')
                  "
                >
                  {{ $d(forecast.start, "dateShort") }}
                </div>
                <div class="row row3" v-else>
                  {{ $d(forecast.start, "dateShort") }}
                  -
                  {{ $d(forecast.end, "dateShort") }}
                </div>
                <div class="row row3 mb-5">
                  {{ $d(forecast.start, "time") }}
                  -
                  {{ $d(forecast.end, "time") }}
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "vue-select/dist/vue-select.css";
import Masonry from "masonry-layout";
import vSelect from "vue-select";
import dataService from "@/utils/dataService";
import calculationService from "@/utils/calculationService";
import MapComponent from "@/components/MapComponent.vue";

export default defineComponent({
  name: "ServerInformations",
  components: {
    "v-select": vSelect,
    mapComponent: MapComponent,
  },
  data: () => ({
    serverData: {
      Slots: {
        Player: [] as Array<Player>,
      } as SlotWrapper,
      Mods: {
        Mod: [] as Array<Mod>,
      } as ModWrapper,
      Vehicles: {
        Vehicle: [] as Array<Vehicle>,
      } as VehicleWrapper,
      Fields: {
        Field: [] as Array<Field>,
      } as FieldWrapper,
      Farmlands: {
        Farmland: [] as Array<Farmland>,
      } as FarmlandWrapper,
    } as ServerData,
    vehicleData: {} as VehicleData,
    economyData: {
      fillTypes: {
        fillType: [] as Array<FillType>,
      } as FillTypeWrapper,
    } as EconomyData,
    metaData: {
      statistics: {} as Statistics,
      settings: {} as Settings,
    } as MetaData,
    environmentData: {
      weather: {
        forecast: {
          instance: [] as Array<ForecastInstance>,
        } as Forecast,
      } as Weather,
    } as EnvironmentData,
    salesData: {
      item: [] as Array<SalesItem>,
    } as SalesData,
    missionsData: {
      mission: [] as Array<Mission>,
    } as MissionsData,
    forecastData: {
      currentDay: -1,
      currentMonth: -1,
      forecast: [] as Array<ForecastTimeslot>,
    } as ForecastData,
    storageFillStatesPerFarm: new Map<
      number,
      Array<[string, Map<string, number>]>
    >(),
    today: new Date(),
    forecastDate: new Date(),
    selectedFillType: "" as FillType | string,
    masonry: {} as Masonry,
  }),
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  methods: {
    queryData: async function () {
      let url = this.$route.query.url as string;
      let serverCode = this.$route.query.serverCode as string;
      let savegame = this.$route.query.savegame as string;

      this.serverData = await dataService.getServerData(url, serverCode);
      this.economyData = await dataService.getEconomyData(
        url,
        serverCode,
        savegame
      );
      this.vehicleData = await dataService.getVehicleData(
        url,
        serverCode,
        savegame
      );
      this.metaData = await dataService.getMetaData(url, serverCode, savegame);
      this.environmentData = await dataService.getEnvironmentData(
        url,
        savegame
      );
      this.salesData = await dataService.getSalesData(url, savegame);
      this.missionsData = await dataService.getMissionsData(url, savegame);

      if (
        this.environmentData &&
        this.environmentData.dayTime &&
        this.environmentData.daysPerPeriod &&
        this.environmentData.currentDay &&
        this.environmentData.weather &&
        this.environmentData.weather.forecast
      ) {
        this.forecastData = {
          forecast: [] as Array<ForecastTimeslot>,
        } as ForecastData;

        this.forecastData.dayTime = this.environmentData.dayTime;
        this.forecastData.currentMonth =
          Math.ceil(
            this.environmentData.currentDay / this.environmentData.daysPerPeriod
          ) % 12;
        this.forecastData.currentDay =
          ((this.environmentData.currentDay /
            this.environmentData.daysPerPeriod -
            this.forecastData.currentMonth +
            1) *
            this.environmentData.daysPerPeriod) %
          12;

        this.today = new Date(
          1999,
          this.forecastData.currentMonth + 1,
          this.forecastData.currentDay,
          ~~(this.environmentData.dayTime / 60),
          ~~(this.environmentData.dayTime % 60)
        );

        let duration = 0;

        if (this.environmentData.weather.forecast.instance[0]) {
          duration = ~~(this.environmentData.weather.forecast.instance[0]
            .durationLeft !== undefined
            ? this.environmentData.weather.forecast.instance[0].durationLeft
            : this.environmentData.weather.forecast.instance[0].duration !==
              undefined
            ? this.environmentData.weather.forecast.instance[0].duration
            : 0);
        }

        let lastForecastDate = new Date(
          this.today.getFullYear(),
          this.today.getMonth(),
          this.today.getDate(),
          this.today.getHours(),
          30
        );

        for (
          let i = 1;
          i < this.environmentData.weather.forecast.instance.length;
          i++
        ) {
          let entry = this.environmentData.weather.forecast.instance[
            i
          ] as ForecastInstance;
          let lastEntry = this.environmentData.weather.forecast.instance[
            i - 1
          ] as ForecastInstance;

          if (entry.typeName == lastEntry.typeName) {
            duration =
              duration + ~~(entry.duration !== undefined ? entry.duration : 0);
          } else {
            let hours = lastForecastDate.getHours() + duration;
            let days = ~~(hours / 24);
            let daysInPeriod =
              (lastForecastDate.getDate() + days - 1) %
              this.environmentData.daysPerPeriod;
            let periods = ~~(
              (lastForecastDate.getDate() + days - 1) /
              this.environmentData.daysPerPeriod
            );

            this.forecastData.forecast.push({
              typeName: lastEntry.typeName,
              start: new Date(
                1999,
                lastForecastDate.getMonth(),
                lastForecastDate.getDate(),
                lastForecastDate.getHours(),
                lastForecastDate.getMinutes()
              ),
              end: new Date(
                1999,
                lastForecastDate.getMonth() + periods,
                daysInPeriod + 1,
                hours % 24,
                lastForecastDate.getMinutes()
              ),
            } as ForecastTimeslot);
            lastForecastDate = new Date(
              1999,
              lastForecastDate.getMonth() + periods,
              daysInPeriod + 1,
              hours % 24,
              lastForecastDate.getMinutes()
            );
            duration = ~~(entry.duration !== undefined ? entry.duration : 0);
          }
        }
      }
    },
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
  },
  mounted(): void {
    let masonryScript = document.createElement("script");
    masonryScript.setAttribute(
      "src",
      "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
    );
    document.head.appendChild(masonryScript);

    this.queryData().then(() => {
      if (this.economyData) {
        this.selectedFillType = this.economyData.fillTypes.fillType[1];
      }
    });
    setInterval(() => this.queryData(), 60000);

    let row = document.querySelector("[data-masonry]") as Element;
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
  },
});
</script>

<style scoped>
#mapContainer {
  margin: auto;
  width: 21vw;
  height: 21vw;
}

.economyIcon {
  position: absolute;
}

.undecorated {
  text-decoration: none;
  color: var(--bs-body-color);
}

.undecorated:hover {
  color: var(--bs-body-color);
}

.w-35 {
  width: 35% !important;
}

.w-45 {
  width: 45% !important;
}

.w-20 {
  width: 20% !important;
}

.weatherIcon {
  height: 32px !important;
  width: calc(var(--bs-gutter-x) + 32px) !important;
  margin: 10% 0;
  opacity: 0.5;
}

.row1 {
  font-size: 0.7rem;
  font-weight: bold;
  color: black;
  justify-content: center;
}

.row2 {
  justify-content: center;
}

.row3 {
  font-size: 0.9rem;
  font-weight: bold;
  color: black;
  justify-content: center;
}

#environment {
  align-items: center;
  justify-content: center;
  background-color: rgba(238, 237, 237, 0.438);
  color: rgb(105, 104, 104);
}
</style>
