<template>
  <div id="mapContainer"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import "leaflet/dist/leaflet.css";
import "@runette/leaflet-fullscreen/dist/leaflet.fullscreen.css";
import L from "leaflet";
import nameMappingService from "@/utils/nameMappingService";
import "@runette/leaflet-fullscreen";

export default defineComponent({
  name: "MapComponent",
  props: {
    vehicleData: Object as PropType<VehicleData>,
    serverData: Object as PropType<ServerData>,
    metaData: Object as PropType<MetaData>,
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
    markerShadow() {
      return require("@/assets/marker-shadow.png");
    },
  },
  data: () => ({
    center: [0, 0] as L.LatLngExpression,
    bounds: [[-1024, -1024] as L.LatLngTuple, [1024, 1024] as L.LatLngTuple],
    mapFactor: 2048 / 2560,
    map: {} as L.Map,
  }),
  methods: {
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
  },
  updated(): void {
    if (Object.keys(this.map).length > 0) {
      this.map.remove();
    }
    if (this.vehicleData && this.vehicleData.vehicle) {
      this.setupLeafletMap();
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
</style>
