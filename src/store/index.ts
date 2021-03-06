import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import { API_KEY } from '@/api/apiKey';
import { catchError } from '@/utils/catchError';
import { weatherApi } from '@/api/weatherApi';

Vue.use(Vuex);

interface WeatherDataType {
  data: {
    main: {
      temp: number,
      // eslint-disable-next-line camelcase
      feels_like: number,
      humidity: number,
    }
  }
}

interface StateType {
  isWeatherDisplaying: boolean,
  city: string,
  weatherQueryParameters: string,
  weatherUrl: string,
  weatherData: WeatherDataType,
  temperature: string,
  feelsLike: string,
  humidity: string,
}

export default new Vuex.Store<StateType>({
  state: {
    isWeatherDisplaying: false,
    city: '',
    weatherQueryParameters: '',
    weatherUrl: '',

    weatherData: {} as WeatherDataType,

    temperature: '',
    feelsLike: '',
    humidity: '',
  },

  getters: {
    //
  },

  mutations: {
    setWeatherQueryParameters: (state: StateType, city: string): string => {
      state.city = city;

      state.weatherQueryParameters = `q=${city}&units=metric`;

      return state.weatherQueryParameters;
    },

    setUrlForWeather: (state: StateType): string => {
      state.weatherUrl = `${
        weatherApi +
        state.weatherQueryParameters +
        '&appid=' +
        API_KEY
      }`;

      return state.weatherUrl;
    },

    setIsWeatherDisplaying: (state: StateType, status: boolean): void => {
      state.isWeatherDisplaying = status;
    },

    setTemperature: (state: StateType): void => {
      state.temperature = `${Math.floor(state.weatherData.data.main.temp)}`;
    },

    setFeelLike: (state: StateType): void => {
      state.feelsLike = `${Math.floor(state.weatherData.data.main.feels_like)}`;
    },

    setHumidity: (state: StateType): void => {
      state.humidity = `${state.weatherData.data.main.humidity}`;
    },
  },

  actions: {
    async getWeatherByCity({ commit, state }): Promise<void> {
      commit('setUrlForWeather');

      await axios.get(state.weatherUrl)
        .then((result) => {
          state.weatherData = result;

          commit('setTemperature');
          commit('setFeelLike');
          commit('setHumidity');
          commit('setIsWeatherDisplaying', true);
        })
        .catch((error) => {
          catchError(error);

          commit('setIsWeatherDisplaying', false);
        });
    },
  },

  modules: {},
});
