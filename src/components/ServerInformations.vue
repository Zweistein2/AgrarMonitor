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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="row m-1" data-masonry='{"percentPosition": true }'>
    <div class="col-3 mb-3">
      <div class="card mb-3">
        <div class="card-header">{{ $t("map") }}</div>
        <div class="card-body">
          <div id="mapContainer"></div>
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
                        <th>{{ $t(mapPeriodToMonth(period.period)) }}</th>
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
    <div v-if="farmsData && placeablesData" class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#storage">{{
              $t("storage")
            }}</a>
          </h5>
        </div>
        <div class="card-body collapse" id="storage">
          <table class="table">
            <tbody>
              <template v-for="farm in farmsData.farm" :key="farm.farmId">
                <tr>
                  <th colspan="2">
                    {{ farm.name }}
                  </th>
                </tr>
                <template
                  v-for="(
                    fillStatesPerPlaceable, index
                  ) in storageFillStatesPerFarm.get(farm.farmId)"
                  :key="index"
                >
                  <tr>
                    <td colspan="2" class="subHeader">
                      {{ placeableMap.get(fillStatesPerPlaceable[0]) }}
                    </td>
                  </tr>
                  <tr
                    v-for="fillStates in fillStatesPerPlaceable[1]"
                    :key="fillStates[0]"
                  >
                    <td>
                      <img
                        alt="IconLogo"
                        :src="require(`@/assets/${fillStates[0]}.png`)"
                        height="32"
                      />
                      {{ $t(fillStates[0]) }}
                    </td>
                    <td>
                      {{ $n(Number.parseFloat(fillStates[1]), "liter") }}
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="vehicleFillData" class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#vehicles">{{
              $t("vehicles")
            }}</a>
          </h5>
        </div>
        <div class="card-body collapse" id="vehicles">
          <table class="table">
            <tbody>
              <template
                v-for="[
                  category,
                  vehicleFillStates,
                ] in vehicleFillData.vehicleFillStates.entries()"
                :key="category"
              >
                <tr>
                  <th colspan="3">
                    {{ $t(category) }}
                  </th>
                </tr>
                <template
                  v-for="vehicleFillState in vehicleFillStates"
                  :key="vehicleFillState"
                >
                  <tr
                    v-for="(
                      [fillType, amount], index
                    ) in vehicleFillState.fillStates"
                    :key="fillType"
                  >
                    <td
                      v-if="index === 0"
                      :rowspan="vehicleFillState.fillStates.size"
                      class="w-45"
                    >
                      {{ $t(vehicleFillState.name) }}
                    </td>
                    <td class="w-35">
                      <img
                        alt="IconLogo"
                        :src="require(`@/assets/${fillType}.png`)"
                        height="32"
                      />
                      {{ $t(fillType) }}
                    </td>
                    <td class="w-20">
                      {{ $n(Number.parseFloat(amount), "liter") }}
                    </td>
                  </tr>
                </template>
              </template>
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
              {{ $t("environment") }} -
              {{ forecastData.currentDay.toFixed(0) + ". " }}
              {{ $t(mapPeriodToMonth(forecastData.currentMonth.toFixed(0))) }} -
              {{ today.getHours() + ":" + today.getMinutes() }}
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
                <div class="row row3">
                  {{ forecast.start.getDate() + ". " }}
                  {{
                    $t(
                      mapPeriodToShortMonth(
                        forecast.start.getMonth().toFixed(0)
                      )
                    )
                  }}
                  -
                  {{ forecast.end.getDate() + ". " }}
                  {{
                    $t(
                      mapPeriodToShortMonth(forecast.end.getMonth().toFixed(0))
                    )
                  }}
                </div>
                <div class="row row3 mb-5">
                  {{
                    forecast.start.getHours() +
                    ":" +
                    forecast.start.getMinutes()
                  }}
                  -
                  {{
                    forecast.end.getHours() + ":" + forecast.end.getMinutes()
                  }}
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
import "leaflet/dist/leaflet.css";
import "@runette/leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "vue-select/dist/vue-select.css";
import L from "leaflet";
import Masonry from "masonry-layout";
import "@runette/leaflet-fullscreen";
import vSelect from "vue-select";
import dataService from "@/utils/dataService";
import calculationService from "@/utils/calculationService";
import placeableMap from "@/utils/placeables";
import vehicleMap from "@/utils/vehicles";

export default defineComponent({
  name: "ServerInformations",
  components: {
    "v-select": vSelect,
  },
  data: () => ({
    center: [0, 0] as L.LatLngExpression,
    bounds: [[-720, -720] as L.LatLngTuple, [720, 720] as L.LatLngTuple],
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
    economyData: {
      fillTypes: {
        fillType: [] as Array<FillType>,
      } as FillTypeWrapper,
    } as EconomyData,
    metaData: {
      statistics: {} as Statistics,
      settings: {} as Settings,
    } as MetaData,
    vehicleFillData: {
      vehicleFillStates: new Map<string, Array<VehicleFillState>>(),
    } as VehicleFillDataWrapper,
    vehicleData: {} as VehicleData,
    environmentData: {
      weather: {
        forecast: {
          instance: [] as Array<ForecastInstance>,
        } as Forecast,
      } as Weather,
    } as EnvironmentData,
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
      Map<string, Map<string, number>>
    >(),
    today: new Date(),
    forecastDate: new Date(),
    mapFactor: (1 / 2048) * 1175,
    selectedFillType: "" as FillType | string,
    masonry: {} as Masonry,
    map: {} as L.Map,
    placeableMap: placeableMap,
    vehicleMap: vehicleMap,
  }),
  computed: {
    elmcreekMap() {
      return require("@/assets/elmcreek.jpg");
    },
    hautbeyleronMap() {
      return require("@/assets/hautbeyleron.jpg");
    },
    erlengratMap() {
      return require("@/assets/erlengrat.jpg");
    },
    marker() {
      return require("@/assets/marker-icon.png");
    },
    marker2x() {
      return require("@/assets/marker-icon-2x.png");
    },
    playermarker() {
      return require("@/assets/player-icon.png");
    },
    playermarker2x() {
      return require("@/assets/player-icon-2x.png");
    },
    markerShadow() {
      return require("@/assets/marker-shadow.png");
    },
  },
  methods: {
    queryData: async function () {
      let categories = Array<string>();

      for (let value of vehicleMap.values()) {
        if (!categories.includes(value[2])) {
          categories.push(value[2]);
        }
      }

      console.log(categories);

      let url = this.$route.query.url as string;
      let serverCode = this.$route.query.serverCode as string;
      let savegame = this.$route.query.savegame as string;

      this.serverData = await dataService.getServerData(url, serverCode);
      this.economyData = await dataService.getEconomyData(
        url,
        serverCode,
        savegame
      );
      this.metaData = await dataService.getMetaData(url, serverCode, savegame);
      this.environmentData = await dataService.getEnvironmentData(
        url,
        savegame
      );
      this.vehicleData = await dataService.getVehicleData(
        url,
        serverCode,
        savegame
      );
      this.placeablesData = await dataService.getPlaceablesData(url, savegame);
      this.farmsData = await dataService.getFarmsData(url, savegame);
      this.salesData = await dataService.getSalesData(url, savegame);
      this.missionsData = await dataService.getMissionsData(url, savegame);

      if (this.serverData && this.serverData.Vehicles) {
        let mappedFillStatesNotDistinct: Array<Map<string, VehicleFillState>> =
          this.serverData.Vehicles.Vehicle.map(function (value) {
            let name = value.name;
            if (value.type === "pallet" || value.type === "bigBag") {
              name = value.name + "_" + value.type;
            } else if (value.type && value.type.includes("train")) {
              name = value.name + "_train";
            }

            let fillStates = new Map<string, number>();

            if (value.fillTypes && value.fillTypes !== "" && value.fillLevels) {
              for (let i = 0; i < value.fillTypes.split(" ").length; i++) {
                let type = value.fillTypes.split(" ")[i];
                let level = Number.parseFloat(value.fillLevels.split(" ")[i]);

                if (type !== "UNKNOWN" && type !== "AIR") {
                  fillStates.set(type, level);
                }
              }
            }

            return new Map<
              string,
              VehicleFillState
            >([[value.category as string, { name, fillStates } as VehicleFillState]]);
          });

        this.vehicleFillData = {
          vehicleFillStates: new Map<string, Array<VehicleFillState>>(),
        } as VehicleFillDataWrapper;

        mappedFillStatesNotDistinct.forEach((value) =>
          value.forEach((value: VehicleFillState, key: string) => {
            if (value.fillStates.size > 0) {
              this.vehicleFillData.vehicleFillStates = this.mergeArray(
                this.vehicleFillData.vehicleFillStates,
                key,
                new Array<VehicleFillState>(value)
              );
            }
          })
        );
      } else if (this.vehicleData) {
        let mappedFillStatesNotDistinct: Array<Map<string, VehicleFillState>> =
          this.vehicleData.vehicle.map((value) => {
            if (value.filename) {
              let brand = this.getVehicleBrandByMap(value.filename, "");
              let name = this.getVehicleNameByMap(value.filename, "UNKNOWN");

              if (brand !== "") {
                name = brand.concat(" ").concat(name);
              }
              let fillStates = new Map<string, number>();

              if (value.fillUnit && value.fillUnit.unit) {
                for (let i = 0; i < value.fillUnit.unit.length; i++) {
                  let type = value.fillUnit.unit[i].fillType;
                  let level = value.fillUnit.unit[i].fillLevel;

                  if (type && level && type !== "UNKNOWN" && type !== "AIR") {
                    fillStates.set(type, level);
                  }
                }
              }

              return new Map<string, VehicleFillState>([
                [
                  this.getVehicleCategoryByMap(
                    value.filename,
                    "UNKNOWN"
                  ) as string,
                  { name, fillStates } as VehicleFillState,
                ],
              ]);
            } else {
              return new Map<string, VehicleFillState>([
                [
                  "",
                  {
                    name: "",
                    fillStates: new Map<string, number>(),
                  } as VehicleFillState,
                ],
              ]);
            }
          });

        this.vehicleFillData = {
          vehicleFillStates: new Map<string, Array<VehicleFillState>>(),
        } as VehicleFillDataWrapper;

        mappedFillStatesNotDistinct.forEach((value) =>
          value.forEach((value: VehicleFillState, key: string) => {
            if (value.fillStates.size > 0) {
              this.vehicleFillData.vehicleFillStates = this.mergeArray(
                this.vehicleFillData.vehicleFillStates,
                key,
                new Array<VehicleFillState>(value)
              );
            }
          })
        );
      }

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
          (this.environmentData.currentDay /
            this.environmentData.daysPerPeriod -
            this.forecastData.currentMonth +
            1) *
          this.environmentData.daysPerPeriod;

        this.today = new Date(
          1999,
          this.forecastData.currentMonth,
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

      this.storageFillStatesPerFarm = new Map<
        number,
        Map<string, Map<string, number>>
      >();

      if (this.placeablesData) {
        for (let placeable of this.placeablesData.placeable) {
          if (
            placeable.silo &&
            placeable.silo.storage &&
            placeable.silo.storage.node &&
            placeable.silo.storage.node.length > 0 &&
            placeable.farmId &&
            placeable.farmId > 0
          ) {
            for (let node of placeable.silo.storage.node) {
              let fillStateForPlaceable = new Map<
                string,
                Map<string, number>
              >();
              if (
                node.fillType &&
                node.fillLevel &&
                placeable.silo.storage.farmId &&
                placeable.filename
              ) {
                let fillStates = new Map<string, number>();

                fillStates.set(node.fillType, node.fillLevel);
                fillStateForPlaceable.set(
                  this.getPlaceableNameByMap(placeable.filename, "UNKNOWN"),
                  fillStates
                );
                this.storageFillStatesPerFarm.set(
                  placeable.silo.storage.farmId,
                  fillStateForPlaceable
                );
              }
            }
          }
        }
      }

      if (
        this.farmsData &&
        this.farmsData.farm &&
        this.farmsData.farm.length > 0
      ) {
        for (let farm of this.farmsData.farm) {
          farm.farmId;
        }
      }
    },
    setupLeafletMap: async function () {
      delete L.Icon.Default.prototype[
        "_getIconUrl" as never as keyof L.Icon.Default
      ];

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: this.marker2x,
        iconUrl: this.marker,
        shadowUrl: this.markerShadow,
      });
      const playerIcon = L.icon({
        iconRetinaUrl: this.playermarker2x,
        iconUrl: this.playermarker,
        shadowUrl: this.markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      });

      this.map = L.map("mapContainer", {
        crs: L.CRS.Simple,
        center: this.center,
        minZoom: -1,
        zoom: 0,
        maxZoom: 2,
      });
      this.map.addControl(L.control.fullscreen({}));

      if (this.serverData) {
        if (this.serverData.mapName === "Elmcreek") {
          this.map.addLayer(L.imageOverlay(this.elmcreekMap, this.bounds));
        } else if (this.serverData.mapName === "Erlengrat") {
          this.map.addLayer(L.imageOverlay(this.erlengratMap, this.bounds));
        } else if (this.serverData.mapName === "Haut-Beyleron") {
          this.map.addLayer(L.imageOverlay(this.hautbeyleronMap, this.bounds));
        } else {
          this.map.addLayer(L.imageOverlay(this.elmcreekMap, this.bounds));
        }
        if (this.serverData.Vehicles) {
          for (let vehicle of this.serverData.Vehicles.Vehicle) {
            if (
              vehicle.type !== "trainTrailer" &&
              vehicle.type !== "trainTimberTrailer" &&
              vehicle.type !== "bigBag" &&
              vehicle.type !== "pallet"
            ) {
              if (vehicle.z && vehicle.x && vehicle.name) {
                this.map.addLayer(
                  L.marker(
                    L.latLng(
                      vehicle.z * this.mapFactor * -1,
                      vehicle.x * this.mapFactor
                    )
                  ).bindTooltip(vehicle.name)
                );
              }
            }
          }
        }
        if (
          this.serverData.Slots &&
          this.serverData.Slots.numUsed &&
          this.serverData.Slots.numUsed > 0
        ) {
          for (let player of this.serverData.Slots.Player) {
            if (player.isUsed && player.z && player.x && player.text) {
              this.map.addLayer(
                L.marker(
                  L.latLng(
                    player.z * this.mapFactor * -1,
                    player.x * this.mapFactor
                  ),
                  {
                    icon: playerIcon,
                  }
                ).bindTooltip(player.text)
              );
            }
          }
        }
      } else {
        if (
          this.metaData &&
          this.metaData.settings &&
          this.metaData.settings.mapTitle
        ) {
          if (this.metaData.settings.mapTitle === "Elmcreek") {
            this.map.addLayer(L.imageOverlay(this.elmcreekMap, this.bounds));
          } else if (this.metaData.settings.mapTitle === "Erlengrat") {
            this.map.addLayer(L.imageOverlay(this.erlengratMap, this.bounds));
          } else if (this.metaData.settings.mapTitle === "Haut-Beyleron") {
            this.map.addLayer(
              L.imageOverlay(this.hautbeyleronMap, this.bounds)
            );
          }
        } else {
          this.map.addLayer(L.imageOverlay(this.elmcreekMap, this.bounds));
        }

        if (this.vehicleData) {
          for (let vehicle of this.vehicleData.vehicle) {
            for (let component of vehicle.component) {
              if (
                component.index === "1" &&
                component.position &&
                vehicle.filename
              ) {
                let z = Number.parseFloat(component.position.split(" ")[2]);
                let x = Number.parseFloat(component.position.split(" ")[0]);
                let brand = this.getVehicleBrandByMap(vehicle.filename, "");
                let name = this.getVehicleNameByMap(
                  vehicle.filename,
                  "UNKNOWN"
                );

                if (brand !== "") {
                  name = brand.concat(" ").concat(name);
                }

                this.map.addLayer(
                  L.marker(
                    L.latLng(z * this.mapFactor * -1, x * this.mapFactor)
                  ).bindTooltip(name)
                );
              }
            }
          }
        }
      }

      this.map.fitBounds(this.bounds);
    },
    mapPeriodToMonth: function (period: string): string {
      switch (period) {
        case "1":
          return "MARCH";
        case "2":
          return "APRIL";
        case "3":
          return "MAY";
        case "4":
          return "JUNE";
        case "5":
          return "JULY";
        case "6":
          return "AUGUST";
        case "7":
          return "SEPTEMBER";
        case "8":
          return "OCTOBER";
        case "9":
          return "NOVEMBER";
        case "10":
          return "DECEMBER";
        case "11":
          return "JANUARY";
        case "12":
        case "0":
          return "FEBRUARY";
        default:
          return "UNKNOWN";
      }
    },
    mapPeriodToShortMonth: function (period: string): string {
      switch (period) {
        case "1":
          return "MARCH_SHORT";
        case "2":
          return "APRIL_SHORT";
        case "3":
          return "MAY_SHORT";
        case "4":
          return "JUNE_SHORT";
        case "5":
          return "JULY_SHORT";
        case "6":
          return "AUGUST_SHORT";
        case "7":
          return "SEPTEMBER_SHORT";
        case "8":
          return "OCTOBER_SHORT";
        case "9":
          return "NOVEMBER_SHORT";
        case "10":
          return "DECEMBER_SHORT";
        case "11":
          return "JANUARY_SHORT";
        case "12":
        case "0":
          return "FEBRUARY_SHORT";
        default:
          return "UNKNOWN";
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
    mergeMap: function <Type1, Type2 extends Map<unknown, unknown>>(
      arr: Map<Type1, Type2>,
      key: Type1,
      value: Type2
    ): Map<Type1, Type2> {
      let existingData = arr.get(key);

      if (existingData) {
        let tempMap = existingData;

        for (let [key, valueElement] of value) {
          tempMap = existingData.set(key, valueElement);
        }

        return arr.set(key, tempMap);
      } else {
        return arr.set(key, value);
      }
    },
    mergeArray: function <T, T2>(
      arr: Map<T, T2[]>,
      key: T,
      value: T2[]
    ): Map<T, T2[]> {
      let existingData = arr.get(key);

      if (existingData) {
        return arr.set(key, existingData.concat(value));
      } else {
        return arr.set(key, value);
      }
    },
    getPlaceableNameByMap: function (
      placeableFilename: string,
      defaultValue: string
    ): string {
      if (placeableMap.has(placeableFilename)) {
        let placeableName = placeableMap.get(placeableFilename);

        if (placeableName) {
          if (placeableName.startsWith("$l10n_")) {
            return this.$t(placeableName);
          } else {
            return placeableName;
          }
        }
      }

      return defaultValue;
    },
    getVehicleNameByMap: function (
      vehicleFilename: string,
      defaultValue: string
    ): string {
      if (vehicleMap.has(vehicleFilename)) {
        let vehicleMapData = vehicleMap.get(vehicleFilename);

        if (vehicleMapData && vehicleMapData[3]) {
          if (vehicleMapData[3].startsWith("$l10n_")) {
            return this.$t(vehicleMapData[3]);
          } else {
            return vehicleMapData[3];
          }
        }
      }

      return defaultValue;
    },
    getVehicleCategoryByMap: function (
      vehicleFilename: string,
      defaultValue: string
    ): string {
      if (vehicleMap.has(vehicleFilename)) {
        let vehicleMapData = vehicleMap.get(vehicleFilename);

        if (vehicleMapData && vehicleMapData[2]) {
          return vehicleMapData[2].toUpperCase();
        }
      }

      return defaultValue;
    },
    getVehicleBrandByMap: function (
      vehicleFilename: string,
      defaultValue: string
    ): string {
      if (vehicleMap.has(vehicleFilename)) {
        let vehicleMapData = vehicleMap.get(vehicleFilename);

        if (vehicleMapData && vehicleMapData[1]) {
          return vehicleMapData[1];
        }
      }

      return defaultValue;
    },
    getVehicleTypeByMap: function (
      vehicleFilename: string,
      defaultValue: string
    ): string {
      if (vehicleMap.has(vehicleFilename)) {
        let vehicleMapData = vehicleMap.get(vehicleFilename);

        if (vehicleMapData && vehicleMapData[0]) {
          return vehicleMapData[0];
        }
      }

      return defaultValue;
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
      this.setupLeafletMap();
    });
    setInterval(
      () =>
        this.queryData().then(() => {
          this.map.remove();
          this.setupLeafletMap();
        }),
      60000
    );

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
