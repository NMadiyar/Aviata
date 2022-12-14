<template>
  <div class="flex flex-wrap justify-center align-middle m-auto">
    <div class="flex-initial w-[240px]">
      <FilterOptions></FilterOptions>
    </div>
    <div class="flex-initial w-[880px]">
      <MainContent></MainContent>
    </div>
  </div>
</template>
<script>
import FilterOptions from "../components/FilterOptions/FilterOptions.vue";
import MainContent from "../components/MainContent/MainContent.vue";
export default {
  components: { MainContent, FilterOptions },
};
</script>
