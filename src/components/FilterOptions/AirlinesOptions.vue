<template>
  <div>
    <div class="w-100 h-[320px] bg-[#f5f5f5] rounded-[4px] m-[12px]">
      <div class="p-[12px]">
        <div class="flex justify-between align-middle font-openSans mb-[12px]">
          <h2 class="font-bold leading-[20px] text-[17px] text-[#202123]">
            Авиакомпании
          </h2>
          <button
            title="Сбросить выбор"
            @mouseover="onHover"
            @mouseleave="afterHover"
          >
            <img
              ref="filterIcon"
              src="public/img/icon-close-filter.svg"
              alt="reset"
              width="20"
              height="20"
            />
          </button>
        </div>

        <div class="align-middle text-center text-[14px]">
          <div class="flex text-center items-center h-[32px]">
            <input type="checkbox" class="mr-[12px]" />
            <p class="text-[#202123]">Все</p>
          </div>
          <div class="flex text-center items-center h-[32px]">
            <input type="checkbox" class="mr-[12px]" />
            <p class="text-[#202123]">Air Astana</p>
          </div>
          <div class="flex text-center items-center h-[32px]">
            <input type="checkbox" class="mr-[12px]" />
            <p class="text-[#202123]">Bek Air</p>
          </div>
          <div class="flex text-center items-center h-[32px]">
            <input type="checkbox" class="mr-[12px]" />
            <p class="text-[#202123]">Fly Arystan</p>
          </div>
          <div class="flex text-center items-center h-[32px]">
            <input type="checkbox" class="mr-[12px]" />
            <p class="text-[#202123]">Scat Airlines</p>
          </div>
          <div class="flex text-center items-center h-[32px]">
            <input type="checkbox" class="mr-[12px]" />
            <p class="text-[#202123]">Lufthansa</p>
          </div>
          <div class="flex text-center items-center h-[32px]">
            <input type="checkbox" class="mr-[12px]" />
            <p class="text-[#202123]">Turkish Airlines</p>
          </div>
          <div class="flex text-center items-center h-[32px]">
            <input type="checkbox" class="mr-[12px]" />
            <p class="text-[#202123]">China Southern Air</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AirlineOptions",
  methods: {
    onHover() {
      this.$refs.filterIcon.setAttribute(
        "src",
        "public/img/icon-close-filter-hover.svg"
      );
    },
    afterHover() {
      this.$refs.filterIcon.setAttribute(
        "src",
        "public/img/icon-close-filter.svg"
      );
    },
  },
};
</script>
