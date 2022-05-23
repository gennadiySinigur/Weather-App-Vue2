<template>
  <weather-card />
</template>

<script lang="ts">
import Vue from 'vue';

import WeatherCard from '@components/WeatherCard.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    WeatherCard,
  },
});
</script>
