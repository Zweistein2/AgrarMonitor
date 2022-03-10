<template>
  <template
    v-for="[index, forecast] in forecastData.forecast.entries()"
    :key="index"
  >
    <div class="col">
      <div class="row row1">
        {{ $t("WEATHER_" + forecast.typeName) }}
      </div>
      <div class="row row2">
        <font-awesome-icon
          v-if="forecast.typeName === 'CLOUDY'"
          class="img-fluid weatherIcon"
          alt="WeatherIconLogo"
          :icon="['fad', 'clouds']"
        />
        <font-awesome-icon
          v-if="forecast.typeName === 'SNOW'"
          class="img-fluid weatherIcon"
          alt="WeatherIconLogo"
          :icon="['fad', 'cloud-snow']"
        />
        <font-awesome-icon
          v-if="forecast.typeName === 'RAIN'"
          class="img-fluid weatherIcon"
          alt="WeatherIconLogo"
          :icon="['fad', 'cloud-rain']"
        />
        <font-awesome-icon
          v-if="forecast.typeName === 'SUN'"
          class="img-fluid weatherIcon"
          alt="WeatherIconLogo"
          :icon="['fad', 'sun']"
        />
      </div>
      <div
        class="row row3"
        v-if="$d(forecast.start, 'dateShort') === $d(forecast.end, 'dateShort')"
      >
        {{ $d(forecast.start, "dateShort") }}
      </div>
      <div class="row row3" v-else>
        {{ $d(forecast.start, "dateShort") }}
        -
        {{ $d(forecast.end, "dateShort") }}
      </div>
      <div class="row row3 mb-5">
        {{ $d(forecast.start, "time") }}
        -
        {{ $d(forecast.end, "time") }}
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ForecastComponent",
  props: {
    environmentData: Object as PropType<EnvironmentData>,
  },
  data: () => ({
    forecastData: {
      currentDay: -1,
      currentMonth: -1,
      forecast: [] as Array<ForecastTimeslot>,
    } as ForecastData,
    today: new Date(),
    forecastDate: new Date(),
  }),
  mounted() {
    if (
      this.environmentData &&
      this.environmentData.dayTime &&
      this.environmentData.daysPerPeriod &&
      this.environmentData.currentDay &&
      this.environmentData.weather &&
      this.environmentData.weather.forecast
    ) {
      this.forecastData = {
        forecast: [] as Array<ForecastTimeslot>,
      } as ForecastData;

      this.forecastData.dayTime = this.environmentData.dayTime;
      this.forecastData.currentMonth =
        Math.ceil(
          this.environmentData.currentDay / this.environmentData.daysPerPeriod
        ) % 12;
      this.forecastData.currentDay =
        ((this.environmentData.currentDay / this.environmentData.daysPerPeriod -
          this.forecastData.currentMonth +
          1) *
          this.environmentData.daysPerPeriod) %
        12;

      this.today = new Date(
        1999,
        this.forecastData.currentMonth + 1,
        this.forecastData.currentDay,
        ~~(this.environmentData.dayTime / 60),
        ~~(this.environmentData.dayTime % 60)
      );

      let duration = 0;

      if (this.environmentData.weather.forecast.instance[0]) {
        duration = ~~(this.environmentData.weather.forecast.instance[0]
          .durationLeft !== undefined
          ? this.environmentData.weather.forecast.instance[0].durationLeft
          : this.environmentData.weather.forecast.instance[0].duration !==
            undefined
          ? this.environmentData.weather.forecast.instance[0].duration
          : 0);
      }

      let lastForecastDate = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate(),
        this.today.getHours(),
        30
      );

      for (
        let i = 1;
        i < this.environmentData.weather.forecast.instance.length;
        i++
      ) {
        let entry = this.environmentData.weather.forecast.instance[
          i
        ] as ForecastInstance;
        let lastEntry = this.environmentData.weather.forecast.instance[
          i - 1
        ] as ForecastInstance;

        if (entry.typeName == lastEntry.typeName) {
          duration =
            duration + ~~(entry.duration !== undefined ? entry.duration : 0);
        } else {
          let hours = lastForecastDate.getHours() + duration;
          let days = ~~(hours / 24);
          let daysInPeriod =
            (lastForecastDate.getDate() + days - 1) %
            this.environmentData.daysPerPeriod;
          let periods = ~~(
            (lastForecastDate.getDate() + days - 1) /
            this.environmentData.daysPerPeriod
          );

          this.forecastData.forecast.push({
            typeName: lastEntry.typeName,
            start: new Date(
              1999,
              lastForecastDate.getMonth(),
              lastForecastDate.getDate(),
              lastForecastDate.getHours(),
              lastForecastDate.getMinutes()
            ),
            end: new Date(
              1999,
              lastForecastDate.getMonth() + periods,
              daysInPeriod + 1,
              hours % 24,
              lastForecastDate.getMinutes()
            ),
          } as ForecastTimeslot);
          lastForecastDate = new Date(
            1999,
            lastForecastDate.getMonth() + periods,
            daysInPeriod + 1,
            hours % 24,
            lastForecastDate.getMinutes()
          );
          duration = ~~(entry.duration !== undefined ? entry.duration : 0);
        }
      }
    }
  },
});
</script>

<style scoped>
.weatherIcon {
  height: 32px !important;
  width: calc(var(--bs-gutter-x) + 32px) !important;
  margin: 10% 0;
}

.row1 {
  font-size: 0.7rem;
  font-weight: bold;
  color: black;
  justify-content: center;
}

.row2 {
  justify-content: center;
}

.row3 {
  font-size: 0.9rem;
  font-weight: bold;
  color: black;
  justify-content: center;
}
</style>
