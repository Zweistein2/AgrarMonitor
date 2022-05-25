<template>
  <div class="pt-0 pb-0 table-responsive" v-if="farmsData !== undefined">
    <table class="table mb-5">
      <tbody>
        <tr>
          <th scope="row">
            {{ $t("farmname") }}
          </th>
          <th scope="col" v-for="farm in farmsData.farm" :key="farm.farmId">
            <span :style="'color: ' + this.getFarmColorById(farm.farmId)">
              {{ farm.name }}
            </span>
            <div
              class="ms-2"
              :style="
                'color: ' +
                this.getFarmColorById(farm.farmId) +
                '; display: inline-block'
              "
            >
              <font-awesome-icon :icon="['fad', 'user-cowboy']" />
            </div>
          </th>
        </tr>
        <tr>
          <th scope="row">
            {{ $t("farmloan") }}
          </th>
          <td v-for="farm in farmsData.farm" :key="farm.farmId">
            {{ $n(Number.parseFloat(farm.loan), "currency") }}
          </td>
        </tr>
        <tr>
          <th scope="row">
            {{ $t("farmmoney") }}
          </th>
          <td v-for="farm in farmsData.farm" :key="farm.farmId">
            {{ $n(Number.parseFloat(farm.money), "currency") }}
          </td>
        </tr>
        <template v-for="index in this.highestPlayerAmount" :key="index">
          <tr>
            <th
              scope="row"
              v-if="index === 1"
              :rowspan="this.highestPlayerAmount"
            >
              {{ $t("players") }}
            </th>
            <template v-for="farm in farmsData.farm" :key="farm.farmId">
              <template v-if="farm.players.player[index - 1] !== undefined">
                <td
                  v-if="index < this.highestPlayerAmount"
                  style="border: none"
                >
                  {{ farm.players.player[index - 1].lastNickname }}
                  <div class="iconWall mt-1">
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].farmManager"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'user-tie']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].buyPlaceable"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'shopping-cart']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'shop']"
                        class="fa-stack-1x"
                        style="margin-bottom: 6px; margin-left: 6px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].buyVehicle"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'shopping-cart']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'tractor']"
                        class="fa-stack-1x"
                        style="margin-bottom: 6px; margin-left: 6px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].sellPlaceable"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'badge']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'shop']"
                        class="fa-stack-1x"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].sellVehicle"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'badge']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'tractor']"
                        class="fa-stack-1x"
                        style="margin-left: 4px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].createFields"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'seedling']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'dash']"
                        class="fa-stack-2x"
                        style="margin-bottom: -8px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].hireAssistant"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'people-group']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].landscaping"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'shovel']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].manageRights"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'user-gear']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].manageContracting"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'comments-dollar']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].manageContracts"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'file-invoice-dollar']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].resetVehicle"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'tractor']"
                        class="fa-stack-2x"
                        style="--fa-primary-opacity: 0.6"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'rotate-left']"
                        class="fa-stack-1x"
                        style="margin-bottom: 9px; margin-left: 14px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].tradeAnimals"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'pig']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'money-bill']"
                        class="fa-stack-1x"
                        style="margin-bottom: 7px; margin-left: 10px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].transferMoney"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'money-bill-transfer']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].updateFarm"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'farm']"
                        class="fa-stack-2x"
                        style="--fa-primary-opacity: 0.6"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'pen']"
                        class="fa-stack-1x"
                        style="margin-bottom: 9px; margin-left: 12px"
                      />
                    </font-awesome-layers>
                  </div>
                </td>
                <td v-else>
                  {{ farm.players.player[index - 1].lastNickname }}
                  <div class="iconWall mt-1">
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].farmManager"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'user-tie']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].buyPlaceable"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'shopping-cart']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'shop']"
                        class="fa-stack-1x"
                        style="margin-bottom: 6px; margin-left: 6px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].buyVehicle"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'shopping-cart']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'tractor']"
                        class="fa-stack-1x"
                        style="margin-bottom: 6px; margin-left: 6px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].sellPlaceable"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'badge']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'shop']"
                        class="fa-stack-1x"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].sellVehicle"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'badge']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'tractor']"
                        class="fa-stack-1x"
                        style="margin-left: 4px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].createFields"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'seedling']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'dash']"
                        class="fa-stack-2x"
                        style="margin-bottom: -8px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].hireAssistant"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'people-group']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].landscaping"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'shovel']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].manageRights"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'user-gear']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].manageContracting"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'comments-dollar']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].manageContracts"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'file-invoice-dollar']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].resetVehicle"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'tractor']"
                        class="fa-stack-2x"
                        style="--fa-primary-opacity: 0.6"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'rotate-left']"
                        class="fa-stack-1x"
                        style="margin-bottom: 9px; margin-left: 14px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].tradeAnimals"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'pig']"
                        class="fa-stack-2x"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'money-bill']"
                        class="fa-stack-1x"
                        style="margin-bottom: 7px; margin-left: 10px"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].transferMoney"
                    >
                      <font-awesome-icon
                        class="fa-stack-2x"
                        :icon="['fad', 'money-bill-transfer']"
                      />
                    </font-awesome-layers>
                    <font-awesome-layers
                      class="fa-stack fa-2xs icon"
                      v-if="farm.players.player[index - 1].updateFarm"
                    >
                      <font-awesome-icon
                        :icon="['fad', 'farm']"
                        class="fa-stack-2x"
                        style="--fa-primary-opacity: 0.6"
                      />
                      <font-awesome-icon
                        :icon="['fas', 'pen']"
                        class="fa-stack-1x"
                        style="margin-bottom: 9px; margin-left: 12px"
                      />
                    </font-awesome-layers>
                  </div>
                </td>
              </template>
              <template v-else>
                <td
                  v-if="index < this.highestPlayerAmount"
                  style="border: none"
                ></td>
                <td v-else></td>
              </template>
            </template>
          </tr>
        </template>
        <template v-for="index in this.highestContractingAmount" :key="index">
          <tr>
            <th
              scope="row"
              v-if="index === 1"
              :rowspan="this.highestContractingAmount"
            >
              {{ $t("farmsContracting") }}
            </th>
            <template v-for="farm in farmsData.farm" :key="farm.farmId">
              <template v-if="farm.contracting.farm[index - 1] !== undefined">
                <td
                  v-if="index < this.highestContractingAmount"
                  style="border: none"
                >
                  {{
                    this.getFarmNameById(
                      farm.contracting.farm[index - 1].farmId
                    )
                  }}
                </td>
                <td v-else>
                  {{
                    this.getFarmNameById(
                      farm.contracting.farm[index - 1].farmId
                    )
                  }}
                </td>
              </template>
              <template v-else>
                <td
                  v-if="index < this.highestContractingAmount"
                  style="border: none"
                ></td>
                <td v-else></td>
              </template>
            </template>
          </tr>
        </template>
        <template v-for="index in this.highestContractedAmount" :key="index">
          <tr>
            <th
              scope="row"
              v-if="index === 1"
              :rowspan="this.highestContractedAmount"
            >
              {{ $t("farmsContracted") }}
            </th>
            <template v-for="farm in farmsData.farm" :key="farm.farmId">
              <template
                v-if="
                  this.contractedFarms.get(farm.farmId) !== undefined &&
                  this.contractedFarms.get(farm.farmId)[index - 1] !== undefined
                "
              >
                <td
                  v-if="index < this.highestContractedAmount"
                  style="border: none"
                >
                  {{
                    this.getFarmNameById(
                      this.contractedFarms.get(farm.farmId)[index - 1].farmId
                    )
                  }}
                </td>
                <td v-else>
                  {{
                    this.getFarmNameById(
                      this.contractedFarms.get(farm.farmId)[index - 1].farmId
                    )
                  }}
                </td>
              </template>
              <template v-else>
                <td
                  v-if="index < this.highestContractedAmount"
                  style="border: none"
                ></td>
                <td v-else></td>
              </template>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
    <div style="width: 550px">
      <h5>Legende</h5>
      <table class="table table-sm table-borderless">
        <tbody>
          <tr>
            <th scope="row">
              {{ $t("farmManager") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  class="fa-stack-2x"
                  :icon="['fad', 'user-tie']"
                />
              </font-awesome-layers>
            </td>
            <th scope="row">
              {{ $t("buyPlaceable") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  :icon="['fad', 'shopping-cart']"
                  class="fa-stack-2x"
                />
                <font-awesome-icon
                  :icon="['fas', 'shop']"
                  class="fa-stack-1x"
                  style="margin-bottom: 9px; margin-left: 8px"
                />
              </font-awesome-layers>
            </td>
          </tr>
          <tr>
            <th scope="row">
              {{ $t("buyVehicle") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  :icon="['fad', 'shopping-cart']"
                  class="fa-stack-2x"
                />
                <font-awesome-icon
                  :icon="['fas', 'tractor']"
                  class="fa-stack-1x"
                  style="margin-bottom: 9px; margin-left: 8px"
                />
              </font-awesome-layers>
            </td>
            <th scope="row">
              {{ $t("sellPlaceable") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  :icon="['fad', 'badge']"
                  class="fa-stack-2x"
                />
                <font-awesome-icon
                  :icon="['fas', 'shop']"
                  class="fa-stack-1x"
                />
              </font-awesome-layers>
            </td>
          </tr>
          <tr>
            <th scope="row">
              {{ $t("sellVehicle") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  :icon="['fad', 'badge']"
                  class="fa-stack-2x"
                />
                <font-awesome-icon
                  :icon="['fas', 'tractor']"
                  class="fa-stack-1x"
                />
              </font-awesome-layers>
            </td>
            <th scope="row">
              {{ $t("createFields") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  :icon="['fad', 'seedling']"
                  class="fa-stack-2x"
                />
                <font-awesome-icon
                  :icon="['fas', 'dash']"
                  class="fa-stack-2x"
                  style="margin-bottom: -10px"
                />
              </font-awesome-layers>
            </td>
          </tr>
          <tr>
            <th scope="row">
              {{ $t("hireAssistant") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  class="fa-stack-2x"
                  :icon="['fad', 'people-group']"
                />
              </font-awesome-layers>
            </td>
            <th scope="row">
              {{ $t("landscaping") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  class="fa-stack-2x"
                  :icon="['fad', 'shovel']"
                />
              </font-awesome-layers>
            </td>
          </tr>
          <tr>
            <th scope="row">
              {{ $t("manageRights") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  class="fa-stack-2x"
                  :icon="['fad', 'user-gear']"
                />
              </font-awesome-layers>
            </td>
            <th scope="row">
              {{ $t("manageContracting") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  class="fa-stack-2x"
                  :icon="['fad', 'comments-dollar']"
                />
              </font-awesome-layers>
            </td>
          </tr>
          <tr>
            <th scope="row">
              {{ $t("manageContracts") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  class="fa-stack-2x"
                  :icon="['fad', 'file-invoice-dollar']"
                />
              </font-awesome-layers>
            </td>
            <th scope="row">
              {{ $t("resetVehicle") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  :icon="['fad', 'tractor']"
                  class="fa-stack-2x"
                  style="--fa-primary-opacity: 0.6"
                />
                <font-awesome-icon
                  :icon="['fas', 'rotate-left']"
                  class="fa-stack-1x"
                  style="margin-bottom: 15px; margin-left: 19px"
                />
              </font-awesome-layers>
            </td>
          </tr>
          <tr>
            <th scope="row">
              {{ $t("tradeAnimals") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon :icon="['fad', 'pig']" class="fa-stack-2x" />
                <font-awesome-icon
                  :icon="['fas', 'money-bill']"
                  class="fa-stack-1x"
                  style="margin-bottom: 10px; margin-left: 15px"
                />
              </font-awesome-layers>
            </td>
            <th scope="row">
              {{ $t("transferMoney") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  class="fa-stack-2x"
                  :icon="['fad', 'money-bill-transfer']"
                />
              </font-awesome-layers>
            </td>
          </tr>
          <tr>
            <th scope="row">
              {{ $t("updateFarm") }}
            </th>
            <td>
              <font-awesome-layers class="fa-stack fa-2xs">
                <font-awesome-icon
                  :icon="['fad', 'farm']"
                  class="fa-stack-2x"
                  style="--fa-primary-opacity: 0.6"
                />
                <font-awesome-icon
                  :icon="['fas', 'pen']"
                  class="fa-stack-1x"
                  style="margin-bottom: 15px; margin-left: 21px"
                />
              </font-awesome-layers>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Chart, { ChartItem, ChartData, ChartDataset } from "chart.js/auto";
import farmsMap from "@/utils/farms";

export default defineComponent({
  name: "farmsComponent",
  data: () => ({
    farmsData: {} as FarmsData,
  }),
  props: {
    farmsDataProp: Object as PropType<FarmsData>,
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
  },
  computed: {
    highestPlayerAmount: function () {
      let highestAmount = 0;

      if (this.farmsData !== undefined && this.farmsData.farm !== undefined) {
        for (let farm of this.farmsData.farm) {
          if (
            farm.players !== undefined &&
            farm.players.player.length > highestAmount
          ) {
            highestAmount = farm.players.player.length;
          }
        }
      }

      return highestAmount;
    },
    highestContractingAmount: function () {
      let highestAmount = 0;

      if (this.farmsData !== undefined && this.farmsData.farm !== undefined) {
        for (let farm of this.farmsData.farm) {
          if (
            farm.contracting !== undefined &&
            farm.contracting.farm.length > highestAmount
          ) {
            highestAmount = farm.contracting.farm.length;
          }
        }
      }

      return highestAmount;
    },
    highestContractedAmount: function () {
      let highestAmount = 0;

      for (let farm of this.contractedFarms) {
        for (let contracts of farm) {
          let contract = contracts as Array<FarmContract>;

          if (highestAmount <= contract.length) {
            highestAmount = contract.length;
          }
        }
      }

      return highestAmount;
    },
    contractedFarms: function (): Map<number, Array<FarmContract>> {
      let contractors = new Map<number, Array<FarmContract>>();

      if (this.farmsData !== undefined && this.farmsData.farm !== undefined) {
        for (let farm of this.farmsData.farm) {
          if (farm.contracting !== undefined) {
            for (let farmContract of farm.contracting.farm) {
              if (farmContract.farmId !== undefined) {
                if (contractors.has(farmContract.farmId)) {
                  let contractor = contractors.get(farmContract.farmId);

                  if (contractor === undefined) {
                    contractor = Array<FarmContract>();
                    contractor.push({ farmId: farm.farmId });

                    contractors.set(farmContract.farmId, contractor);
                  } else {
                    contractor.push({ farmId: farm.farmId });
                  }
                } else {
                  let contractor = Array<FarmContract>();
                  contractor.push({ farmId: farm.farmId });

                  contractors.set(farmContract.farmId, contractor);
                }
              }
            }
          }
        }
      }

      return contractors;
    },
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
    getFarmNameById(id: number): string {
      if (this.farmsData !== undefined && this.farmsData.farm !== undefined) {
        for (let farm of this.farmsData.farm) {
          if (farm.farmId === id && farm.name !== undefined) {
            return farm.name;
          }
        }
      }

      return "UNKNOWN";
    },
    getFarmColorById(id: number): string {
      if (this.farmsData !== undefined && this.farmsData.farm !== undefined) {
        for (let farm of this.farmsData.farm) {
          if (farm.farmId === id && farm.color !== undefined) {
            let farmColorData = farmsMap.get(farm.color);

            if (farmColorData) {
              return (
                "rgba(" +
                farmColorData[1] +
                ", " +
                farmColorData[2] +
                ", " +
                farmColorData[3] +
                ", 1)"
              );
            }
          }
        }
      }

      return "rgba(255, 255, 255, 0.3)";
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

<style scoped>
.iconWall {
  font-size: 0.705em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.icon {
  margin-bottom: 5px;
  margin-right: 5px;
}
</style>
