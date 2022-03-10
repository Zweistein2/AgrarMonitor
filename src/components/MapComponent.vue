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

export default defineComponent({
  name: "MapComponent",
  props: {
    vehicleData: Object as PropType<VehicleData>,
    serverData: Object as PropType<ServerData>,
    metaData: Object as PropType<MetaData>,
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
    fieldmarker() {
      return require("@/assets/field-icon.png");
    },
    fieldmarker2x() {
      return require("@/assets/field-icon-2x.png");
    },
    markerShadow() {
      return require("@/assets/marker-shadow.png");
    },
  },
  data: () => ({
    selectedMapName: "Elmcreek" as string,
    center: [0, 0] as L.LatLngExpression,
    bounds: [[-1024, -1024] as L.LatLngTuple, [1024, 1024] as L.LatLngTuple],
    mapFactor: 2048 / 2560,
    map: {} as L.Map,
  }),
  methods: {
    addVehicleMarkers: function (playerIcon: L.Icon) {
      if (this.serverData) {
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
    },
    addFieldMarkers: function (fieldIcon: L.Icon) {
      let fieldsForMap = fieldsMap.get(this.selectedMapName);

      if (fieldsForMap) {
        for (let field of fieldsForMap) {
          let fieldId = field[0];
          let fieldData = field[1];

          if (fieldData) {
            let z = fieldData[0][2];
            let x = fieldData[0][0];
            let hectares = fieldData[1];

            this.map.addLayer(
              L.marker(L.latLng(z * this.mapFactor * -1, x * this.mapFactor), {
                icon: fieldIcon,
                title: fieldId.toString(),
              })
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
    },
    markerClicked: function (event: LeafletMouseEvent) {
      let fieldId = event.target.options.title;

      this.$emit("selectField", fieldId);
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
      const fieldIcon = L.icon({
        iconRetinaUrl: this.fieldmarker2x,
        iconUrl: this.fieldmarker,
        shadowUrl: this.markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      });

      if (this.serverData && this.serverData.mapName) {
        this.selectedMapName = this.serverData.mapName;
      } else if (
        this.metaData &&
        this.metaData.settings &&
        this.metaData.settings.mapTitle
      ) {
        this.selectedMapName = this.metaData.settings.mapTitle;
      } else if (this.mapName !== undefined) {
        this.selectedMapName = this.mapName;
      }

      this.map = L.map("mapContainer", {
        crs: L.CRS.Simple,
        center: this.center,
        minZoom: -1,
        zoom: 0,
        maxZoom: 2,
      });
      this.map.addControl(L.control.fullscreen({}));

      if (this.selectedMapName === undefined) {
        this.map.addLayer(L.imageOverlay(this.elmcreekMap, this.bounds));
      } else if (this.selectedMapName === "Erlengrat") {
        this.map.addLayer(L.imageOverlay(this.erlengratMap, this.bounds));
      } else if (this.selectedMapName === "Haut-Beyleron") {
        this.map.addLayer(L.imageOverlay(this.hautbeyleronMap, this.bounds));
      } else {
        this.map.addLayer(L.imageOverlay(this.elmcreekMap, this.bounds));
      }

      if (this.showVehicles) {
        this.addVehicleMarkers(playerIcon);
      }
      if (this.showFields) {
        this.addFieldMarkers(fieldIcon);
      }
    },
  },
  mounted(): void {
    this.setupLeafletMap();
  },
  updated(): void {
    if (Object.keys(this.map).length > 0) {
      this.map.remove();
    }

    this.setupLeafletMap();
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
