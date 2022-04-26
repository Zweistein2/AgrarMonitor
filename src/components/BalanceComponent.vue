<template>
  <div
    class="accordion accordion-flush"
    id="balanceAccordion"
    v-if="farmsData !== undefined"
  >
    <div class="accordion-item">
      <h2 class="accordion-header" id="balanceHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#balanceContent"
          aria-expanded="false"
          aria-controls="#balanceContent"
        >
          {{ $t("balance") }}
        </button>
      </h2>
      <div
        id="balanceContent"
        class="accordion-collapse collapse"
        aria-labelledby="balanceHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <div
            class="accordion accordion-flush"
            :id="'farm' + farm.farmId + 'Accordion'"
            v-for="farm in farmsData.farm"
            :key="farm.farmId"
          >
            <div class="accordion-item">
              <h2
                class="accordion-header"
                :id="'farm' + farm.farmId + 'BalanceHeading'"
              >
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#farm' + farm.farmId + 'BalanceContent'"
                  aria-expanded="false"
                  :aria-controls="'#farm' + farm.farmId + 'BalanceContent'"
                >
                  {{ farm.name }}
                </button>
              </h2>
              <div
                :id="'farm' + farm.farmId + 'BalanceContent'"
                class="accordion-collapse collapse"
                :aria-labelledby="'farm' + farm.farmId + 'BalanceHeading'"
              >
                <div class="accordion-body pt-0 pb-0 table-responsive">
                  <table class="table table-sm">
                    <tbody>
                      <tr>
                        <th scope="col">{{ $t("name_day") }}</th>
                        <th
                          scope="col"
                          v-for="index in farm.finances.stats.length"
                          :key="index"
                        >
                          {{ index + "." }}
                        </th>
                      </tr>
                      <tr
                        v-for="key in Object.keys(
                          farm.finances.stats.at(0)
                        ).filter((value) => value !== 'day')"
                        :key="key"
                      >
                        <th scope="row">
                          {{ $t(key) }}
                        </th>
                        <td v-for="stat in farm.finances.stats" :key="stat">
                          <template
                            v-if="
                              Number.parseFloat(
                                Object.entries(stat).find(
                                  (value) => value[0] === key
                                )[1]
                              ) < 0
                            "
                          >
                            <i18n-n
                              :value="
                                Number.parseFloat(
                                  Object.entries(stat).find(
                                    (value) => value[0] === key
                                  )[1]
                                )
                              "
                              format="currency"
                            >
                              <template v-slot:integer="slotProps">
                                <span style="color: red">{{
                                  slotProps.integer
                                }}</span>
                              </template>
                              <template v-slot:group="slotProps">
                                <span style="color: red">{{
                                  slotProps.group
                                }}</span>
                              </template>
                              <template v-slot:fraction="slotProps">
                                <span style="color: red">{{
                                  slotProps.fraction
                                }}</span>
                              </template>
                              <template v-slot:decimal="slotProps">
                                <span style="color: red">{{
                                  slotProps.decimal
                                }}</span>
                              </template>
                              <template v-slot:minusSign="slotProps">
                                <span style="color: red">{{
                                  slotProps.minusSign
                                }}</span>
                              </template>
                            </i18n-n>
                          </template>
                          <template v-else>
                            {{
                              $n(
                                Number.parseFloat(
                                  Object.entries(stat).find(
                                    (value) => value[0] === key
                                  )[1]
                                ),
                                "currency"
                              )
                            }}
                          </template>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th scope="row">{{ $t("total") }}</th>
                        <td v-for="stat in farm.finances.stats" :key="stat">
                          <template v-if="calculateDayTotal(stat) < 0">
                            <i18n-n
                              :value="calculateDayTotal(stat)"
                              format="currency"
                            >
                              <template v-slot:integer="slotProps">
                                <span style="color: red">{{
                                  slotProps.integer
                                }}</span>
                              </template>
                              <template v-slot:group="slotProps">
                                <span style="color: red">{{
                                  slotProps.group
                                }}</span>
                              </template>
                              <template v-slot:fraction="slotProps">
                                <span style="color: red">{{
                                  slotProps.fraction
                                }}</span>
                              </template>
                              <template v-slot:decimal="slotProps">
                                <span style="color: red">{{
                                  slotProps.decimal
                                }}</span>
                              </template>
                              <template v-slot:minusSign="slotProps">
                                <span style="color: red">{{
                                  slotProps.minusSign
                                }}</span>
                              </template>
                            </i18n-n>
                          </template>
                          <template v-else>
                            {{ $n(calculateDayTotal(stat), "currency") }}
                          </template>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="graphHeading">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#graphContent"
          aria-expanded="false"
          aria-controls="#graphContent"
        >
          {{ $t("graph") }}
        </button>
      </h2>
      <div
        id="graphContent"
        class="accordion-collapse collapse"
        aria-labelledby="graphHeading"
      >
        <div class="accordion-body pt-0 pb-0">
          <canvas id="chartContainer" height="100"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Chart, { ChartItem, ChartData, ChartDataset } from "chart.js/auto";
import farmsMap from "@/utils/farms";

export default defineComponent({
  name: "BalanceComponent",
  props: {
    farmsData: Object as PropType<FarmsData>,
  },
  methods: {
    calculateDayTotal(day: FarmFinanceStat): number {
      let total = Object.entries(day)
        .filter((value) => value[0] !== "day")
        .map((value) => value[1])
        .reduce(
          (previousValue, currentValue) =>
            (previousValue ? previousValue : 0) +
            (currentValue ? currentValue : 0)
        );

      return total ? total : 0;
    },
  },
  updated() {
    if (this.farmsData && this.farmsData.farm) {
      const data = {
        datasets: [],
      } as ChartData<"line", number[]>;

      for (let farm of this.farmsData.farm) {
        if (farm.farmId && farm.name && farm.color) {
          let farmColorData = farmsMap.get(farm.color);

          if (farmColorData && farm.finances && farm.finances.stats) {
            let labelDataMap = new Map<string, number>();

            for (let stat of farm.finances.stats) {
              if (stat.day !== undefined) {
                labelDataMap.set(
                  (stat.day + 1).toString(),
                  this.calculateDayTotal(stat)
                );
              }
            }

            if (
              data.labels === undefined ||
              data.labels.length < labelDataMap.size
            ) {
              data.labels = Array.from(labelDataMap.keys());
            }

            const dataset = {
              label: farm.name,
              data: Array.from(labelDataMap.values()).map((value) =>
                Math.round(value)
              ),
              backgroundColor:
                "rgba(" +
                farmColorData[1] +
                ", " +
                farmColorData[2] +
                ", " +
                farmColorData[3] +
                ", 0.5)",
              borderColor: farmColorData[0],
              borderWidth: 3,
              fill: {
                target: {
                  value: 0.0,
                },
                above: "rgba(25, 135, 84, 0.2)",
                below: "rgba(220, 53, 69, 0.2)",
              },
            } as ChartDataset<"line", number[]>;

            data.datasets.push(dataset);
          }
        }
      }

      let existingChart = Chart.getChart(
        document.getElementById("chartContainer") as HTMLCanvasElement
      );

      if (existingChart === undefined) {
        const ctx = document.getElementById("chartContainer");

        if (ctx !== null) {
          new Chart(ctx as ChartItem, {
            type: "line",
            data: data,
            options: {
              responsive: true,
              scales: {
                yAxis: {
                  title: {
                    display: true,
                    text: "Bilanz",
                  },
                },
                xAxis: {
                  title: {
                    display: true,
                    text: "Tag",
                  },
                },
              },
            },
          });
        }
      } else {
        existingChart.data = data;

        existingChart.update();
      }
    }
  },
});
</script>
