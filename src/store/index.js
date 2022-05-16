import { API_KEY } from '@/api/apiKey';
import axios from 'axios';
import { showAlertForUser } from '@/utils/alertForUser';
import Vue from 'vue';
import Vuex from 'vuex';
import { weatherApi } from '@/api/weatherApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    city: '',
    weatherQueryParameters: '',
    weatherUrl: '',
    weatherData: {},
    temperature: '',
    feelsLike: '',
    humidity: '',
  },

  getters: {
    //
  },

  mutations: {
    setWeatherQueryParameters: (state, city) => {
      state.city = city;

      state.weatherQueryParameters = `q=${city}&units=metric`;

      return state.weatherQueryParameters;
    },

    setUrlForWeather: (state) => {
      state.weatherUrl = `${
        weatherApi +
        state.weatherQueryParameters +
        '&appid=' +
        API_KEY
      }`;

      return state.weatherUrl;
    },

    setLoading: (state, status) => {
      state.isLoading = status;
    },

    setTemperature: (state) => {
      state.temperature = Math.floor(state.weatherData.data.main.temp);
    },

    setFeelLike: (state) => {
      state.feelsLike = Math.floor(state.weatherData.data.main.feels_like);
    },

    setHumidity: (state) => {
      state.humidity = state.weatherData.data.main.humidity;
    },
  },

  actions: {
    async getWeatherByCity({ commit, state }) {
      commit('setLoading', true);
      commit('setUrlForWeather');

      await axios.get(state.weatherUrl)
        .then((result) => {
          state.weatherData = result;

          commit('setTemperature');
          commit('setFeelLike');
          commit('setHumidity');
        })
        .catch((error) => {
          if (!error.response) {
            return;
          }

          const errorMessage = error.response.data.message;

          showAlertForUser(errorMessage);
        })
        .finally(() => {
          commit('setLoading', false);
        });
    },
  },

  modules: {},
});
