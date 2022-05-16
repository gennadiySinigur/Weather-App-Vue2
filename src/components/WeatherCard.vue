<template>
  <v-card
    class="mx-auto px-4 py-4 mt-10"
    width="450px"
  >
    <form>
      <v-text-field
        v-model="cityInserted"
        label="Enter city"
        hide-details="auto"
        hint="For example, New York"
        prepend-inner-icon="mdi-map-marker"
        class="mb-4"
        clearable
        @click:clear="onClearClicked"
      />

      <v-btn
        type="submit"
        :loading="isButtonLoading"
        @click="getWeather"
      >
        Search weather
      </v-btn>
    </form>

    <v-card
      v-if="isWeatherInfoDisplaying"
      class="mt-10 px-4 py-4"
    >
      <div>Temperature: {{ temperature }} ℃</div>

      <div>Feels like: {{ feelsLike }} ℃</div>

      <div>Humidity: {{ humidity }} %</div>
    </v-card>
  </v-card>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'WeatherCard',

  data() {
    return {
      cityInserted: '',
    };
  },

  computed: {
    ...mapState([
      'isLoading',
      'temperature',
      'feelsLike',
      'humidity',
      'isWeatherDisplaying',
    ]),

    isButtonLoading() {
      if (this.isLoading) {
        return true;
      }

      return false;
    },

    isWeatherInfoDisplaying() {
      if (this.isWeatherDisplaying) {
        return true;
      }

      return false;
    },
  },

  methods: {
    ...mapActions(['getWeatherByCity']),

    ...mapMutations([
      'setWeatherQueryParameters',
      'setUrlForWeather',
      'setIsWeatherDisplaying',
    ]),

    async getWeather() {
      this.setWeatherQueryParameters(this.cityInserted);
      this.setUrlForWeather();

      await this.getWeatherByCity();
    },

    onClearClicked() {
      this.setIsWeatherDisplaying(false);
    },
  },
};
</script>
