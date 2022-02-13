<template>
  <div class="accordion accordion-flush" id="vehicleAccordion">
    <div
      class="accordion-item"
      v-for="farm in farmsData.farm"
      :key="farm.farmId"
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
                          <td class="w-25">
                            <img
                              alt="IconLogo"
                              :src="require(`@/assets/${fillType}.png`)"
                              height="32"
                            />
                            {{ $t(fillType) }}
                          </td>
                          <td class="w-25">
                            {{ $n(Number.parseFloat(amount), "liter") }}
                          </td>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import nameMappingService from "@/utils/nameMappingService";
import vehicleMap from "@/utils/vehicles";

export default defineComponent({
  name: "VehicleComponent",
  props: {
    farmsData: Object as PropType<FarmsData>,
    vehicleData: Object as PropType<VehicleData>,
  },
  data: () => ({
    vehicleFillData: new Map<number, Map<string, Array<VehicleFillState>>>(),
  }),
  methods: {
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
  },
  beforeUpdate(): void {
    let categories = Array<string>();

    for (let value of vehicleMap.values()) {
      if (!categories.includes(value[2])) {
        categories.push(value[2]);
      }
    }

    if (this.vehicleData) {
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
});
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  color: unset;
  background: #e9ecef;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
