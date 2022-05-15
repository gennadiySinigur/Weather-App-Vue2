<template>
  <v-card
    class="mx-auto px-4 py-4 mt-10"
    width="450px"
  >
    <v-text-field
      v-model="city"
      label="Enter city"
      hide-details="auto"
      class="mb-4"
    />

    <v-btn
      :loading="isLoading"
      @click="searchWeatherByCity"
    >
      Search weather
    </v-btn>

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
import { API_KEY } from '@/api/apiKey';
import axios from 'axios';
import { weatherApi } from '@/api/weatherApi';

export default {
  name: 'Home',

  data() {
    return {
      isLoading: false,
      city: '',
      isWeatherDisplaying: false,
      temperature: '',
      feelsLike: '',
      humidity: '',
    };
  },

  computed: {
    weatherQueryParameters() {
      return `q=${this.city}&units=metric`;
    },

    urlForWeather() {
      return `${weatherApi}${this.weatherQueryParameters}&appid=${API_KEY}`;
    },
  },

  methods: {
    async searchWeatherByCity() {
      this.isLoading = true;

      await axios.get(this.urlForWeather)
        .then((response) => {
          const temperature = Math.floor(response.data.main.temp);
          const feelsLike = Math.floor(response.data.main.feels_like);
          const { humidity } = response.data.main;

          this.temperature = temperature;
          this.feelsLike = feelsLike;
          this.humidity = humidity;

          this.isWeatherDisplaying = true;
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;

          return this.$swal.fire({
            title: 'Error!',
            icon: 'error',
            showConfirmButton: true,
            text: errorMessage,
            customClass: {
              content: 'red',
            },
          });
        })
        .finally(() => {
          this.isLoading = false;
        })
      ;
    },
  },
};
</script>

<style>
</style>