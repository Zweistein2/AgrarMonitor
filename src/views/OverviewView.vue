<template>
  <navbar active="overviewLink" :environment-data="environmentData" />
  <overviewComponent
    :economy-data="economyData"
    :vehicle-data="vehicleData"
    :meta-data="metaData"
    :environment-data="environmentData"
    :sales-data="salesData"
    :farms-data="farmsData"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OverviewComponent from "@/components/OverviewComponent.vue";
import Navbar from "@/components/Navbar.vue";
import dataService from "@/services/dataService";
import router from "@/router";
import VehicleComponent from "@/components/VehicleComponent.vue";
import nameMappingService from "@/services/nameMappingService";

export default defineComponent({
  name: "OverviewView",
  components: {
    overviewComponent: OverviewComponent,
    navbar: Navbar,
  },
  data: (): {
    economyData: EconomyData;
    vehicleData: VehicleData;
    metaData: MetaData;
    environmentData: EnvironmentData;
    salesData: SalesData;
    farmsData: FarmsData;
    websocketData: WebsocketData | undefined;
  } => ({
    economyData: {} as EconomyData,
    vehicleData: {} as VehicleData,
    metaData: {} as MetaData,
    environmentData: {} as EnvironmentData,
    salesData: {} as SalesData,
    farmsData: {} as FarmsData,
    websocketData: {} as WebsocketData,
  }),
  watch: {
    websocketData: function (val) {
      if (val !== undefined) {
        let websocketData = val as WebsocketData;

        if (
          websocketData.vehiclesData &&
          websocketData.vehiclesData.vehicles &&
          this.vehicleData &&
          this.vehicleData.vehicle
        ) {
          for (let vehicle of websocketData.vehiclesData.vehicles) {
            let found = false;

            for (let oldVehicle of this.vehicleData.vehicle) {
              if (vehicle.id === oldVehicle.id) {
                oldVehicle.age = vehicle.age;
                oldVehicle.farmId = vehicle.ownerFarmId;
                oldVehicle.id = vehicle.id;
                oldVehicle.filename = vehicle.name;
                oldVehicle.price = vehicle.price;
                oldVehicle.operatingTime = vehicle.operatingTime;

                if (oldVehicle.component && oldVehicle.component.length > 0) {
                  for (let vehicleComponent of oldVehicle.component) {
                    if (vehicleComponent.index === 1) {
                      vehicleComponent.position = `${vehicle.x} ${vehicle.y} ${vehicle.z}`;
                    }
                  }
                } else {
                  oldVehicle.component = Array<VehicleComponent>();
                  let vehicleComponent = {} as VehicleComponent;

                  vehicleComponent.index = 1;
                  vehicleComponent.position = `${vehicle.x} ${vehicle.y} ${vehicle.z}`;

                  oldVehicle.component.push(vehicleComponent);
                }

                if (vehicle.fillUnits && vehicle.fillUnits.length > 0) {
                  oldVehicle.fillUnit = {} as VehicleFillUnitWrapper;
                  oldVehicle.fillUnit.unit = Array<VehicleFillUnit>();

                  let fillUnitIndex = 1;
                  for (let fillUnit of vehicle.fillUnits) {
                    let vehicleFillUnit = {} as VehicleFillUnit;

                    vehicleFillUnit.fillType =
                      nameMappingService.getFillUnitNameByMap(
                        fillUnit.fillType,
                        "UNKNOWN"
                      );
                    vehicleFillUnit.fillLevel = fillUnit.fillLevel;
                    vehicleFillUnit.index = fillUnitIndex;
                    oldVehicle.fillUnit.unit.push(vehicleFillUnit);

                    fillUnitIndex++;
                  }
                }

                found = true;
              }
            }

            if (!found) {
              let newVehicle = {} as VehicleDetails;

              newVehicle.age = vehicle.age;
              newVehicle.farmId = vehicle.ownerFarmId;
              newVehicle.id = vehicle.id;
              newVehicle.filename = vehicle.name;
              newVehicle.price = vehicle.price;
              newVehicle.operatingTime = vehicle.operatingTime;

              newVehicle.component = Array<VehicleComponent>();
              let vehicleComponent = {} as VehicleComponent;

              vehicleComponent.index = 1;
              vehicleComponent.position = `${vehicle.x} ${vehicle.y} ${vehicle.z}`;

              newVehicle.component.push(vehicleComponent);

              if (vehicle.fillUnits && vehicle.fillUnits.length > 0) {
                newVehicle.fillUnit = {} as VehicleFillUnitWrapper;
                newVehicle.fillUnit.unit = Array<VehicleFillUnit>();

                let fillUnitIndex = 1;
                for (let fillUnit of vehicle.fillUnits) {
                  let vehicleFillUnit = {} as VehicleFillUnit;

                  vehicleFillUnit.fillType =
                    nameMappingService.getFillUnitNameByMap(
                      fillUnit.fillType,
                      "UNKNOWN"
                    );
                  vehicleFillUnit.fillLevel = fillUnit.fillLevel;
                  vehicleFillUnit.index = fillUnitIndex;
                  newVehicle.fillUnit.unit.push(vehicleFillUnit);

                  fillUnitIndex++;
                }
              }

              this.vehicleData.vehicle.push(newVehicle);
            }
          }
        }

        this.websocketData = undefined;
      }
    },
  },
  methods: {
    queryData: async function () {
      let url = window.location.origin as string;
      let savegame = this.$route.query.savegame as string;

      this.economyData = await dataService.getEconomyData(url, savegame);
      this.vehicleData = await dataService.getVehicleData(url, savegame);
      this.metaData = await dataService.getMetaData(url, savegame);
      this.environmentData = await dataService.getEnvironmentData(
        url,
        savegame
      );
      this.salesData = await dataService.getSalesData(url, savegame);
      this.farmsData = await dataService.getFarmsData(url, savegame);
    },
    queryWebsocketData: async function () {
      dataService.getWebsocketData();
      setTimeout(() => {
        this.websocketData = dataService.websocketData;
      }, 1000);
    },
  },
  async mounted(): Promise<void> {
    if (
      this.$route.query.savegame === undefined ||
      this.$route.query.savegame === ""
    ) {
      await router.push({
        name: "Overview",
        params: {
          locale: this.$i18n.locale,
        },
        query: {
          serverCode: this.$route.query.serverCode,
          savegame: "1",
        },
      });
    }

    dataService.openWebsocket("ws://" + window.location.host + "/plumber");

    await this.queryData();

    setInterval(() => this.queryData(), 3600000);
    setInterval(() => this.queryWebsocketData(), 2000);
  },
});
</script>
