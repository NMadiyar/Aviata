<template>
  <div
    class="flex flex-wrap sm:justify-center align-middle m-auto pt-[50px] font-openSans"
  >
    <div class="w-[100%] sm:w-auto">
      <FilterOptions
        @getRateFilter="getRateFilter"
        @getAirlineData="getAirlineData"
      ></FilterOptions>
    </div>
    <div class="w-[100%] sm:w-auto">
      <MainContent
        :rate-filter="rateFilter"
        :airline-filter="airlineFilter"
      ></MainContent>
    </div>
  </div>
</template>
<script>
import FilterOptions from "../components/FilterOptions/FilterOptions.vue";
import MainContent from "../components/MainContent/MainContent.vue";
export default {
  components: { MainContent, FilterOptions },
  data() {
    return {
      rateFilter: [],
      airlineFilter: [],
    };
  },
  methods: {
    getRateFilter(value) {
      this.rateFilter = value;
    },
    getAirlineData(value) {
      this.airlineFilter = value;
    },
  },
};
</script>
