<template>
  <div class="flex justify-center align-middle m-auto pt-[50px] font-openSans">
    <div class="flex-initial w-[240px]">
      <FilterOptions @getRateFilter="getRateFilter"></FilterOptions>
    </div>
    <div class="flex-initial w-[880px]">
      <MainContent :rate-filter="rateFilter"></MainContent>
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
    };
  },
  methods: {
    getRateFilter(value) {
      this.rateFilter = [...value];
    },
  },
};
</script>
