<template>
  <div
    class="accordion accordion-flush"
    id="vehicleAccordion"
    v-if="farmsData !== undefined"
  >
    <template v-for="farm in farmsData.farm" :key="farm.farmId">
      <div
        class="accordion-item"
        v-if="vehicleFillData.get(farm.farmId) !== undefined"
      >
        <h2 class="accordion-header" :id="'heading' + farm.farmId">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#farm' + farm.farmId"
            aria-expanded="false"
            :aria-controls="'farm' + farm.farmId"
          >
            {{ farm.name }}
          </button>
        </h2>
        <div
          :id="'farm' + farm.farmId"
          class="accordion-collapse collapse"
          :aria-labelledby="'heading' + farm.farmId"
        >
          <div class="accordion-body pt-0 pb-0">
            <div
              class="accordion accordion-flush"
              :id="'vehicleSubAccordion' + farm.farmId"
            >
              <div
                class="accordion-item"
                v-for="[category, vehicleFillStates] in vehicleFillData.get(
                  farm.farmId
                )"
                :key="category"
              >
                <h2
                  class="accordion-header"
                  :id="
                    'subheading' +
                    category.replaceAll(/[^a-zA-Z0-9]/g, '') +
                    'farm' +
                    farm.farmId
                  "
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="
                      '#' +
                      category.replaceAll(/[^a-zA-Z0-9]/g, '') +
                      'farm' +
                      farm.farmId
                    "
                    aria-expanded="false"
                    :aria-controls="
                      category.replaceAll(/[^a-zA-Z0-9]/g, '') +
                      'farm' +
                      farm.farmId
                    "
                  >
                    {{
                      $t(category) +
                      " (" +
                      vehicleFillStates.length +
                      " " +
                      $t("vehicles", vehicleFillStates.length) +
                      ")"
                    }}
                  </button>
                </h2>
                <div
                  :id="
                    category.replaceAll(/[^a-zA-Z0-9]/g, '') +
                    'farm' +
                    farm.farmId
                  "
                  class="accordion-collapse collapse"
                  :aria-labelledby="
                    'subheading' +
                    category.replaceAll(/[^a-zA-Z0-9]/g, '') +
                    'farm' +
                    farm.farmId
                  "
                >
                  <div class="accordion-body ps-2 pt-1 pb-0">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <template
                          v-for="vehicleFillState in vehicleFillStates"
                          :key="vehicleFillState"
                        >
                          <tr
                            :id="
                              'content' +
                              category.replaceAll(/[^a-zA-Z0-9]/g, '') +
                              'farm' +
                              farm.farmId
                            "
                            v-for="(
                              [fillType, amount], index
                            ) in vehicleFillState.fillStates"
                            :key="fillType"
                          >
                            <td
                              v-if="index === 0"
                              :rowspan="vehicleFillState.fillStates.size"
                              class="w-50"
                            >
                              {{ vehicleFillState.name }}
                            </td>
                            <template
                              v-if="
                                category === 'ANIMALS' &&
                                (fillType === 'DRYGRASS' ||
                                  fillType === 'SILAGE' ||
                                  fillType === 'STRAW' ||
                                  fillType === 'MINERAL_FEED')
                              "
                            >
                              <td class="w-12_5">
                                <img
                                  class="ms-5"
                                  alt="IconLogo"
                                  :src="iconSrc(fillType)"
                                  height="32"
                                />
                                {{ $t(fillType) }}
                              </td>
                              <td class="w-25">
                                <span
                                  v-if="fillType === 'DRYGRASS'"
                                  class="figure-caption"
                                  >Ideal: 20-75%</span
                                >
                                <span
                                  v-if="fillType === 'SILAGE'"
                                  class="figure-caption"
                                  >Ideal: 20-75%</span
                                >
                                <span
                                  v-if="fillType === 'STRAW'"
                                  class="figure-caption"
                                  >Ideal: 0-30%</span
                                >
                                <span
                                  v-if="fillType === 'MINERAL_FEED'"
                                  class="figure-caption"
                                  >Ideal: 0-7%</span
                                >
                                <div class="progress">
                                  <div
                                    class="progress-bar progress-bar-striped"
                                    :id="
                                      'progressFilltype_' +
                                      fillType +
                                      '_Amount_' +
                                      amount
                                    "
                                    role="progressbar"
                                    style="width: 0"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                              <td class="w-12_5">
                                {{ $n(Number.parseFloat(amount), "liter") }}
                              </td>
                            </template>
                            <template v-else>
                              <td class="w-12_5">
                                <img
                                  alt="IconLogo"
                                  :src="iconSrc(fillType)"
                                  height="32"
                                />
                                {{ $t(fillType) }}
                              </td>
                              <td class="w-25"></td>
                              <td class="w-12_5">
                                {{ $n(Number.parseFloat(amount), "liter") }}
                              </td>
                            </template>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import nameMappingService from "@/services/nameMappingService";
import vehicleMap from "@/utils/vehicles";

export default defineComponent({
  name: "VehicleComponent",
  props: {
    farmsDataProp: Object as PropType<FarmsData>,
    vehicleDataProp: Object as PropType<VehicleData>,
  },
  data: () => ({
    vehicleFillData: new Map<number, Map<string, Array<VehicleFillState>>>(),
    farmsData: {} as FarmsData,
    vehicleData: {} as VehicleData,
  }),
  watch: {
    farmsDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.farmsData = val;
        }
      },
      deep: true,
      immediate: true,
    },
    vehicleDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.vehicleData = val;

          this.updateVehicleData();
          this.updateMixerWagonData();
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    iconSrc: function (name: string): string {
      try {
        return require(`@/assets/icons/${name}.png`);
      } catch (e) {
        return require("@/assets/icons/AIR.png");
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
    updateVehicleData: function () {
      if (
        this.vehicleData &&
        this.vehicleData.vehicle &&
        this.vehicleData.vehicle.length > 0
      ) {
        let mappedFillStatesNotDistinct: Array<
          Map<number, Map<string, VehicleFillState>>
        > = this.vehicleData.vehicle.map((vehicle) => {
          if (vehicle.farmId && vehicle.farmId > 0) {
            if (vehicle.filename) {
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
              let fillStates = new Map<string, number>();

              if (vehicle.fillUnit && vehicle.fillUnit.unit) {
                for (let i = 0; i < vehicle.fillUnit.unit.length; i++) {
                  let type = vehicle.fillUnit.unit[i].fillType;
                  let level = vehicle.fillUnit.unit[i].fillLevel;

                  if (type && level && type !== "UNKNOWN" && type !== "AIR") {
                    fillStates.set(type, level);
                  }
                }
              } else if (
                vehicle.mixerWagon &&
                vehicle.mixerWagon.fillType &&
                vehicle.mixerWagon.fillType.length == 4
              ) {
                let hay = vehicle.mixerWagon.fillType[0].fillLevel
                  ? Number.parseFloat(vehicle.mixerWagon.fillType[0].fillLevel)
                  : 0;
                let silage = vehicle.mixerWagon.fillType[1].fillLevel
                  ? Number.parseFloat(vehicle.mixerWagon.fillType[1].fillLevel)
                  : 0;
                let straw = vehicle.mixerWagon.fillType[2].fillLevel
                  ? Number.parseFloat(vehicle.mixerWagon.fillType[2].fillLevel)
                  : 0;
                let mineralfeed = vehicle.mixerWagon.fillType[3].fillLevel
                  ? Number.parseFloat(vehicle.mixerWagon.fillType[3].fillLevel)
                  : 0;

                let total = hay + silage + straw + mineralfeed;

                let hayPercentage = (hay / total) * 100;
                let silagePercentage = (silage / total) * 100;
                let strawPercentage = (straw / total) * 100;
                let mineralfeedPercentage = (mineralfeed / total) * 100;

                if (
                  hayPercentage >= 20 &&
                  hayPercentage <= 75 &&
                  silagePercentage >= 20 &&
                  silagePercentage <= 75 &&
                  strawPercentage >= 0 &&
                  strawPercentage <= 30 &&
                  mineralfeedPercentage >= 0 &&
                  mineralfeedPercentage <= 7
                ) {
                  fillStates.set("FORAGE", total);
                  fillStates.set("DRYGRASS", hay);
                  fillStates.set("SILAGE", silage);
                  fillStates.set("STRAW", straw);
                  fillStates.set("MINERAL_FEED", mineralfeed);
                } else {
                  fillStates.set("FORAGE_MIXING", total);
                  fillStates.set("DRYGRASS", hay);
                  fillStates.set("SILAGE", silage);
                  fillStates.set("STRAW", straw);
                  fillStates.set("MINERAL_FEED", mineralfeed);
                }
              }

              let vehicleFillStates = new Map<string, VehicleFillState>([
                [
                  nameMappingService.getVehicleCategoryByMap(
                    vehicle.filename,
                    "UNKNOWN"
                  ) as string,
                  { name, fillStates } as VehicleFillState,
                ],
              ]);

              return new Map<number, Map<string, VehicleFillState>>([
                [vehicle.farmId, vehicleFillStates],
              ]);
            } else {
              let vehicleFillStates = new Map<string, VehicleFillState>([
                [
                  "",
                  {
                    name: "",
                    fillStates: new Map<string, number>(),
                  } as VehicleFillState,
                ],
              ]);

              return new Map<number, Map<string, VehicleFillState>>([
                [vehicle.farmId, vehicleFillStates],
              ]);
            }
          } else {
            return new Map<number, Map<string, VehicleFillState>>([
              [-1, new Map<string, VehicleFillState>()],
            ]);
          }
        });

        this.vehicleFillData = new Map<
          number,
          Map<string, Array<VehicleFillState>>
        >();

        mappedFillStatesNotDistinct.forEach((value) =>
          value.forEach((value: Map<string, VehicleFillState>, key: number) => {
            let farmId = key;

            if (farmId > 0) {
              value.forEach((value: VehicleFillState, key: string) => {
                if (value.fillStates.size > 0) {
                  let existingData = this.vehicleFillData.get(farmId);

                  if (existingData) {
                    this.vehicleFillData.set(
                      farmId,
                      this.mergeArray(
                        existingData,
                        key,
                        new Array<VehicleFillState>(value)
                      )
                    );
                  } else {
                    let vehicleFillStates = new Map<
                      string,
                      Array<VehicleFillState>
                    >();

                    vehicleFillStates = this.mergeArray(
                      vehicleFillStates,
                      key,
                      new Array<VehicleFillState>(value)
                    );

                    this.vehicleFillData.set(farmId, vehicleFillStates);
                  }
                }
              });
            }
          })
        );
      }
    },
    updateMixerWagonData: function () {
      if (
        this.vehicleData &&
        this.vehicleData.vehicle &&
        this.vehicleData.vehicle.length > 0
      ) {
        this.vehicleData.vehicle.forEach((vehicle) => {
          if (vehicle.farmId && vehicle.farmId > 0) {
            if (vehicle.filename) {
              if (
                vehicle.mixerWagon &&
                vehicle.mixerWagon.fillType &&
                vehicle.mixerWagon.fillType.length == 4
              ) {
                let hay = vehicle.mixerWagon.fillType[0].fillLevel
                  ? Number.parseFloat(vehicle.mixerWagon.fillType[0].fillLevel)
                  : 0;
                let silage = vehicle.mixerWagon.fillType[1].fillLevel
                  ? Number.parseFloat(vehicle.mixerWagon.fillType[1].fillLevel)
                  : 0;
                let straw = vehicle.mixerWagon.fillType[2].fillLevel
                  ? Number.parseFloat(vehicle.mixerWagon.fillType[2].fillLevel)
                  : 0;
                let mineralfeed = vehicle.mixerWagon.fillType[3].fillLevel
                  ? Number.parseFloat(vehicle.mixerWagon.fillType[3].fillLevel)
                  : 0;

                let total = hay + silage + straw + mineralfeed;

                let hayPercentage = (hay / total) * 100;
                let silagePercentage = (silage / total) * 100;
                let strawPercentage = (straw / total) * 100;
                let mineralfeedPercentage = (mineralfeed / total) * 100;

                let hayProgress = document.getElementById(
                  "progressFilltype_DRYGRASS_Amount_" + hay
                );
                let silageProgress = document.getElementById(
                  "progressFilltype_SILAGE_Amount_" + silage
                );
                let strawProgress = document.getElementById(
                  "progressFilltype_STRAW_Amount_" + straw
                );
                let mineralfeedProgress = document.getElementById(
                  "progressFilltype_MINERAL_FEED_Amount_" + mineralfeed
                );
                if (hayProgress) {
                  hayProgress.setAttribute(
                    "aria-valuenow",
                    hayPercentage.toString()
                  );
                  hayProgress.setAttribute(
                    "style",
                    "width: " + hayPercentage.toString() + "%"
                  );
                  hayProgress.textContent =
                    Math.round(hayPercentage).toString() + "%";
                  if (hayPercentage >= 20 && hayPercentage <= 75) {
                    hayProgress.classList.add("bg-success");
                  } else {
                    hayProgress.classList.add("bg-danger");
                  }
                }
                if (silageProgress) {
                  silageProgress.setAttribute(
                    "aria-valuenow",
                    silagePercentage.toString()
                  );
                  silageProgress.setAttribute(
                    "style",
                    "width: " + silagePercentage.toString() + "%"
                  );
                  silageProgress.textContent =
                    Math.round(silagePercentage).toString() + "%";
                  if (silagePercentage >= 20 && silagePercentage <= 75) {
                    silageProgress.classList.add("bg-success");
                  } else {
                    silageProgress.classList.add("bg-danger");
                  }
                }
                if (strawProgress) {
                  strawProgress.setAttribute(
                    "aria-valuenow",
                    strawPercentage.toString()
                  );
                  strawProgress.setAttribute(
                    "style",
                    "width: " + strawPercentage.toString() + "%"
                  );
                  strawProgress.textContent =
                    Math.round(strawPercentage).toString() + "%";
                  if (strawPercentage >= 0 && strawPercentage <= 30) {
                    strawProgress.classList.add("bg-success");
                  } else {
                    strawProgress.classList.add("bg-danger");
                  }
                }
                if (mineralfeedProgress) {
                  mineralfeedProgress.setAttribute(
                    "aria-valuenow",
                    mineralfeedPercentage.toString()
                  );
                  mineralfeedProgress.setAttribute(
                    "style",
                    "width: " + mineralfeedPercentage.toString() + "%"
                  );
                  mineralfeedProgress.textContent =
                    Math.round(mineralfeedPercentage).toString() + "%";
                  if (
                    mineralfeedPercentage >= 0 &&
                    mineralfeedPercentage <= 7
                  ) {
                    mineralfeedProgress.classList.add("bg-success");
                  } else {
                    mineralfeedProgress.classList.add("bg-danger");
                  }
                }
              }
            }
          }
        });
      }
    },
  },
  beforeUpdate(): void {
    let categories = Array<string>();

    for (let value of vehicleMap.values()) {
      if (!categories.includes(value[2])) {
        categories.push(value[2]);
      }
    }

    this.updateVehicleData();
  },
  updated() {
    this.updateMixerWagonData();
  },
});
</script>

<style scoped>
.w-12_5 {
  width: 12.5% !important;
}

.accordion-button:not(.collapsed) {
  color: unset;
  background: #e9ecef;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
