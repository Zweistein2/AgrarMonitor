<template>
  <div
    class="accordion accordion-flush"
    id="WorkStatsAccordion"
    v-if="
      farmsData !== undefined &&
      placeablesData !== undefined &&
      placeablesData.placeable !== undefined
    "
  >
    <div class="accordion-item">
      <h2 class="accordion-header" id="WorkStatsHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#WorkStatsContent"
          aria-expanded="false"
          aria-controls="#WorkStatsContent"
        >
          {{ $t("WorkStats") }}
        </button>
      </h2>
      <div
        id="WorkStatsContent"
        class="accordion-collapse collapse"
        aria-labelledby="WorkStatsHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <table class="table">
            <tbody>
              <tr>
                <th scope="col">{{ $t("farmname") }}</th>
                <th scope="col">{{ $t("workedHectares") }}</th>
                <th scope="col">{{ $t("cultivatedHectares") }}</th>
                <th scope="col">{{ $t("sownHectares") }}</th>
                <th scope="col">{{ $t("sprayedHectares") }}</th>
                <th scope="col">{{ $t("threshedHectares") }}</th>
                <th scope="col">{{ $t("plowedHectares") }}</th>
                <th scope="col">{{ $t("harvestedGrapes") }}</th>
                <th scope="col">{{ $t("harvestedOlives") }}</th>
              </tr>
              <tr v-for="farm in farmsData.farm" :key="farm.farmId">
                <th scope="row">{{ farm.name }}</th>
                <td>{{ $n(farm.statistics.workedHectares, "hectare") }}</td>
                <td>{{ $n(farm.statistics.cultivatedHectares, "hectare") }}</td>
                <td>{{ $n(farm.statistics.sownHectares, "hectare") }}</td>
                <td>{{ $n(farm.statistics.sprayedHectares, "hectare") }}</td>
                <td>{{ $n(farm.statistics.threshedHectares, "hectare") }}</td>
                <td>{{ $n(farm.statistics.plowedHectares, "hectare") }}</td>
                <td>{{ $n(farm.statistics.harvestedGrapes, "meter") }}</td>
                <td>{{ $n(farm.statistics.harvestedOlives, "meter") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="AnimalStatsHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#AnimalStatsContent"
          aria-expanded="false"
          aria-controls="#AnimalStatsContent"
        >
          {{ $t("AnimalStats") }}
        </button>
      </h2>
      <div
        id="AnimalStatsContent"
        class="accordion-collapse collapse"
        aria-labelledby="AnimalStatsHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <table class="table">
            <tbody>
              <tr>
                <th scope="col">{{ $t("farmname") }}</th>
                <th scope="col">{{ $t("breedCowsCount") }}</th>
                <th scope="col">{{ $t("breedSheepCount") }}</th>
                <th scope="col">{{ $t("breedPigsCount") }}</th>
                <th scope="col">{{ $t("breedChickenCount") }}</th>
                <th scope="col">{{ $t("breedHorsesCount") }}</th>
                <th scope="col">{{ $t("petDogCount") }}</th>
              </tr>
              <tr v-for="farm in farmsData.farm" :key="farm.farmId">
                <th scope="row">{{ farm.name }}</th>
                <td>{{ $n(farm.statistics.breedCowsCount) }}</td>
                <td>{{ $n(farm.statistics.breedSheepCount) }}</td>
                <td>{{ $n(farm.statistics.breedPigsCount) }}</td>
                <td>{{ $n(farm.statistics.breedChickenCount) }}</td>
                <td>{{ $n(farm.statistics.breedHorsesCount) }}</td>
                <td>{{ $n(farm.statistics.petDogCount) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="TravellingStatsHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#TravellingStatsContent"
          aria-expanded="false"
          aria-controls="#TravellingStatsContent"
        >
          {{ $t("TravellingStats") }}
        </button>
      </h2>
      <div
        id="TravellingStatsContent"
        class="accordion-collapse collapse"
        aria-labelledby="TravellingStatsHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <table class="table">
            <tbody>
              <tr>
                <th scope="col">{{ $t("farmname") }}</th>
                <th scope="col">{{ $t("traveledDistance") }}</th>
                <th scope="col">{{ $t("tractorDistance") }}</th>
                <th scope="col">{{ $t("carDistance") }}</th>
                <th scope="col">{{ $t("truckDistance") }}</th>
                <th scope="col">{{ $t("horseDistance") }}</th>
                <th scope="col">{{ $t("horseJumpCount") }}</th>
              </tr>
              <tr v-for="farm in farmsData.farm" :key="farm.farmId">
                <th scope="row">{{ farm.name }}</th>
                <td>{{ $n(farm.statistics.traveledDistance, "kilometer") }}</td>
                <td>{{ $n(farm.statistics.tractorDistance, "kilometer") }}</td>
                <td>{{ $n(farm.statistics.carDistance, "kilometer") }}</td>
                <td>{{ $n(farm.statistics.truckDistance, "kilometer") }}</td>
                <td>{{ $n(farm.statistics.horseDistance, "kilometer") }}</td>
                <td>{{ $n(farm.statistics.horseJumpCount, "kilometer") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="TimeStatsHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#TimeStatsContent"
          aria-expanded="false"
          aria-controls="#TimeStatsContent"
        >
          {{ $t("TimeStats") }}
        </button>
      </h2>
      <div
        id="TimeStatsContent"
        class="accordion-collapse collapse"
        aria-labelledby="TimeStatsHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <table class="table">
            <tbody>
              <tr>
                <th scope="col">{{ $t("farmname") }}</th>
                <th scope="col">{{ $t("playTime") }}</th>
                <th scope="col">{{ $t("workedTime") }}</th>
                <th scope="col">{{ $t("cultivatedTime") }}</th>
                <th scope="col">{{ $t("sownTime") }}</th>
                <th scope="col">{{ $t("sprayedTime") }}</th>
                <th scope="col">{{ $t("threshedTime") }}</th>
                <th scope="col">{{ $t("plowedTime") }}</th>
              </tr>
              <tr v-for="farm in farmsData.farm" :key="farm.farmId">
                <th scope="row">{{ farm.name }}</th>
                <td v-if="~~(farm.statistics.playTime / 60) > 24">
                  {{
                    $n(~~(farm.statistics.playTime / 60 / 24), "day") +
                    " " +
                    $n(~~((farm.statistics.playTime / 60) % 24), "hour") +
                    " " +
                    $n(~~(farm.statistics.playTime % 60), "minute")
                  }}
                </td>
                <td v-else>
                  {{
                    $n(~~(farm.statistics.playTime / 60), "hour") +
                    " " +
                    $n(~~(farm.statistics.playTime % 60), "minute")
                  }}
                </td>
                <td v-if="~~(farm.statistics.workedTime / 60) > 24">
                  {{
                    $n(~~(farm.statistics.workedTime / 60 / 24), "day") +
                    " " +
                    $n(~~((farm.statistics.workedTime / 60) % 24), "hour") +
                    " " +
                    $n(~~(farm.statistics.workedTime % 60), "minute")
                  }}
                </td>
                <td v-else>
                  {{
                    $n(~~(farm.statistics.workedTime / 60), "hour") +
                    " " +
                    $n(~~(farm.statistics.workedTime % 60), "minute")
                  }}
                </td>
                <td v-if="~~(farm.statistics.cultivatedTime / 60) > 24">
                  {{
                    $n(~~(farm.statistics.cultivatedTime / 60 / 24), "day") +
                    " " +
                    $n(~~((farm.statistics.cultivatedTime / 60) % 24), "hour") +
                    " " +
                    $n(~~(farm.statistics.cultivatedTime % 60), "minute")
                  }}
                </td>
                <td v-else>
                  {{
                    $n(~~(farm.statistics.cultivatedTime / 60), "hour") +
                    " " +
                    $n(~~(farm.statistics.cultivatedTime % 60), "minute")
                  }}
                </td>
                <td v-if="~~(farm.statistics.sownTime / 60) > 24">
                  {{
                    $n(~~(farm.statistics.sownTime / 60 / 24), "day") +
                    " " +
                    $n(~~((farm.statistics.sownTime / 60) % 24), "hour") +
                    " " +
                    $n(~~(farm.statistics.sownTime % 60), "minute")
                  }}
                </td>
                <td v-else>
                  {{
                    $n(~~(farm.statistics.sownTime / 60), "hour") +
                    " " +
                    $n(~~(farm.statistics.sownTime % 60), "minute")
                  }}
                </td>
                <td v-if="~~(farm.statistics.sprayedTime / 60) > 24">
                  {{
                    $n(~~(farm.statistics.sprayedTime / 60 / 24), "day") +
                    " " +
                    $n(~~((farm.statistics.sprayedTime / 60) % 24), "hour") +
                    " " +
                    $n(~~(farm.statistics.sprayedTime % 60), "minute")
                  }}
                </td>
                <td v-else>
                  {{
                    $n(~~(farm.statistics.sprayedTime / 60), "hour") +
                    " " +
                    $n(~~(farm.statistics.sprayedTime % 60), "minute")
                  }}
                </td>
                <td v-if="~~(farm.statistics.threshedTime / 60) > 24">
                  {{
                    $n(~~(farm.statistics.threshedTime / 60 / 24), "day") +
                    " " +
                    $n(~~((farm.statistics.threshedTime / 60) % 24), "hour") +
                    " " +
                    $n(~~(farm.statistics.threshedTime % 60), "minute")
                  }}
                </td>
                <td v-else>
                  {{
                    $n(~~(farm.statistics.threshedTime / 60), "hour") +
                    " " +
                    $n(~~(farm.statistics.threshedTime % 60), "minute")
                  }}
                </td>
                <td v-if="~~(farm.statistics.plowedTime / 60) > 24">
                  {{
                    $n(~~(farm.statistics.plowedTime / 60 / 24), "day") +
                    " " +
                    $n(~~((farm.statistics.plowedTime / 60) % 24), "hour") +
                    " " +
                    $n(~~(farm.statistics.plowedTime % 60), "minute")
                  }}
                </td>
                <td v-else>
                  {{
                    $n(~~(farm.statistics.plowedTime / 60), "hour") +
                    " " +
                    $n(~~(farm.statistics.plowedTime % 60), "minute")
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="MoneyStatsHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#MoneyStatsContent"
          aria-expanded="false"
          aria-controls="#MoneyStatsContent"
        >
          {{ $t("MoneyStats") }}
        </button>
      </h2>
      <div
        id="MoneyStatsContent"
        class="accordion-collapse collapse"
        aria-labelledby="MoneyStatsHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <table class="table">
            <tbody>
              <tr>
                <th scope="col">{{ $t("farmname") }}</th>
                <th scope="col">{{ $t("fieldJobMissionCount") }}</th>
                <th scope="col">{{ $t("transportMissionCount") }}</th>
                <th scope="col">{{ $t("repairVehicleCount") }}</th>
                <th scope="col">{{ $t("repaintVehicleCount") }}</th>
              </tr>
              <tr v-for="farm in farmsData.farm" :key="farm.farmId">
                <th scope="row">{{ farm.name }}</th>
                <td>{{ $n(farm.statistics.fieldJobMissionCount) }}</td>
                <td>{{ $n(farm.statistics.transportMissionCount) }}</td>
                <td>{{ $n(farm.statistics.repairVehicleCount) }}</td>
                <td>{{ $n(farm.statistics.repaintVehicleCount) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="SellStatsHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#SellStatsContent"
          aria-expanded="false"
          aria-controls="#SellStatsContent"
        >
          {{ $t("SellStats") }}
        </button>
      </h2>
      <div
        id="SellStatsContent"
        class="accordion-collapse collapse"
        aria-labelledby="SellStatsHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <table class="table" v-if="sellingStationData !== undefined">
            <tbody>
              <tr>
                <th scope="col">{{ $t("farmname") }}</th>
                <th scope="col">{{ $t("sellingStationName") }}</th>
                <th scope="col">{{ $t("fillType") }}</th>
                <th scope="col">{{ $t("sold") }}</th>
                <th scope="col">{{ $t("paid") }}</th>
              </tr>
              <template
                v-for="(sellingStation, stationIndex) in sellingStationData.get(
                  0
                )"
                :key="sellingStation"
              >
                <template
                  v-for="(stat, statIndex) in sellingStation[1]"
                  :key="stat"
                >
                  <tr>
                    <th
                      scope="row"
                      :rowspan="
                        Array.from(sellingStationData.get(0).values())
                          .map((value) => value.length)
                          .reduce(
                            (previousValue, currentValue) =>
                              previousValue + currentValue
                          )
                      "
                      v-if="stationIndex + statIndex === 0"
                    >
                      {{ $t("publicFarm") }}
                    </th>
                    <td
                      v-if="statIndex === 0"
                      :rowspan="sellingStation[1].length"
                    >
                      {{ sellingStation[0] }}
                    </td>
                    <td>
                      <img alt="IconLogo" :src="iconSrc(stat[0])" height="32" />
                      {{ $t(stat[0]) }}
                    </td>
                    <td>
                      {{ $n(stat[1], "liter") }}
                    </td>
                    <td>
                      {{ $n(stat[2], "currency") }}
                    </td>
                  </tr>
                </template>
              </template>

              <template
                v-for="(farm, farmIndex) in farmsData.farm.filter(
                  (value) => sellingStationData.get(value.farmId).size > 0
                )"
                :key="farm.farmId"
              >
                <template
                  v-for="(
                    sellingStation, stationIndex
                  ) in sellingStationData.get(farm.farmId)"
                  :key="sellingStation"
                >
                  <template
                    v-for="(stat, statIndex) in sellingStation[1]"
                    :key="stat"
                  >
                    <tr>
                      <th
                        scope="row"
                        :rowspan="
                          Array.from(
                            sellingStationData.get(farm.farmId).values()
                          )
                            .map((value) => value.length)
                            .reduce(
                              (previousValue, currentValue) =>
                                previousValue + currentValue
                            )
                        "
                        v-if="farmIndex + stationIndex + statIndex === 0"
                      >
                        {{ farm.name }}
                      </th>
                      <td
                        v-if="statIndex === 0"
                        :rowspan="sellingStation[1].length"
                      >
                        {{ sellingStation[0] }}
                      </td>
                      <td>
                        <img
                          alt="IconLogo"
                          :src="iconSrc(stat[0])"
                          height="32"
                        />
                        {{ $t(stat[0]) }}
                      </td>
                      <td>
                        {{ $n(stat[1], "liter") }}
                      </td>
                      <td>
                        {{ $n(stat[2], "currency") }}
                      </td>
                    </tr>
                  </template>
                </template>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="MissionSellStatsHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#MissionSellStatsContent"
          aria-expanded="false"
          aria-controls="#MissionSellStatsContent"
        >
          {{ $t("MissionSellStats") }}
        </button>
      </h2>
      <div
        id="MissionSellStatsContent"
        class="accordion-collapse collapse"
        aria-labelledby="MissionSellStatsHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <table class="table">
            <tbody>
              <tr>
                <th scope="col">{{ $t("fillType") }}</th>
                <th scope="col">{{ $t("sold") }}</th>
              </tr>
              <template v-for="stat in missionSellData" :key="stat">
                <tr>
                  <td>
                    <img alt="IconLogo" :src="iconSrc(stat[0])" height="32" />
                    {{ $t(stat[0]) }}
                  </td>
                  <td>
                    {{ $n(stat[1], "liter") }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="MiscStatsHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#MiscStatsContent"
          aria-expanded="false"
          aria-controls="#MiscStatsContent"
        >
          {{ $t("MiscStats") }}
        </button>
      </h2>
      <div
        id="MiscStatsContent"
        class="accordion-collapse collapse"
        aria-labelledby="MiscStatsHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <table class="table">
            <tbody>
              <tr>
                <th scope="col">{{ $t("farmname") }}</th>
                <th scope="col">{{ $t("fuelUsage") }}</th>
                <th scope="col">{{ $t("seedUsage") }}</th>
                <th scope="col">{{ $t("sprayUsage") }}</th>
                <th scope="col">{{ $t("baleCount") }}</th>
                <th scope="col">{{ $t("wrappedBales") }}</th>
                <th scope="col">{{ $t("soldCottonBales") }}</th>
                <th scope="col">{{ $t("plantedTreeCount") }}</th>
                <th scope="col">{{ $t("cutTreeCount") }}</th>
              </tr>
              <tr v-for="farm in farmsData.farm" :key="farm.farmId">
                <th scope="row">{{ farm.name }}</th>
                <td>{{ $n(farm.statistics.fuelUsage, "liter") }}</td>
                <td>{{ $n(farm.statistics.seedUsage, "liter") }}</td>
                <td>{{ $n(farm.statistics.sprayUsage, "liter") }}</td>
                <td>{{ $n(farm.statistics.baleCount) }}</td>
                <td>{{ $n(farm.statistics.wrappedBales) }}</td>
                <td>{{ $n(farm.statistics.soldCottonBales) }}</td>
                <td>{{ $n(farm.statistics.plantedTreeCount) }}</td>
                <td>{{ $n(farm.statistics.cutTreeCount) }}</td>
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
  name: "StatisticComponent",
  data: () => ({
    sellingStationData: new Map<
      number,
      Map<string, Array<[string, number, number]>>
    >(),
    missionSellData: new Map<string, number>(),
    farmsData: {} as FarmsData,
    placeablesData: {} as PlaceableData,
    economyData: {} as EconomyData,
  }),
  props: {
    farmsDataProp: Object as PropType<FarmsData>,
    placeablesDataProp: Object as PropType<PlaceableData>,
    economyDataProp: Object as PropType<EconomyData>,
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
    placeablesDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.placeablesData = val;

          this.updatePlaceables();
        }
      },
      deep: true,
      immediate: true,
    },
    economyDataProp: {
      handler: function (val) {
        if (val !== undefined) {
          this.economyData = val;

          this.updateEconomics();
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
    updatePlaceables: function () {
      this.missionSellData = new Map<string, number>();

      if (
        this.placeablesData &&
        this.placeablesData.placeable &&
        this.placeablesData.placeable.length > 0 &&
        this.farmsData &&
        this.farmsData.farm &&
        this.farmsData.farm.length > 0
      ) {
        for (let farm of this.farmsData.farm) {
          if (farm.farmId) {
            this.sellingStationData.set(
              farm.farmId,
              new Map<string, Array<[string, number, number]>>()
            );
          }
        }

        this.sellingStationData.set(
          0,
          new Map<string, Array<[string, number, number]>>()
        );

        for (let placeable of this.placeablesData.placeable) {
          if (
            placeable.filename &&
            placeable.farmId !== undefined &&
            placeable.sellingStation &&
            placeable.sellingStation.stats &&
            placeable.sellingStation.stats.length > 0
          ) {
            let fillStates = new Array<[string, number, number]>();

            for (let stat of placeable.sellingStation.stats) {
              if (
                stat.fillType &&
                stat.received !== undefined &&
                stat.paid !== undefined &&
                (stat.received > 0 || stat.paid > 0)
              ) {
                fillStates.push([stat.fillType, stat.received, stat.paid]);
              }
            }

            if (fillStates.length > 0) {
              let placeableFillStatesForFarm = this.sellingStationData.get(
                placeable.farmId
              );

              if (placeableFillStatesForFarm) {
                placeableFillStatesForFarm.set(
                  nameMappingService.getPlaceableNameByMap(
                    placeable.filename,
                    "UNKNOWN"
                  ),
                  fillStates
                );

                this.sellingStationData.set(
                  placeable.farmId,
                  placeableFillStatesForFarm
                );
              }
            }
          }
        }
      }
    },
    updateEconomics: function () {
      if (
        this.economyData !== undefined &&
        this.economyData.fillTypes !== undefined &&
        this.economyData.fillTypes.fillType !== undefined &&
        Object.keys(this.economyData.fillTypes.fillType).length > 0
      ) {
        for (let fillType of this.economyData.fillTypes.fillType) {
          if (
            fillType.fillType !== undefined &&
            fillType.totalAmount !== undefined &&
            fillType.totalAmount > 0
          ) {
            let soldAmount = 0;

            for (let sellingStationsForFarm of this.sellingStationData.values()) {
              for (let sellingStation of sellingStationsForFarm.values()) {
                for (let sellData of sellingStation) {
                  if (fillType.fillType === sellData[0]) {
                    soldAmount += sellData[1];
                  }
                }
              }
            }

            if (fillType.totalAmount - soldAmount > 0) {
              this.missionSellData.set(
                fillType.fillType,
                fillType.totalAmount - soldAmount
              );
            }
          }
        }
      }
    },
  },
  mounted(): void {
    this.updatePlaceables();
    this.updateEconomics();
  },
});
</script>
