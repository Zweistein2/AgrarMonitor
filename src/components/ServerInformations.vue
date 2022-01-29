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
    <div class="col-3 mb-3">
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
                  {{ $n(metaData.statistics.money, "currency") }}
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
    <div class="col-3 mb-3">
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
    <div class="col-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <a class="undecorated" data-bs-toggle="collapse" href="#plants">{{
              $t("plants")
            }}</a>
          </h5>
        </div>
        <div class="card-body collapse" id="plants">
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
    <div class="col-3 mb-3">
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
    <div class="col-3 mb-3">
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
    <div class="col-3 mb-3">
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
    <div class="col-3 mb-3">
      <div class="card mb-3">
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
        <div class="card-body collapse" id="economy">
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
    <div class="col-3 mb-3">
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
                <td>{{ fillType.totalAmount }} L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-3 mb-3">
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
                <!-- TODO: Hier müsste das gelagerte Zeugs rein, nicht das bisher verkaufte -->
                <td>{{ fillType.totalAmount }} L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-3 mb-3">
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
                      class="w-35"
                    >
                      {{ $t(vehicleFillState.name) }}
                    </td>
                    <td class="w-45">
                      <img
                        alt="IconLogo"
                        :src="require(`@/assets/${fillType}.png`)"
                        height="32"
                      />
                      {{ $t(fillType) }}
                    </td>
                    <td class="w-20">
                      {{ $n(amount, "liter") }}
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>
          </table>
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
import dataService from "@/utils/dataService";
import calculationService from "@/utils/calculationService";
import Masonry from "masonry-layout";
import "@runette/leaflet-fullscreen";
import vSelect from "vue-select";

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
    mapFactor: (1 / 2048) * 1175,
    selectedFillType: "" as FillType | string,
    masonry: {} as Masonry,
    map: {} as L.Map,
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
      let url = this.$route.query.url as string;
      let serverCode = this.$route.query.serverCode as string;

      this.serverData = await dataService.getServerData(url, serverCode);
      this.economyData = await dataService.getEconomyData(url, serverCode);
      this.metaData = await dataService.getMetaData(url, serverCode);

      let mappedFillStatesNotDistinct: Array<Map<string, VehicleFillState>> =
        this.serverData.Vehicles.Vehicle.map(function (value) {
          let name = value.name;
          if (value.type === "pallet" || value.type === "bigBag") {
            name = value.name + "_" + value.type;
          } else if (value.type !== undefined && value.type.includes("train")) {
            name = value.name + "_train";
          }

          let fillStates = new Map<string, number>();

          if (
            value.fillTypes !== undefined &&
            value.fillTypes !== "" &&
            value.fillLevels !== undefined
          ) {
            for (let j = 0; j < value.fillTypes.split(" ").length; j++) {
              let type = value.fillTypes.split(" ")[j];
              let level = Number.parseInt(value.fillLevels.split(" ")[j]);

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
            if (this.vehicleFillData.vehicleFillStates.has(key)) {
              let existingData =
                this.vehicleFillData.vehicleFillStates.get(key);

              if (existingData !== undefined) {
                this.vehicleFillData.vehicleFillStates.set(
                  key,
                  existingData.concat(new Array<VehicleFillState>(value))
                );
              } else {
                this.vehicleFillData.vehicleFillStates.set(
                  key,
                  new Array<VehicleFillState>(value)
                );
              }
            } else {
              this.vehicleFillData.vehicleFillStates.set(
                key,
                new Array<VehicleFillState>(value)
              );
            }
          }
        })
      );

      console.log(this.vehicleFillData.vehicleFillStates);
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
      if (this.serverData.mapName === "Elmcreek") {
        this.map.addLayer(L.imageOverlay(this.elmcreekMap, this.bounds));
      } else if (this.serverData.mapName === "Erlengrat") {
        this.map.addLayer(L.imageOverlay(this.erlengratMap, this.bounds));
      } else if (this.serverData.mapName === "Haut-Beyleron") {
        this.map.addLayer(L.imageOverlay(this.hautbeyleronMap, this.bounds));
      }
      for (let vehicle of this.serverData.Vehicles.Vehicle) {
        if (
          vehicle.type !== "trainTrailer" &&
          vehicle.type !== "trainTimberTrailer" &&
          vehicle.type !== "bigBag" &&
          vehicle.type !== "pallet"
        ) {
          if (
            vehicle.z !== undefined &&
            vehicle.x !== undefined &&
            vehicle.name !== undefined
          ) {
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
      if (
        this.serverData.Slots.numUsed !== undefined &&
        this.serverData.Slots.numUsed > 0
      ) {
        for (let player of this.serverData.Slots.Player) {
          if (
            player.isUsed &&
            player.z !== undefined &&
            player.x !== undefined &&
            player.text !== undefined
          ) {
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

      this.map.fitBounds(this.bounds);
    },
    mapPeriodToMonth: function (period: string): string {
      switch (period) {
        case "1":
          return "March";
        case "2":
          return "April";
        case "3":
          return "May";
        case "4":
          return "June";
        case "5":
          return "July";
        case "6":
          return "August";
        case "7":
          return "September";
        case "8":
          return "October";
        case "9":
          return "November";
        case "10":
          return "December";
        case "11":
          return "January";
        case "12":
          return "February";
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
  },
  mounted(): void {
    let masonryScript = document.createElement("script");
    masonryScript.setAttribute(
      "src",
      "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
    );
    document.head.appendChild(masonryScript);

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

    this.queryData().then(() => {
      this.selectedFillType = this.economyData.fillTypes.fillType[1];
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
</style>
