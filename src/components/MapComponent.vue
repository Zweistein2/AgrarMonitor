<template>
  <div id="mapContainer"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import "leaflet/dist/leaflet.css";
import "@runette/leaflet-fullscreen/dist/leaflet.fullscreen.css";
import L, { LeafletMouseEvent } from "leaflet";
import nameMappingService from "@/services/nameMappingService";
import "@runette/leaflet-fullscreen";
import fieldsMap from "@/utils/fields";
import i18n from "@/i18n";
import farmsMap from "@/utils/farms";
import { toRaw } from "vue";

export default defineComponent({
  name: "MapComponent",
  props: {
    vehicleDataProp: Object as PropType<VehicleData>,
    metaDataProp: Object as PropType<MetaData>,
    farmsDataProp: Object as PropType<FarmsData>,
    playerDataProp: Object as PropType<PlayerData>,
    mapName: String,
    showVehicles: Boolean,
    showFields: Boolean,
  },
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
    nfmarschMap() {
      return require("@/mods/FS22_NF_Marsch_4fach_oG/assets/nfmarsch.png");
    },
    lkhroMap() {
      return require("@/mods/FS22_Lk_HRO_4fach/assets/lkhro.png");
    },
  },
  data: () => ({
    selectedMapName: "Elmcreek" as string,
    center: [0, 0] as L.LatLngExpression,
    bounds: [[-1024, -1024] as L.LatLngTuple, [1024, 1024] as L.LatLngTuple],
    mapFactor: 2048 / 2560,
    map: {} as L.Map,
    vehicleData: {} as VehicleData,
    farmsData: {} as FarmsData,
    metaData: {} as MetaData,
    playerData: {} as PlayerData,
    fontawesomeScript: {} as HTMLScriptElement,
  }),
  watch: {
    vehicleDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.vehicleData = val;

          this.updateMarkers();
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
    farmsDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.farmsData = val;
        }
      },
      deep: true,
      immediate: true,
    },
    playerDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.playerData = val;

          this.updateMarkers();
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    addVehicleMarkers: function (map: L.Map) {
      if (
        this.vehicleData &&
        this.vehicleData.vehicle &&
        this.vehicleData.vehicle.length > 0
      ) {
        for (let vehicle of this.vehicleData.vehicle) {
          for (let component of vehicle.component) {
            if (
              component.index !== undefined &&
              component.index === 1 &&
              component.position &&
              vehicle.filename
            ) {
              let z = Number.parseFloat(component.position.split(" ")[2]);
              let x = Number.parseFloat(component.position.split(" ")[0]);
              let brand = nameMappingService.getVehicleBrandByMap(
                vehicle.filename,
                ""
              );
              let name = nameMappingService.getVehicleNameByMap(
                vehicle.filename,
                "UNKNOWN"
              );

              if (brand !== "") {
                name = brand.concat(" ").concat(name);
              }

              let color = "#000080";

              if (
                vehicle.farmId !== undefined &&
                this.farmsData !== undefined &&
                this.farmsData.farm !== undefined
              ) {
                for (let farm of this.farmsData.farm) {
                  if (
                    farm.farmId === vehicle.farmId &&
                    farm.color !== undefined
                  ) {
                    let farmColor = farmsMap.get(farm.color);

                    if (farmColor) {
                      color = farmColor[0];
                    }
                  }
                }
              }

              let vehicleType = "trailer";
              let vehicleCategory = nameMappingService.getVehicleTypeByMap(
                vehicle.filename,
                "UNKNOWN"
              ) as string;

              if (
                vehicleCategory.includes("locomotive") ||
                vehicleCategory.includes("train")
              ) {
                vehicleType = "train";
              } else if (vehicleCategory === "car") {
                vehicleType = "car";
              } else if (
                vehicleCategory.includes("tractor") ||
                vehicleCategory.includes("Drivable") ||
                vehicleCategory.includes("drivable")
              ) {
                vehicleType = "tractor";
              } else if (vehicleCategory === "pallet") {
                vehicleType = "pallet-boxes";
              } else if (vehicleCategory === "UNKNOWN") {
                vehicleType = "question";
              }

              map.addLayer(
                L.marker(
                  L.latLng(z * this.mapFactor * -1, x * this.mapFactor),
                  {
                    icon: L.divIcon({
                      html: `<span class="fa-stack fa-2x"><i class="fa-solid fa-location-pin fa-stack-2x" style="color: ${color};"></i><i class="fa-solid fa-${vehicleType} fa-inverse fa-stack-1x fa-xs" style="margin-top: -7px;"></i></span>`,
                      className: "defaultMarker",
                      iconSize: [60, 48],
                      iconAnchor: [30, 48],
                      popupAnchor: [30, 0],
                      tooltipAnchor: [0, -30],
                    }),
                    riseOnHover: true,
                  }
                ).bindTooltip(name)
              );
            }
          }
        }
      }
    },
    addPlayerMarkers: function (map: L.Map) {
      if (
        this.playerData &&
        this.playerData.players &&
        this.playerData.players.length > 0
      ) {
        for (let player of this.playerData.players) {
          if (
            player.x !== undefined &&
            player.y !== undefined &&
            player.y !== -200 &&
            player.z !== undefined &&
            player.name !== undefined &&
            player.farmId !== undefined
          ) {
            let color = "#000080";

            if (
              this.farmsData !== undefined &&
              this.farmsData.farm !== undefined
            ) {
              for (let farm of this.farmsData.farm) {
                if (farm.farmId === player.farmId && farm.color !== undefined) {
                  let farmColor = farmsMap.get(farm.color);

                  if (farmColor) {
                    color = farmColor[0];
                  }
                }
              }
            }

            map.addLayer(
              L.marker(
                L.latLng(
                  player.z * this.mapFactor * -1,
                  player.x * this.mapFactor
                ),
                {
                  icon: L.divIcon({
                    html: `<span class="fa-stack fa-2x"><i class="fa-solid fa-location-pin fa-stack-2x" style="color: ${color};"></i><i class="fa-solid fa-user-cowboy fa-inverse fa-stack-1x fa-xs" style="margin-top: -7px;"></i></span>`,
                    className: "defaultMarker",
                    iconSize: [60, 48],
                    iconAnchor: [30, 48],
                    popupAnchor: [30, 0],
                    tooltipAnchor: [0, -30],
                  }),
                  riseOnHover: true,
                }
              ).bindTooltip(player.name)
            );
          }
        }
      }
    },
    addFieldMarkers: function (map: L.Map) {
      if (fieldsMap.has(this.selectedMapName)) {
        let fieldsForMap = fieldsMap.get(this.selectedMapName);

        if (fieldsForMap) {
          for (let field of fieldsForMap) {
            let fieldId = field[0];
            let fieldData = field[1];

            if (fieldData) {
              let z = fieldData[0][2];
              let x = fieldData[0][0];
              let hectares = fieldData[1];

              map.addLayer(
                L.marker(
                  L.latLng(z * this.mapFactor * -1, x * this.mapFactor),
                  {
                    icon: L.divIcon({
                      html: `<span class="fa-stack fa-2x"><i class="fa-solid fa-location-pin fa-stack-2x"></i><i class="fa-solid fa-wheat fa-inverse fa-stack-1x fa-xs" style="margin-top: -7px;"></i></span>`,
                      className: "fieldMarker",
                      iconSize: [60, 48],
                      iconAnchor: [30, 48],
                      popupAnchor: [30, 0],
                      tooltipAnchor: [0, -30],
                    }),
                    riseOnHover: true,
                    title: fieldId.toString(),
                  }
                )
                  .bindTooltip(
                    fieldId.toString() +
                      " (" +
                      i18n.global.n(hectares, "hectare") +
                      ")"
                  )
                  .on("click", this.markerClicked)
              );
            }
          }
        }
      }
    },
    markerClicked: function (event: LeafletMouseEvent) {
      let fieldId = event.target.options.title;

      this.$emit("selectField", fieldId);
    },
    setupLeafletMap: function () {
      const map = L.map("mapContainer", {
        crs: L.CRS.Simple,
        center: this.center,
        minZoom: -2,
        zoom: 0,
        maxZoom: 4,
        zoomControl: false,
      });

      this.addControlsToMap(map);
      this.addMarkersToMap(map);

      this.map = map;
    },
    addControlsToMap: function (map: L.Map) {
      map.addControl(
        L.control.fullscreen({
          position: "topright",
        })
      );
      map.addControl(
        L.control.zoom({
          position: "topright",
        })
      );
    },
    addMarkersToMap: function (map: L.Map) {
      if (
        this.metaData &&
        this.metaData.settings &&
        this.metaData.settings.mapTitle
      ) {
        this.selectedMapName = this.metaData.settings.mapTitle;
      } else if (this.mapName !== undefined) {
        this.selectedMapName = this.mapName;
      }

      if (this.selectedMapName === undefined) {
        map.addLayer(L.imageOverlay(this.elmcreekMap, this.bounds));
      } else if (this.selectedMapName === "Erlengrat") {
        map.addLayer(L.imageOverlay(this.erlengratMap, this.bounds));
      } else if (this.selectedMapName === "Haut-Beyleron") {
        map.addLayer(L.imageOverlay(this.hautbeyleronMap, this.bounds));
      } else if (
        this.selectedMapName === "NF Marsch 4fach oG" ||
        this.selectedMapName === "NF Marsch 4fach" ||
        this.selectedMapName === "NORTH FRISIAN MARCH 4X" ||
        this.selectedMapName === "NFMarsch"
      ) {
        this.mapFactor = 2048 / 5120;
        map.addLayer(L.imageOverlay(this.nfmarschMap, this.bounds));
      } else if (
        this.selectedMapName === "LkHRO" ||
        this.selectedMapName === "LkHRO 4fach" ||
        this.selectedMapName === "Landkreis Rostock"
      ) {
        this.mapFactor = 2048 / 5120;
        map.addLayer(L.imageOverlay(this.lkhroMap, this.bounds));
      } else {
        map.addLayer(L.imageOverlay(this.elmcreekMap, this.bounds));
      }

      if (this.showVehicles) {
        this.addPlayerMarkers(map);
        this.addVehicleMarkers(map);
      }
      if (this.showFields) {
        this.addFieldMarkers(map);
      }
    },
    updateMarkers: function () {
      if (Object.keys(toRaw(this.map)).length > 0) {
        let layers = Array<L.Layer>();

        toRaw(this.map).eachLayer((layer) => {
          layers.push(layer);
        });

        for (let layer of layers) {
          toRaw(this.map).removeLayer(layer);
        }

        this.addMarkersToMap(toRaw(this.map) as L.Map);
      }
    },
  },
  mounted(): void {
    if (this.fontawesomeScript.id === undefined) {
      this.fontawesomeScript = document.createElement("script");
      this.fontawesomeScript.setAttribute(
        "src",
        "https://kit.fontawesome.com/0f75b8f3da.js"
      );
      this.fontawesomeScript.setAttribute("id", "fontawesomeScript");
      document.head.appendChild(this.fontawesomeScript);
    }

    this.setupLeafletMap();
  },
  unmounted(): void {
    if (this.fontawesomeScript.id !== undefined) {
      document.head.removeChild(this.fontawesomeScript);
      let faVFourFontFace = document.getElementById("fa-v4-font-face");
      let faVFiveFontFace = document.getElementById("fa-v5-font-face");
      let faVFourShims = document.getElementById("fa-v4-shims");
      let faMain = document.getElementById("fa-main");

      if (faVFourFontFace) {
        document.head.removeChild(faVFourFontFace);
      }
      if (faVFiveFontFace) {
        document.head.removeChild(faVFiveFontFace);
      }
      if (faVFourShims) {
        document.head.removeChild(faVFourShims);
      }
      if (faMain) {
        document.head.removeChild(faMain);
      }
    }
  },
  updated(): void {
    this.updateMarkers();
  },
});
</script>

<style scoped>
#mapContainer {
  margin: auto;
  width: 21vw;
  height: 21vw;
  min-height: 130px;
  min-width: 130px;
}
</style>
