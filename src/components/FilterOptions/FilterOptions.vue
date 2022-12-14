<template>
  <div>
    <RateOptions @getFilterData="getFilterData"></RateOptions>
    <AirlineOptions></AirlineOptions>
    <button
      class="font-openSans text-[12px] ml-[12px] text-[#7284E4] underline decoration-dotted leading-[16px] font-normal hover:scale-105 ease-in duration-200"
    >
      Сбросить все фильтры
    </button>
  </div>
</template>

<script>
import RateOptions from "../FilterOptions/RateOptions.vue";
import AirlineOptions from "../FilterOptions/AirlinesOptions.vue";
export default {
  name: "FilterOptions",
  components: { AirlineOptions, RateOptions },
  methods: {
    getFilterData(value) {
      this.$emit("getRateFilter", value);
    },
  },
};
</script>
