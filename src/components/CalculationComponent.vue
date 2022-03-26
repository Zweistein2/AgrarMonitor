<template>
  <div class="row m-1" id="masonry" data-masonry='{"percentPosition": true }'>
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            {{ $t("map") + " - " + $t(selectedMap) }}
          </h5>
        </div>
        <div class="card-body">
          <div class="row">
            <v-select
              v-if="isNFMarschInstalled"
              v-model="selectedMap"
              :clearable="false"
              :options="['Elmcreek', 'Erlengrat', 'Haut-Beyleron', 'NFMarsch']"
              :get-option-label="(map) => `${$t(map)}`"
            >
              <template v-slot:option="map">
                {{ $t(map.label) }}
              </template>
            </v-select>
            <v-select
              v-else
              v-model="selectedMap"
              :clearable="false"
              :options="['Elmcreek', 'Erlengrat', 'Haut-Beyleron']"
              :get-option-label="(map) => `${$t(map)}`"
            >
              <template v-slot:option="map">
                {{ $t(map.label) }}
              </template>
            </v-select>
            <mapComponent
              @selectField="selectField"
              :map-name="selectedMap"
              :show-fields="true"
              :show-vehicles="false"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 col-xxl-9 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            {{ $t("prices") }}
            - {{ $t(selectedDifficulty) }} -
            <img
              class="economyIcon"
              v-if="selectedFruitType !== undefined"
              alt="IconLogo"
              :src="iconSrc(selectedFruitType)"
              height="32"
            />
          </h5>
        </div>
        <div class="card-body">
          <div class="row">
            <v-select
              v-model="selectedFruitType"
              class="w-50"
              :clearable="false"
              :options="fruittypeNames"
              :get-option-label="(fruitType) => `${$t(fruitType)}`"
            >
              <template v-slot:option="fruitType">
                <img
                  alt="IconLogo"
                  :src="iconSrc(fruitType.label)"
                  height="32"
                />
                {{ $t(fruitType.label) }}
              </template>
            </v-select>
            <v-select
              v-model="selectedDifficulty"
              class="w-50"
              :clearable="false"
              :options="difficulties"
              :get-option-label="(difficulty) => `${$t(difficulty)}`"
            >
              <template v-slot:option="difficulty">
                {{ $t(difficulty.label) }}
              </template>
            </v-select>
          </div>
          <div class="row">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">
                    {{ $t("pricePerKiloliter") }}
                  </th>
                  <th scope="col" v-for="(month, index) in months" :key="month">
                    {{ $d(new Date().setMonth(index + 2), "month") }}
                  </th>
                </tr>
                <tr
                  v-if="
                    ![
                      'OILSEEDRADISH',
                      'STONE',
                      'ELECTRICCHARGE',
                      'METHANE',
                    ].includes(selectedFruitType)
                  "
                >
                  <th scope="row">
                    {{ $t("LowestPossiblePrice") }}
                  </th>
                  <td
                    v-for="(month, index) in months"
                    :key="month"
                    :style="
                      'background-color: ' +
                      getColor(
                        calculatePriceForFruit(index),
                        0.45,
                        fruittypePrices
                      )
                    "
                  >
                    {{ $n(calculateLowestPriceForFruit(index), "currency") }}
                  </td>
                </tr>
                <tr
                  v-if="
                    ![
                      'OILSEEDRADISH',
                      'STONE',
                      'ELECTRICCHARGE',
                      'METHANE',
                    ].includes(selectedFruitType)
                  "
                >
                  <th scope="row">
                    {{ $t("AveragePossiblePrice") }}
                  </th>
                  <td
                    v-for="(month, index) in months"
                    :key="month"
                    :style="
                      'background-color: ' +
                      getColor(
                        calculatePriceForFruit(index),
                        0.5,
                        fruittypePrices
                      )
                    "
                  >
                    {{ $n(calculatePriceForFruit(index), "currency") }}
                  </td>
                </tr>
                <tr
                  class="border-bottom border-dark"
                  v-if="
                    ![
                      'OILSEEDRADISH',
                      'STONE',
                      'ELECTRICCHARGE',
                      'METHANE',
                    ].includes(selectedFruitType)
                  "
                >
                  <th scope="row">
                    {{ $t("HighestPossiblePrice") }}
                  </th>
                  <td
                    v-for="(month, index) in months"
                    :key="month"
                    :style="
                      'background-color: ' +
                      getColor(
                        calculatePriceForFruit(index),
                        0.55,
                        fruittypePrices
                      )
                    "
                  >
                    {{ $n(calculateHighestPriceForFruit(index), "currency") }}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {{ $t("currentPrice") }}
                  </th>
                  <td
                    v-for="period in currentPeriod"
                    :key="period"
                    :style="
                      'background-color: ' +
                      getColor(
                        Number.parseFloat(period.text) * difficultyFactor,
                        0.6,
                        currentPeriod.map(
                          (value) =>
                            Number.parseFloat(value.text) * difficultyFactor
                        )
                      )
                    "
                  >
                    {{
                      $n(
                        Number.parseFloat(period.text) * difficultyFactor,
                        "currency"
                      )
                    }}
                  </td>
                </tr>
                <tr
                  v-if="
                    ![
                      'OILSEEDRADISH',
                      'STONE',
                      'ELECTRICCHARGE',
                      'METHANE',
                    ].includes(selectedFruitType)
                  "
                >
                  <th scope="row" class="lh-1">
                    {{ $t("currentPricePercentage") }}
                    <font-awesome-icon :icon="['fad', 'empty-set']" />
                  </th>
                  <td
                    class="lh-1 small-padding"
                    v-for="period in currentPeriod"
                    :key="period"
                    :style="
                      'background-color: ' +
                      getColorWithNonLinearScale(
                        ((Number.parseFloat(period.text) * difficultyFactor -
                          calculatePriceForFruit(period.period - 1)) /
                          calculatePriceForFruit(period.period - 1)) *
                          100,
                        0.6,
                        [-20, 0, 50]
                      )
                    "
                  >
                    {{
                      $n(
                        (Number.parseFloat(period.text) * difficultyFactor -
                          calculatePriceForFruit(period.period - 1)) /
                          calculatePriceForFruit(period.period - 1),
                        "percentage"
                      )
                    }}
                    <span class="text-small">
                      ({{
                        $n(
                          Number.parseFloat(period.text) * difficultyFactor -
                            calculatePriceForFruit(period.period - 1),
                          "currency"
                        )
                      }})
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            {{ $t("yield") }} -
            {{ $t("field") + " " + selectedField }}
          </h5>
        </div>
        <div class="card-body">
          <div class="row">
            <v-select
              v-model="selectedDifficulty"
              :clearable="false"
              :options="difficulties"
              :get-option-label="(difficulty) => `${$t(difficulty)}`"
            >
              <template v-slot:option="difficulty">
                {{ $t(difficulty.label) }}
              </template>
            </v-select>
          </div>
          <div class="row">
            <table class="table table-striped table-borderless">
              <tbody>
                <tr>
                  <th scope="col">
                    {{ $t("fillType") }}
                  </th>
                  <th scope="col">
                    {{ $t("pricePerLiter") }}
                  </th>
                  <th scope="col">
                    {{ $t("yieldPerSquaremeter") }}
                  </th>
                  <th scope="col">
                    {{ $t("seedsPerSquaremeter") }}
                  </th>
                  <th scope="col">
                    {{ $t("yield") }}
                  </th>
                  <th scope="col">
                    {{ $t("seeds") }}
                  </th>
                  <th scope="col">
                    {{ $t("turnover") }}
                  </th>
                  <th scope="col">
                    {{ $t("profit") }}
                  </th>
                  <th scope="col">
                    {{ $t("profitPerHectar") }}
                  </th>
                  <th scope="col">
                    {{ $t("profitPerSquaremeter") }}
                  </th>
                  <th scope="col">
                    {{ $t("totalProfitPerSquaremeter") }}
                  </th>
                  <th scope="col">
                    {{ $t("harvestCyclesPerYear") }}
                  </th>
                  <th scope="col">
                    {{ $t("totalProfitPerYear") }}
                  </th>
                  <th scope="col">
                    {{ $t("totalProfitPerSquaremeterPerYear") }}
                  </th>
                </tr>
                <template v-for="fruittype in fruityields" :key="fruittype[0]">
                  <template v-if="fruittype[1][1] && fruittype[0] !== 'STRAW'">
                    <tr>
                      <th scope="row">
                        <span>
                          <img :src="iconSrc(fruittype[0])" height="32" />{{
                            $t(fruittype[0])
                          }}</span
                        >
                        <br />
                        <span>
                          <img
                            :src="require(`@/assets/icons/STRAW.png`)"
                            height="32"
                          />{{ $t("STRAW") }}</span
                        >
                      </th>
                      <td>
                        <span>{{
                          $n(fruittypes.get(fruittype[0])[1], "currency")
                        }}</span>
                        <br />
                        <span>{{
                          $n(fruittypes.get("STRAW")[1], "currency")
                        }}</span>
                      </td>
                      <td>
                        <span>{{ $n(fruittype[1][2], "liter") }}</span>
                        <br />
                        <span>{{
                          $n(fruityields.get("STRAW")[2], "liter")
                        }}</span>
                      </td>
                      <td>
                        <span>{{ $n(fruittype[1][3], "liter") }}</span>
                        <br />
                        <span></span>
                      </td>
                      <td>
                        <span>{{
                          $n(
                            fruittype[1][2] *
                              10000 *
                              fields
                                .get(selectedMap)
                                .get(Number.parseInt(selectedField))[1],
                            "liter"
                          )
                        }}</span>
                        <br />
                        <span>{{
                          $n(
                            fruityields.get("STRAW")[2] *
                              10000 *
                              fields
                                .get(selectedMap)
                                .get(Number.parseInt(selectedField))[1],
                            "liter"
                          )
                        }}</span>
                      </td>
                      <td>
                        <span>{{
                          $n(
                            fruittype[1][3] *
                              10000 *
                              fields
                                .get(selectedMap)
                                .get(Number.parseInt(selectedField))[1],
                            "liter"
                          )
                        }}</span>
                        <br />
                        <span></span>
                      </td>
                      <td>
                        <span>
                          {{
                            $n(
                              fruittypes.get(fruittype[0])[1] *
                                difficultyFactor *
                                fruittype[1][2] *
                                10000 *
                                fields
                                  .get(selectedMap)
                                  .get(Number.parseInt(selectedField))[1],
                              "currency"
                            )
                          }}</span
                        >
                        <br />
                        <span>
                          {{
                            $n(
                              fruittypes.get("STRAW")[1] *
                                difficultyFactor *
                                fruityields.get("STRAW")[2] *
                                10000 *
                                fields
                                  .get(selectedMap)
                                  .get(Number.parseInt(selectedField))[1],
                              "currency"
                            )
                          }}</span
                        >
                      </td>
                      <td>
                        <span>
                          {{
                            $n(
                              fruittypes.get(fruittype[0])[1] *
                                difficultyFactor *
                                fruittype[1][2] *
                                10000 *
                                fields
                                  .get(selectedMap)
                                  .get(Number.parseInt(selectedField))[1] -
                                fruittypes.get("SEEDS")[1] *
                                  fruittype[1][3] *
                                  10000 *
                                  fields
                                    .get(selectedMap)
                                    .get(Number.parseInt(selectedField))[1],
                              "currency"
                            )
                          }}
                        </span>
                        <br />
                        <span>
                          {{
                            $n(
                              fruittypes.get("STRAW")[1] *
                                difficultyFactor *
                                fruityields.get("STRAW")[2] *
                                10000 *
                                fields
                                  .get(selectedMap)
                                  .get(Number.parseInt(selectedField))[1],
                              "currency"
                            )
                          }}
                        </span>
                      </td>
                      <td>
                        <span>
                          {{
                            $n(
                              fruittypes.get(fruittype[0])[1] *
                                difficultyFactor *
                                fruittype[1][2] *
                                10000 -
                                fruittypes.get("SEEDS")[1] *
                                  fruittype[1][3] *
                                  10000,
                              "currency"
                            )
                          }}
                        </span>
                        <br />
                        <span>
                          {{
                            $n(
                              fruittypes.get("STRAW")[1] *
                                difficultyFactor *
                                fruityields.get("STRAW")[2] *
                                10000,
                              "currency"
                            )
                          }}
                        </span>
                      </td>
                      <td>
                        <span>
                          {{
                            $n(
                              fruittypes.get(fruittype[0])[1] *
                                fruittype[1][2] *
                                difficultyFactor -
                                fruittypes.get("SEEDS")[1] * fruittype[1][3],
                              "currency"
                            )
                          }}
                        </span>
                        <br />
                        <span>
                          {{
                            $n(
                              fruittypes.get("STRAW")[1] *
                                difficultyFactor *
                                fruityields.get("STRAW")[2],
                              "currency"
                            )
                          }}
                        </span>
                      </td>
                      <td
                        :style="
                          'background-color: ' +
                          getColor(
                            fruittypes.get(fruittype[0])[1] *
                              difficultyFactor *
                              fruittype[1][2] -
                              fruittypes.get('SEEDS')[1] * fruittype[1][3] +
                              fruittypes.get('STRAW')[1] *
                                difficultyFactor *
                                fruityields.get('STRAW')[2],
                            0.5,
                            fruityieldProfits
                          )
                        "
                      >
                        <span>
                          {{
                            $n(
                              fruittypes.get(fruittype[0])[1] *
                                fruittype[1][2] *
                                difficultyFactor -
                                fruittypes.get("SEEDS")[1] * fruittype[1][3] +
                                fruittypes.get("STRAW")[1] *
                                  difficultyFactor *
                                  fruityields.get("STRAW")[2],
                              "currency"
                            )
                          }}
                        </span>
                        <br />
                        <span></span>
                      </td>
                      <td>
                        <span>
                          {{ fruittype[1][5] }}
                        </span>
                        <br />
                        <span></span>
                      </td>
                      <td>
                        <span>
                          {{
                            $n(
                              fruittypes.get(fruittype[0])[1] *
                                difficultyFactor *
                                fruittype[1][2] *
                                10000 *
                                fields
                                  .get(selectedMap)
                                  .get(Number.parseInt(selectedField))[1] -
                                fruittypes.get("SEEDS")[1] *
                                  fruittype[1][3] *
                                  10000 *
                                  fields
                                    .get(selectedMap)
                                    .get(Number.parseInt(selectedField))[1] +
                                fruittypes.get("STRAW")[1] *
                                  difficultyFactor *
                                  fruityields.get("STRAW")[2] *
                                  10000 *
                                  fields
                                    .get(selectedMap)
                                    .get(Number.parseInt(selectedField))[1],
                              "currency"
                            )
                          }}</span
                        >
                        <br />
                        <span></span>
                      </td>
                      <td
                        :style="
                          'background-color: ' +
                          getColor(
                            (fruittypes.get(fruittype[0])[1] *
                              difficultyFactor *
                              fruittype[1][2] -
                              fruittypes.get('SEEDS')[1] * fruittype[1][3] +
                              fruittypes.get('STRAW')[1] *
                                difficultyFactor *
                                fruityields.get('STRAW')[2]) *
                              fruittype[1][5],
                            0.5,
                            fruityieldProfitsPerCycle
                          )
                        "
                      >
                        <span>
                          {{
                            $n(
                              (fruittypes.get(fruittype[0])[1] *
                                fruittype[1][2] *
                                difficultyFactor -
                                fruittypes.get("SEEDS")[1] * fruittype[1][3] +
                                fruittypes.get("STRAW")[1] *
                                  difficultyFactor *
                                  fruityields.get("STRAW")[2]) *
                                fruittype[1][5],
                              "currency"
                            )
                          }}
                        </span>
                        <br />
                        <span></span>
                      </td>
                    </tr>
                  </template>
                  <tr v-else-if="fruittype[0] !== 'STRAW'">
                    <th scope="row" v-if="fruittype[0] === 'POPLAR'">
                      <img
                        :src="require(`@/assets/icons/WOODCHIPS.png`)"
                        height="32"
                      />
                      {{ $t("WOODCHIPS") + " (" + $t(fruittype[0]) + ")" }}
                    </th>
                    <th scope="row" v-else>
                      <img :src="iconSrc(fruittype[0])" height="32" />
                      {{ $t(fruittype[0]) }}
                    </th>
                    <td v-if="fruittype[0] === 'POPLAR'">
                      {{ $n(fruittypes.get("WOODCHIPS")[1], "currency") }}
                    </td>
                    <td v-else>
                      {{ $n(fruittypes.get(fruittype[0])[1], "currency") }}
                    </td>
                    <td>
                      {{ $n(fruittype[1][2], "liter") }}
                    </td>
                    <td>
                      {{ $n(fruittype[1][3], "liter") }}
                    </td>
                    <td>
                      {{
                        $n(
                          fruittype[1][2] *
                            10000 *
                            fields
                              .get(selectedMap)
                              .get(Number.parseInt(selectedField))[1],
                          "liter"
                        )
                      }}
                    </td>
                    <td>
                      {{
                        $n(
                          fruittype[1][3] *
                            10000 *
                            fields
                              .get(selectedMap)
                              .get(Number.parseInt(selectedField))[1],
                          "liter"
                        )
                      }}
                    </td>
                    <td>
                      {{
                        $n(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 *
                            fields
                              .get(selectedMap)
                              .get(Number.parseInt(selectedField))[1],
                          "currency"
                        )
                      }}
                    </td>
                    <td v-if="fruittype[0] === 'POPLAR'">
                      {{
                        $n(
                          fruittypes.get("WOODCHIPS")[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 *
                            fields
                              .get(selectedMap)
                              .get(Number.parseInt(selectedField))[1] -
                            fruittypes.get("POPLAR_SEEDS")[1] *
                              fruittype[1][3] *
                              10000 *
                              fields
                                .get(selectedMap)
                                .get(Number.parseInt(selectedField))[1],
                          "currency"
                        )
                      }}
                    </td>
                    <td v-else-if="fruittype[0] === 'SUGARCANE'">
                      {{
                        $n(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 *
                            fields
                              .get(selectedMap)
                              .get(Number.parseInt(selectedField))[1] -
                            fruittypes.get("SUGARCANE_SEEDS")[1] *
                              fruittype[1][3] *
                              10000 *
                              fields
                                .get(selectedMap)
                                .get(Number.parseInt(selectedField))[1],
                          "currency"
                        )
                      }}
                    </td>
                    <td v-else>
                      {{
                        $n(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 *
                            fields
                              .get(selectedMap)
                              .get(Number.parseInt(selectedField))[1] -
                            fruittypes.get("SEEDS")[1] *
                              fruittype[1][3] *
                              10000 *
                              fields
                                .get(selectedMap)
                                .get(Number.parseInt(selectedField))[1],
                          "currency"
                        )
                      }}
                    </td>
                    <td v-if="fruittype[0] === 'POPLAR'">
                      {{
                        $n(
                          fruittypes.get("WOODCHIPS")[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 -
                            fruittypes.get("POPLAR_SEEDS")[1] *
                              fruittype[1][3] *
                              10000,
                          "currency"
                        )
                      }}
                    </td>
                    <td v-else-if="fruittype[0] === 'SUGARCANE'">
                      {{
                        $n(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 -
                            fruittypes.get("SUGARCANE_SEEDS")[1] *
                              fruittype[1][3] *
                              10000,
                          "currency"
                        )
                      }}
                    </td>
                    <td v-else>
                      {{
                        $n(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 -
                            fruittypes.get("SEEDS")[1] *
                              fruittype[1][3] *
                              10000,
                          "currency"
                        )
                      }}
                    </td>
                    <td v-if="fruittype[0] === 'POPLAR'">
                      {{
                        $n(
                          fruittypes.get("WOODCHIPS")[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get("POPLAR_SEEDS")[1] * fruittype[1][3],
                          "currency"
                        )
                      }}
                    </td>
                    <td v-else-if="fruittype[0] === 'SUGARCANE'">
                      {{
                        $n(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get("SUGARCANE_SEEDS")[1] *
                              fruittype[1][3],
                          "currency"
                        )
                      }}
                    </td>
                    <td v-else>
                      {{
                        $n(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get("SEEDS")[1] * fruittype[1][3],
                          "currency"
                        )
                      }}
                    </td>
                    <td
                      v-if="fruittype[0] === 'POPLAR'"
                      :style="
                        'background-color: ' +
                        getColor(
                          fruittypes.get('WOODCHIPS')[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get('POPLAR_SEEDS')[1] * fruittype[1][3],
                          0.5,
                          fruityieldProfits
                        )
                      "
                    >
                      {{
                        $n(
                          fruittypes.get("WOODCHIPS")[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get("POPLAR_SEEDS")[1] * fruittype[1][3],
                          "currency"
                        )
                      }}
                    </td>
                    <td
                      v-else-if="fruittype[0] === 'SUGARCANE'"
                      :style="
                        'background-color: ' +
                        getColor(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get('SUGARCANE_SEEDS')[1] *
                              fruittype[1][3],
                          0.5,
                          fruityieldProfits
                        )
                      "
                    >
                      {{
                        $n(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get("SUGARCANE_SEEDS")[1] *
                              fruittype[1][3],
                          "currency"
                        )
                      }}
                    </td>
                    <td
                      v-else
                      :style="
                        'background-color: ' +
                        getColor(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get('SEEDS')[1] * fruittype[1][3],
                          0.5,
                          fruityieldProfits
                        )
                      "
                    >
                      {{
                        $n(
                          fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get("SEEDS")[1] * fruittype[1][3],
                          "currency"
                        )
                      }}
                    </td>
                    <td>
                      {{ fruittype[1][5] }}
                    </td>
                    <td v-if="fruittype[0] === 'POPLAR'">
                      {{
                        $n(
                          (fruittypes.get("WOODCHIPS")[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 *
                            fields
                              .get(selectedMap)
                              .get(Number.parseInt(selectedField))[1] -
                            fruittypes.get("POPLAR_SEEDS")[1] *
                              fruittype[1][3] *
                              10000 *
                              fields
                                .get(selectedMap)
                                .get(Number.parseInt(selectedField))[1]) *
                            fruittype[1][5],
                          "currency"
                        )
                      }}
                    </td>
                    <td v-else-if="fruittype[0] === 'SUGARCANE'">
                      {{
                        $n(
                          (fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 *
                            fields
                              .get(selectedMap)
                              .get(Number.parseInt(selectedField))[1] -
                            fruittypes.get("SUGARCANE_SEEDS")[1] *
                              fruittype[1][3] *
                              10000 *
                              fields
                                .get(selectedMap)
                                .get(Number.parseInt(selectedField))[1]) *
                            fruittype[1][5],
                          "currency"
                        )
                      }}
                    </td>
                    <td v-else>
                      {{
                        $n(
                          (fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] *
                            10000 *
                            fields
                              .get(selectedMap)
                              .get(Number.parseInt(selectedField))[1] -
                            fruittypes.get("SEEDS")[1] *
                              fruittype[1][3] *
                              10000 *
                              fields
                                .get(selectedMap)
                                .get(Number.parseInt(selectedField))[1]) *
                            fruittype[1][5],
                          "currency"
                        )
                      }}
                    </td>
                    <td
                      v-if="fruittype[0] === 'POPLAR'"
                      :style="
                        'background-color: ' +
                        getColor(
                          (fruittypes.get('WOODCHIPS')[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get('POPLAR_SEEDS')[1] *
                              fruittype[1][3]) *
                            fruittype[1][5],
                          0.5,
                          fruityieldProfitsPerCycle
                        )
                      "
                    >
                      {{
                        $n(
                          (fruittypes.get("WOODCHIPS")[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get("POPLAR_SEEDS")[1] *
                              fruittype[1][3]) *
                            fruittype[1][5],
                          "currency"
                        )
                      }}
                    </td>
                    <td
                      v-else-if="fruittype[0] === 'SUGARCANE'"
                      :style="
                        'background-color: ' +
                        getColor(
                          (fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get('SUGARCANE_SEEDS')[1] *
                              fruittype[1][3]) *
                            fruittype[1][5],
                          0.5,
                          fruityieldProfitsPerCycle
                        )
                      "
                    >
                      {{
                        $n(
                          (fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get("SUGARCANE_SEEDS")[1] *
                              fruittype[1][3]) *
                            fruittype[1][5],
                          "currency"
                        )
                      }}
                    </td>
                    <td
                      v-else
                      :style="
                        'background-color: ' +
                        getColor(
                          (fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get('SEEDS')[1] * fruittype[1][3]) *
                            fruittype[1][5],
                          0.5,
                          fruityieldProfitsPerCycle
                        )
                      "
                    >
                      {{
                        $n(
                          (fruittypes.get(fruittype[0])[1] *
                            difficultyFactor *
                            fruittype[1][2] -
                            fruittypes.get("SEEDS")[1] * fruittype[1][3]) *
                            fruittype[1][5],
                          "currency"
                        )
                      }}
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12" v-if="false">
      <canvas id="chartContainer" height="100"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import fruittypesMap from "@/utils/fruittypes";
import vSelect from "vue-select";
import MapComponent from "@/components/MapComponent.vue";
import fruityieldsMap from "@/utils/fruityields";
import fieldsMap from "@/utils/fields";
import Masonry from "masonry-layout";
import Chart, { ChartItem } from "chart.js/auto";
import nfFruittypesMap from "@/mods/FS22_NF_Marsch_4fach_oG/utils/fruittypes";
import nfFruityieldsMap from "@/mods/FS22_NF_Marsch_4fach_oG/utils/fruityields";

export default defineComponent({
  name: "CalculationComponent",
  components: {
    mapComponent: MapComponent,
    "v-select": vSelect,
  },
  props: {
    economyData: Object as PropType<EconomyData>,
    metaData: Object as PropType<MetaData>,
  },
  data: () => ({
    selectedFruitType: "WHEAT" as string,
    selectedDifficulty: "difficulty_1" as string,
    selectedMap: "Elmcreek" as string,
    selectedField: 1 as number,
    months: [
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
    ] as Array<string>,
    difficulties: [
      "difficulty_1",
      "difficulty_2",
      "difficulty_3",
    ] as Array<string>,
    masonry: {} as Masonry,
  }),
  watch: {
    selectedMap: function () {
      this.selectedField = 1;
      this.selectedFruitType = "WHEAT";
    },
    selectedFruitType: function () {
      this.updateMasonry();
    },
    selectedDifficulty: function () {
      this.updateMasonry();
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
    selectField(fieldId: number): void {
      this.selectedField = fieldId;
    },
    calculatePriceForFruit(month: number): number {
      let fruittype = this.fruittypes.get(this.selectedFruitType);
      if (fruittype) {
        let price = fruittype[1];
        let priceFaktorPerMonth = fruittype[2];

        return (
          price * 1000 * this.difficultyFactor * priceFaktorPerMonth[month]
        );
      }

      return -1;
    },
    calculateLowestPriceForFruit(month: number): number {
      return this.calculatePriceForFruit(month) * 0.75;
    },
    calculateHighestPriceForFruit(month: number): number {
      return this.calculatePriceForFruit(month) * 1.5;
    },
    getColor(
      currentValue: number,
      alpha: number,
      range: Array<number>
    ): string {
      let red = { red: 255, green: 0, blue: 0 };
      let yellow = { red: 255, green: 255, blue: 0 };
      let green = { red: 19, green: 233, blue: 19 };
      let lowestValue = Math.min(...range);
      let highestValue = Math.max(...range);
      let currentFactor =
        (currentValue - lowestValue) / (highestValue - lowestValue);

      return this.colorGradient(currentFactor, alpha, red, yellow, green);
    },
    getColorWithNonLinearScale(
      currentValue: number,
      alpha: number,
      range: [number, number, number]
    ): string {
      let red = { red: 255, green: 0, blue: 0 };
      let yellowred = { red: 255, green: 128, blue: 0 };
      let yellow = { red: 255, green: 255, blue: 0 };
      let yellowgreen = { red: 128, green: 233, blue: 19 };
      let green = { red: 19, green: 233, blue: 19 };
      let lowestValue = range[0];
      let zeroValue = range[1];
      let highestValue = range[2];

      let currentFactor = 0.5;
      if (currentValue > zeroValue) {
        currentFactor = (currentValue - zeroValue) / (highestValue - zeroValue);
        return this.colorGradient(
          currentFactor,
          alpha,
          yellow,
          yellowgreen,
          green
        );
      } else if (currentValue < zeroValue) {
        currentFactor =
          (currentValue - lowestValue) / (zeroValue - lowestValue);
        return this.colorGradient(currentFactor, alpha, red, yellowred, yellow);
      }

      return this.colorGradient(currentFactor, alpha, red, yellow, green);
    },
    colorGradient(
      fadeFraction: number,
      alpha: number,
      rgbColor1: { red: number; green: number; blue: number },
      rgbColor2: { red: number; green: number; blue: number },
      rgbColor3: { red: number; green: number; blue: number }
    ): string {
      let color1 = rgbColor1;
      let color2 = rgbColor2;
      let fade = fadeFraction;

      fade = fade * 2;

      // Find which interval to use and adjust the fade percentage
      if (fade >= 1) {
        fade -= 1;
        color1 = rgbColor2;
        color2 = rgbColor3;
      }

      let diffRed = color2.red - color1.red;
      let diffGreen = color2.green - color1.green;
      let diffBlue = color2.blue - color1.blue;

      let gradient = {
        red: parseInt(Math.floor(color1.red + diffRed * fade).toString(), 10),
        green: parseInt(
          Math.floor(color1.green + diffGreen * fade).toString(),
          10
        ),
        blue: parseInt(
          Math.floor(color1.blue + diffBlue * fade).toString(),
          10
        ),
      };

      return (
        "rgba(" +
        gradient.red +
        "," +
        gradient.green +
        "," +
        gradient.blue +
        "," +
        alpha +
        ")"
      );
    },
    updateMasonry: function (): void {
      if (this.masonry.layout) {
        this.masonry.layout();
      }
    },
  },
  mounted(): void {
    let masonryScript = document.createElement("script");
    masonryScript.setAttribute(
      "src",
      "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
    );
    document.head.appendChild(masonryScript);

    let row = document.querySelector("#masonry") as Element;
    this.masonry = new Masonry(row, {
      percentPosition: true,
    });
  },
  updated(): void {
    this.updateMasonry();

    let existingChart = Chart.getChart(
      document.getElementById("chartContainer") as HTMLCanvasElement
    );

    if (existingChart === undefined) {
      const ctx = document.getElementById("chartContainer");

      if (ctx !== null) {
        new Chart(ctx as ChartItem, {
          type: "bar",
          data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
              {
                barPercentage: 1,
                categoryPercentage: 1,
                data: [0, 100, 200, 300, 400],
                backgroundColor: "rgba(0, 0, 0, 0)",
                hoverBackgroundColor: "rgba(0, 0, 0, 0)",
              },
              {
                barPercentage: 1,
                categoryPercentage: 1,
                data: [100, 100, 100, 100, 100],
                backgroundColor: ["red", "green", "blue", "yellow", "black"],
              },
            ],
          },
          options: {
            layout: {
              padding: 0,
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            responsive: true,
            indexAxis: "y",
            scales: {
              xAxis: {
                beginAtZero: true,
                stacked: true,
              },
              yAxis: {
                beginAtZero: true,
                stacked: true,
              },
            },
          },
        });
      }
    } else {
      existingChart.data.datasets = [
        {
          barPercentage: 1,
          categoryPercentage: 1,
          data: [0, 100, 200],
          backgroundColor: "rgba(0, 0, 0, 0)",
          hoverBackgroundColor: "rgba(0, 0, 0, 0)",
        },
        {
          barPercentage: 1,
          categoryPercentage: 1,
          data: [100, 100, 100],
          backgroundColor: ["red", "green", "blue"],
        },
      ];

      existingChart.update();
    }
  },
  computed: {
    isNFMarschInstalled: function () {
      if (this.metaData !== undefined && this.metaData.mod !== undefined) {
        return (
          this.metaData.mod.filter(
            (value) =>
              value.modName === "FS22_NF_Marsch_4fach_oG" ||
              value.modName === "FS22_NF_Marsch_4fach"
          ).length === 1
        );
      } else {
        return false;
      }
    },
    fruittypeNames() {
      let fruittypeNames = new Array<string>();

      for (let fruittype of this.fruittypes) {
        if (
          ![
            "SUGARCANE_SEEDS",
            "POPLAR_SEEDS",
            "SNOW",
            "ROADSALT",
            "FORAGE_MIXING",
            "POPLAR",
            "LIQUIDFERTILIZER",
            "FERTILIZER",
            "HERBICIDE",
            "SILAGE_ADDITIVE",
            "MINERAL_FEED",
            "PIGFOOD",
            "FORAGE",
            "SEEDS",
            "TREESAPLINGS",
            "LIME",
            "DIESEL",
            "DEF",
            "OILSEEDRADISH",
          ].includes(fruittype[0])
        ) {
          fruittypeNames.push(fruittype[0]);
        }
      }

      return fruittypeNames;
    },
    fruityields() {
      if (this.isNFMarschInstalled && this.selectedMap === "NFMarsch") {
        return new Map([...fruityieldsMap, ...nfFruityieldsMap]);
      }

      return fruityieldsMap;
    },
    fruittypes() {
      if (this.isNFMarschInstalled && this.selectedMap === "NFMarsch") {
        return new Map([...fruittypesMap, ...nfFruittypesMap]);
      }

      return fruittypesMap;
    },
    fields() {
      return fieldsMap;
    },
    fruittypePrices() {
      let prices = new Array<number>();

      for (let i = 0; i < 12; i++) {
        prices.push(this.calculatePriceForFruit(i));
      }

      return prices;
    },
    fruityieldProfits() {
      let profits = new Array<number>();

      for (let fruittype of fruityieldsMap) {
        if (
          fruittype[0] !== "STRAW" &&
          fruittypesMap.has(fruittype[0]) &&
          fruittypesMap.has("STRAW") &&
          fruittypesMap.has("SEEDS") &&
          fruittypesMap.has("POPLAR_SEEDS") &&
          fruittypesMap.has("SUGARCANE_SEEDS") &&
          fruittypesMap.has("WOODCHIPS") &&
          fruityieldsMap.has("STRAW")
        ) {
          let currentFruittype = fruittypesMap.get(fruittype[0]);
          let seeds = fruittypesMap.get("SEEDS");
          let poplar_seeds = fruittypesMap.get("POPLAR_SEEDS");
          let sugarcane_seeds = fruittypesMap.get("SUGARCANE_SEEDS");
          let woodchips = fruittypesMap.get("WOODCHIPS");
          let straw = fruittypesMap.get("STRAW");
          let strawYield = fruityieldsMap.get("STRAW");

          if (
            currentFruittype &&
            seeds &&
            woodchips &&
            poplar_seeds &&
            sugarcane_seeds &&
            straw &&
            strawYield
          ) {
            let totalProfit;

            if (fruittype[1][1]) {
              totalProfit =
                currentFruittype[1] * this.difficultyFactor * fruittype[1][2] -
                seeds[1] * fruittype[1][3] +
                straw[1] * this.difficultyFactor * strawYield[2];
            } else {
              if (fruittype[0] === "POPLAR") {
                totalProfit =
                  woodchips[1] * this.difficultyFactor * fruittype[1][2] -
                  poplar_seeds[1] * fruittype[1][3];
              } else if (fruittype[0] === "SUGARCANE") {
                totalProfit =
                  currentFruittype[1] *
                    this.difficultyFactor *
                    fruittype[1][2] -
                  sugarcane_seeds[1] * fruittype[1][3];
              } else {
                totalProfit =
                  currentFruittype[1] *
                    this.difficultyFactor *
                    fruittype[1][2] -
                  seeds[1] * fruittype[1][3];
              }
            }

            profits.push(totalProfit);
          }
        }
      }

      return profits;
    },
    fruityieldProfitsPerCycle() {
      let profits = new Array<number>();

      for (let fruittype of fruityieldsMap) {
        if (
          fruittype[0] !== "STRAW" &&
          fruittypesMap.has(fruittype[0]) &&
          fruittypesMap.has("STRAW") &&
          fruittypesMap.has("SEEDS") &&
          fruittypesMap.has("POPLAR_SEEDS") &&
          fruittypesMap.has("SUGARCANE_SEEDS") &&
          fruittypesMap.has("WOODCHIPS") &&
          fruityieldsMap.has("STRAW")
        ) {
          let currentFruittype = fruittypesMap.get(fruittype[0]);
          let seeds = fruittypesMap.get("SEEDS");
          let poplar_seeds = fruittypesMap.get("POPLAR_SEEDS");
          let sugarcane_seeds = fruittypesMap.get("SUGARCANE_SEEDS");
          let woodchips = fruittypesMap.get("WOODCHIPS");
          let straw = fruittypesMap.get("STRAW");
          let strawYield = fruityieldsMap.get("STRAW");

          if (
            currentFruittype &&
            seeds &&
            woodchips &&
            poplar_seeds &&
            sugarcane_seeds &&
            straw &&
            strawYield
          ) {
            let totalProfit;

            if (fruittype[1][1]) {
              totalProfit =
                (currentFruittype[1] * this.difficultyFactor * fruittype[1][2] -
                  seeds[1] * fruittype[1][3] +
                  straw[1] * this.difficultyFactor * strawYield[2]) *
                fruittype[1][5];
            } else {
              if (fruittype[0] === "POPLAR") {
                totalProfit =
                  (woodchips[1] * this.difficultyFactor * fruittype[1][2] -
                    poplar_seeds[1] * fruittype[1][3]) *
                  fruittype[1][5];
              } else if (fruittype[0] === "SUGARCANE") {
                totalProfit =
                  (currentFruittype[1] *
                    this.difficultyFactor *
                    fruittype[1][2] -
                    sugarcane_seeds[1] * fruittype[1][3]) *
                  fruittype[1][5];
              } else {
                totalProfit =
                  (currentFruittype[1] *
                    this.difficultyFactor *
                    fruittype[1][2] -
                    seeds[1] * fruittype[1][3]) *
                  fruittype[1][5];
              }
            }

            profits.push(totalProfit);
          }
        }
      }

      return profits;
    },
    currentPeriod() {
      if (
        this.economyData &&
        this.economyData.fillTypes &&
        this.economyData.fillTypes.fillType
      ) {
        let fillType = this.economyData.fillTypes.fillType.find(
          (value) => value.fillType === this.selectedFruitType
        );

        if (fillType && fillType.history && fillType.history.period) {
          return fillType.history.period;
        }
      }

      return [];
    },
    difficultyFactor(): number {
      let difficulty = this.difficulties.indexOf(this.selectedDifficulty);
      return difficulty === 0 ? 3.0 : difficulty === 1 ? 1.8 : 1.0;
    },
  },
});
</script>

<style scoped>
.economyIcon {
  position: absolute;
}

.text-small {
  font-size: small;
}

.small-padding {
  padding: 0.25rem 0.5rem;
}
</style>
