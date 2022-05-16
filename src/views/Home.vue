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
      v-if="isWeatherDisplaying"
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
  name: 'Home',

  data() {
    return {
      isWeatherDisplaying: false,
      cityInserted: '',
    };
  },

  computed: {
    ...mapState([
      'isLoading',
      'temperature',
      'feelsLike',
      'humidity',
    ]),

    isButtonLoading() {
      if (this.isLoading) {
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
    ]),

    async getWeather() {
      this.setWeatherQueryParameters(this.cityInserted);
      this.setUrlForWeather();

      await this.getWeatherByCity();

      this.isWeatherDisplaying = true;
    },

    onClearClicked() {
      this.isWeatherDisplaying = false;
    },
  },
};
</script>

<style>
</style>