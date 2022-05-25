<template>
  <div
    class="accordion accordion-flush"
    id="storageAccordion"
    v-if="farmsData !== undefined && placeablesData !== undefined"
  >
    <template v-for="farm in farmsData.farm" :key="farm.farmId">
      <div
        class="accordion-item"
        v-if="storageFillStatesPerFarm.get(farm.farmId) !== undefined"
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
              :id="'storageSubAccordion' + farm.farmId"
            >
              <div
                class="accordion-item"
                v-for="(
                  fillStatesPerPlaceable, index
                ) in storageFillStatesPerFarm.get(farm.farmId)"
                :key="index"
              >
                <h2
                  class="accordion-header"
                  :id="
                    'subheading' +
                    fillStatesPerPlaceable[0].replaceAll(/[^a-zA-Z0-9]/g, '') +
                    '_' +
                    index +
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
                      fillStatesPerPlaceable[0].replaceAll(
                        /[^a-zA-Z0-9]/g,
                        ''
                      ) +
                      '_' +
                      index +
                      'farm' +
                      farm.farmId
                    "
                    aria-expanded="false"
                    :aria-controls="
                      fillStatesPerPlaceable[0].replaceAll(
                        /[^a-zA-Z0-9]/g,
                        ''
                      ) +
                      '_' +
                      index +
                      'farm' +
                      farm.farmId
                    "
                  >
                    {{ fillStatesPerPlaceable[0] }}
                  </button>
                </h2>
                <div
                  :id="
                    fillStatesPerPlaceable[0].replaceAll(/[^a-zA-Z0-9]/g, '') +
                    '_' +
                    index +
                    'farm' +
                    farm.farmId
                  "
                  class="accordion-collapse collapse"
                  :aria-labelledby="
                    'subheading' +
                    fillStatesPerPlaceable[0].replaceAll(/[^a-zA-Z0-9]/g, '') +
                    '_' +
                    index +
                    'farm' +
                    farm.farmId
                  "
                >
                  <div class="accordion-body ps-2 pt-1 pb-0">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr
                          :id="
                            'content' +
                            fillStatesPerPlaceable[0].replaceAll(
                              /[^a-zA-Z0-9]/g,
                              ''
                            ) +
                            '_' +
                            index +
                            'farm' +
                            farm.farmId
                          "
                          v-for="fillStates in fillStatesPerPlaceable[1]"
                          :key="fillStates[0]"
                        >
                          <td class="w-50" v-if="fillStates[1][1]">
                            <img
                              alt="IconLogo"
                              :src="iconSrc(fillStates[0])"
                              height="32"
                            />
                            {{
                              $t(fillStates[0]) + " (" + fillStates[1][1] + ")"
                            }}
                          </td>
                          <td class="w-50" v-else>
                            <img
                              alt="IconLogo"
                              :src="iconSrc(fillStates[0])"
                              height="32"
                            />
                            {{ $t(fillStates[0]) }}
                          </td>
                          <td class="w-50">
                            {{
                              $n(Number.parseFloat(fillStates[1][0]), "liter")
                            }}
                          </td>
                        </tr>
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
import i18n from "@/i18n";

export default defineComponent({
  name: "StorageComponent",
  props: {
    farmsDataProp: Object as PropType<FarmsData>,
    placeablesDataProp: Object as PropType<PlaceableData>,
  },
  data: () => ({
    storageFillStatesPerFarm: new Map<
      number,
      Array<[string, Map<string, [number, string]>]>
    >(),
    farmsData: {} as FarmsData,
    placeablesData: {} as PlaceableData,
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
    placeablesDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.placeablesData = val;
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
  },
  beforeUpdate(): void {
    this.storageFillStatesPerFarm = new Map<
      number,
      Array<[string, Map<string, [number, string]>]>
    >();

    if (this.placeablesData && this.placeablesData.placeable !== undefined) {
      for (let placeable of this.placeablesData.placeable) {
        if (
          placeable.silo !== undefined &&
          placeable.silo.storage !== undefined &&
          placeable.silo.storage.node !== undefined &&
          placeable.silo.storage.node.length > 0 &&
          placeable.farmId !== undefined &&
          placeable.farmId > 0
        ) {
          if (placeable.silo.storage.farmId && placeable.filename) {
            let fillStateForPlaceable = new Array<
              [string, Map<string, [number, string]>]
            >();

            let fillStates = new Map<string, [number, string]>();

            for (let node of placeable.silo.storage.node) {
              if (node.fillType && node.fillLevel) {
                fillStates.set(node.fillType, [node.fillLevel, ""]);
              }
            }

            fillStateForPlaceable.push([
              nameMappingService.getPlaceableNameByMap(
                placeable.filename,
                "UNKNOWN"
              ),
              fillStates,
            ]);

            if (
              this.storageFillStatesPerFarm.has(placeable.silo.storage.farmId)
            ) {
              let existingData = this.storageFillStatesPerFarm.get(
                placeable.silo.storage.farmId
              );

              if (existingData) {
                for (let fillStateForPlaceableElement of fillStateForPlaceable) {
                  existingData.push(fillStateForPlaceableElement);
                }
              }
            } else {
              this.storageFillStatesPerFarm.set(
                placeable.silo.storage.farmId,
                fillStateForPlaceable
              );
            }
          }
        } else if (
          placeable.farmId &&
          placeable.farmId > 0 &&
          placeable.filename &&
          placeable.bunkerSilo &&
          placeable.bunkerSilo.fermentingTime &&
          placeable.bunkerSilo.fillLevel &&
          placeable.bunkerSilo.compactedFillLevel
        ) {
          let fillStateForPlaceable = new Array<
            [string, Map<string, [number, string]>]
          >();
          let fillStates = new Map<string, [number, string]>();

          let fermentingTimeInHours =
            placeable.bunkerSilo.fermentingTime / 60 / 60 / 1000;
          let compressionRate = 0;
          if (placeable.bunkerSilo.fillLevel !== 0.0) {
            compressionRate = Math.round(
              (placeable.bunkerSilo.compactedFillLevel /
                placeable.bunkerSilo.fillLevel) *
                100
            );
          }

          if (fermentingTimeInHours < 24) {
            if (fermentingTimeInHours === 0) {
              fillStates.set("GRASS", [
                placeable.bunkerSilo.fillLevel,
                compressionRate.toString() + "% " + i18n.global.t("compressed"),
              ]);
            } else {
              fillStates.set("GRASS", [
                placeable.bunkerSilo.fillLevel,
                "100% " +
                  i18n.global.t("compressed") +
                  ", " +
                  (24 - fermentingTimeInHours).toString() +
                  " " +
                  i18n.global.t("hoursLeft"),
              ]);
            }
          } else {
            fillStates.set("SILAGE", [
              placeable.bunkerSilo.compactedFillLevel,
              "",
            ]);
          }
          fillStateForPlaceable.push([
            nameMappingService.getPlaceableNameByMap(
              placeable.filename,
              "UNKNOWN"
            ),
            fillStates,
          ]);
          if (this.storageFillStatesPerFarm.has(placeable.farmId)) {
            let existingData = this.storageFillStatesPerFarm.get(
              placeable.farmId
            );

            if (existingData) {
              for (let fillStateForPlaceableElement of fillStateForPlaceable) {
                existingData.push(fillStateForPlaceableElement);
              }
            }
          } else {
            this.storageFillStatesPerFarm.set(
              placeable.farmId,
              fillStateForPlaceable
            );
          }
        } else if (
          placeable.farmId &&
          placeable.farmId > 0 &&
          placeable.filename &&
          placeable.productionPoint &&
          placeable.productionPoint.storage &&
          placeable.productionPoint.storage.node &&
          placeable.productionPoint.storage.node.length > 0
        ) {
          if (placeable.productionPoint.storage.farmId && placeable.filename) {
            let fillStateForPlaceable = new Array<
              [string, Map<string, [number, string]>]
            >();

            let fillStates = new Map<string, [number, string]>();

            for (let node of placeable.productionPoint.storage.node) {
              if (node.fillType && node.fillLevel) {
                fillStates.set(node.fillType, [node.fillLevel, ""]);
              }
            }

            fillStateForPlaceable.push([
              nameMappingService.getPlaceableNameByMap(
                placeable.filename,
                "UNKNOWN"
              ),
              fillStates,
            ]);

            if (
              this.storageFillStatesPerFarm.has(
                placeable.productionPoint.storage.farmId
              )
            ) {
              let existingData = this.storageFillStatesPerFarm.get(
                placeable.productionPoint.storage.farmId
              );

              if (existingData) {
                for (let fillStateForPlaceableElement of fillStateForPlaceable) {
                  existingData.push(fillStateForPlaceableElement);
                }
              }
            } else {
              this.storageFillStatesPerFarm.set(
                placeable.productionPoint.storage.farmId,
                fillStateForPlaceable
              );
            }
          }
        }
      }
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
