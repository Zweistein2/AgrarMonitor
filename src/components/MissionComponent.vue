<template>
  <div
    class="accordion accordion-flush"
    id="vehicleAccordion"
    v-if="missionData !== undefined && placeablesData !== undefined"
  >
    <div
      class="accordion-item"
      v-for="category in missionsPerCategory"
      :key="category[0]"
    >
      <h2 class="accordion-header" :id="'heading' + category[0]">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#missions' + category[0]"
          aria-expanded="false"
          :aria-controls="'missions' + category[0]"
        >
          {{ $t(category[0]) }}
        </button>
      </h2>
      <div
        :id="'missions' + category[0]"
        class="accordion-collapse collapse"
        :aria-labelledby="'heading' + category[0]"
      >
        <div class="accordion-body pt-0 pb-0">
          <table class="table">
            <tbody>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  {{ $t("reward") }}
                </th>
                <th scope="col">
                  {{ $t("missionAccepted") }}
                </th>
                <template v-if="category[0] !== 'supplyTransport'">
                  <th scope="col">
                    {{ $t("vehiclesLeased") }}
                  </th>
                  <th scope="col">
                    {{ $t("vehicleLeasingCost") }}
                  </th>
                </template>
                <template v-if="category[0] === 'harvest'">
                  <th scope="col">
                    {{ $t("fillType") }}
                  </th>
                  <th scope="col">
                    {{ $t("expectedLitres") }}
                  </th>
                  <th scope="col">
                    {{ $t("depositedLitres") }}
                  </th>
                  <th scope="col">
                    {{ $t("target") }}
                  </th>
                </template>
                <template v-else-if="category[0] === 'mow_bale'">
                  <th scope="col">
                    {{ $t("fillTypeMow") }}
                  </th>
                  <th scope="col">
                    {{ $t("fillType") }}
                  </th>
                  <th scope="col">
                    {{ $t("depositedLitres") }}
                  </th>
                  <th scope="col">
                    {{ $t("target") }}
                  </th>
                </template>
                <template v-else-if="category[0] === 'supplyTransport'">
                  <th scope="col">
                    {{ $t("expectedLitres") }}
                  </th>
                  <th scope="col">
                    {{ $t("depositedLitres") }}
                  </th>
                  <th scope="col">
                    {{ $t("target") }}
                  </th>
                </template>
                <th scope="col">
                  {{ $t("missionprogress") }}
                </th>
              </tr>
              <tr v-for="(mission, index) in category[1]" :key="index">
                <th scope="row" v-if="mission.type !== 'supplyTransport'">
                  {{ $t("field") + " " + mission.field.id }}
                </th>
                <th scope="row" v-else>
                  <img
                    alt="IconLogo"
                    :src="iconSrc(mission.delivery.fillType)"
                    height="32"
                  />
                  {{ $t(mission.delivery.fillType) }}
                </th>
                <td>
                  {{ $n(Number.parseFloat(mission.reward), "currency") }}
                </td>
                <td
                  v-if="
                    mission.farmId !== undefined &&
                    farmsData !== undefined &&
                    Object.keys(farmsData).length > 0
                  "
                >
                  {{
                    farmsData.farm.find(
                      (farm) => farm.farmId === mission.farmId
                    ).name
                  }}
                </td>
                <td v-else></td>
                <template v-if="mission.type !== 'supplyTransport'">
                  <td
                    v-if="
                      mission.farmId !== undefined &&
                      mission.field.spawnedVehicles === false
                    "
                  >
                    <font-awesome-icon :icon="['fad', 'xmark']" />
                  </td>
                  <td
                    v-else-if="
                      mission.farmId !== undefined &&
                      mission.field.spawnedVehicles === true
                    "
                  >
                    <font-awesome-icon :icon="['fad', 'check']" />
                  </td>
                  <td v-else></td>
                  <td>
                    {{ $n(mission.field.vehicleUseCost, "currency") }}
                  </td>
                </template>
                <template v-if="mission.type === 'harvest'">
                  <td>
                    <img
                      alt="IconLogo"
                      :src="iconSrc(mission.field.fruitTypeName)"
                      height="32"
                    />
                    {{ $t(mission.field.fruitTypeName) }}
                  </td>
                  <td>
                    {{ $n(mission.harvest.expectedLiters, "liter") }}
                  </td>
                  <td>
                    {{ $n(mission.harvest.depositedLiters, "liter") }}
                  </td>
                  <td
                    v-if="
                      placeablesData !== undefined &&
                      placeablesData.placeable !== undefined &&
                      placeablesData.placeable.length > 0
                    "
                  >
                    {{
                      getPlaceableNameByMap(
                        placeablesData.placeable.find(
                          (placeable) =>
                            placeable.id ===
                            mission.harvest.sellPointPlaceableId
                        ).filename,
                        $t("UNKNOWN")
                      )
                    }}
                  </td>
                  <td v-else>
                    {{ $t("UNKNOWN") }}
                  </td>
                </template>
                <template v-else-if="mission.type === 'mow_bale'">
                  <td>
                    <img
                      alt="IconLogo"
                      :src="iconSrc(mission.field.fruitTypeName)"
                      height="32"
                    />
                    {{ $t(mission.field.fruitTypeName) }}
                  </td>
                  <td>
                    <img
                      alt="IconLogo"
                      :src="iconSrc(mission.bale.fillTypeName)"
                      height="32"
                    />
                    {{ $t(mission.bale.fillTypeName) }}
                  </td>
                  <td>
                    {{ $n(mission.bale.depositedLiters, "liter") }}
                  </td>
                  <td
                    v-if="
                      placeablesData !== undefined &&
                      placeablesData.placeable !== undefined &&
                      placeablesData.placeable.length > 0
                    "
                  >
                    {{
                      getPlaceableNameByMap(
                        placeablesData.placeable.find(
                          (placeable) =>
                            placeable.id === mission.bale.sellPointPlaceableId
                        ).filename,
                        $t("UNKNOWN")
                      )
                    }}
                  </td>
                  <td v-else>
                    {{ $t("UNKNOWN") }}
                  </td>
                </template>
                <template v-else-if="mission.type === 'supplyTransport'">
                  <td>
                    {{ $n(mission.delivery.expectedLiters, "liter") }}
                  </td>
                  <td v-if="mission.delivery.depositedLiters">
                    {{ $n(mission.delivery.depositedLiters, "liter") }}
                  </td>
                  <td v-else>
                    {{ $n(0, "liter") }}
                  </td>
                  <td
                    v-if="
                      placeablesData !== undefined &&
                      placeablesData.placeable !== undefined &&
                      placeablesData.placeable.length > 0
                    "
                  >
                    {{
                      getPlaceableNameByMap(
                        placeablesData.placeable.find(
                          (placeable) =>
                            placeable.id ===
                            mission.delivery.sellPointPlaceableId
                        ).filename,
                        "UNKNOWN"
                      )
                    }}
                  </td>
                  <td v-else>
                    {{ $t("UNKNOWN") }}
                  </td>
                </template>
                <td v-if="mission.completion">
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped"
                      :id="
                        'progressMission_' +
                        index +
                        '_Amount_' +
                        mission.completion
                      "
                      role="progressbar"
                      :style="'width: ' + mission.completion + '%'"
                      :aria-valuenow="mission.completion"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ Math.round(mission.completion) + "%" }}
                    </div>
                  </div>
                </td>
                <td v-else>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped"
                      :id="'progressMission_' + index + '_Amount_0'"
                      role="progressbar"
                      style="width: 0"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      "0%"
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import nameMappingService from "@/services/nameMappingService";

export default defineComponent({
  name: "MissionComponent",
  data: () => ({
    missionsPerCategory: new Map<string, Array<Mission>>(),
    farmsData: {} as FarmsData,
    missionData: {} as MissionsData,
    placeablesData: {} as PlaceableData,
  }),
  props: {
    farmsDataProp: Object as PropType<FarmsData>,
    missionDataProp: Object as PropType<MissionsData>,
    placeablesDataProp: Object as PropType<PlaceableData>,
  },
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
    missionDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.missionData = val;

          this.updateMissions();
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
    getPlaceableNameByMap(
      placeableName: string | undefined,
      defaultValue: string
    ): string {
      if (placeableName === undefined) {
        return defaultValue;
      }

      return nameMappingService.getPlaceableNameByMap(
        placeableName,
        defaultValue
      );
    },
    updateMissions() {
      this.missionsPerCategory = new Map<string, Array<Mission>>();

      if (
        this.missionData &&
        this.missionData.mission &&
        this.missionData.mission.length > 0
      ) {
        for (let mission of this.missionData.mission) {
          if (mission && mission.type) {
            let existingData = this.missionsPerCategory.get(mission.type);

            if (existingData) {
              this.missionsPerCategory.set(
                mission.type,
                existingData.concat(Array<Mission>(mission))
              );
            } else {
              this.missionsPerCategory.set(
                mission.type,
                new Array<Mission>(mission)
              );
            }
          }
        }
      }
    },
  },
  beforeUpdate() {
    this.updateMissions();
  },
});
</script>
