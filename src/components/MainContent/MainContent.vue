<template>
  <div
    class="bg-white shadow-[0px 2px 4px rgba(0, 0, 0, 0.15)] h-[168px] font-openSans rounded-[4px]"
  >
    <div
      class="flex h-[100%] justify-between pl-10 align-middle text-center relative bg-white mb-[12px] rounded-[4px]"
      v-for="flight in resultsArray.flights"
      :key="flight"
    >
      <div class="flex items-center">
        <div class="mt-[53px]">
          <div class="flex">
            <img
              src="/img/logo_mini_ks.svg"
              height="20"
              width="20"
              alt="logo"
            />
            <p
              class="font-openSans text-[14px] font-semibold leading-[19px] text-[#202123]"
            >
              Air Astana
            </p>
          </div>
          <div class="mt-[59px]">
            <button
              class="font-openSans text-[12px] ml-[12px] text-[#7284E4] underline decoration-dotted leading-[16px] font-normal hover:scale-105 ease-in duration-100 text-center"
            >
              Детали перелета
            </button>
          </div>
        </div>
      </div>

      <div class="flex items-center">
        <div class="mt-[40px]">
          <p class="font-openSans text-[12px] leading-[16px] text-[#202123]">
            25 ноя, вс
          </p>
          <p class="font-openSans text-[24px] leading-[33px] text-[#202123]">
            23:25
          </p>
          <button
            class="font-openSans mt-[46px] text-[12px] ml-[12px] text-[#7284E4] underline decoration-dotted leading-[16px] font-normal hover:scale-105 ease-in duration-100 text-center"
          >
            Условия тарифа
          </button>
        </div>
      </div>

      <div class="flex items-center">
        <div class="mt-[40px]">
          <div class="flex justify-between">
            <p class="font-openSans text-[12px] leading-[12px] text-[#B9B9B9]">
              ALA
            </p>
            <p class="font-openSans text-[12px] leading-[18px] text-[#202123]">
              4 ч 20 м
            </p>
            <p class="font-openSans text-[12px] leading-[12px] text-[#B9B9B9]">
              ALA
            </p>
          </div>
          <img src="/img/0--0--0.svg" alt="line" height="5" width="173" />
          <p class="font-openSans text-[12px] leading-[16px] text-[#FF9900]">
            через Шымкент, 1 ч 50 м
          </p>
          <div class="flex mt-[54px] justify-center">
            <img
              src="/img/icon-non-refundeble.svg"
              alt="non-refundable"
              height="20"
              width="20"
              class="mr-1.5"
            />
            <button
              class="text-[12px] leading-[14px] text-[#707276] hover:drop-shadow-2xl duration-100"
            >
              невозвратный
            </button>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="mt-[46px]">
          <p class="font-openSans text-[12px] leading-[16px] text-[#202123]">
            26 ноя, вс
          </p>
          <p class="font-openSans text-[24px] leading-[33px] text-[#202123]">
            03:45
          </p>
        </div>
      </div>

      <div
        class="bg-[#f5f5f5] w-[240px] items-center align-middle text-center flex justify-center"
      >
        <div class="flex items-center justify-center">
          <div>
            <p class="text-[24px] leading-[28px] text-[#202123] mb-[13px]">
              {{ flight.price }} ₸
            </p>
            <button
              class="font-bold font-openSans text-white bg-[#55BB06] leading-[25px] hover:bg-[#7284E4] ease-in duration-100 hover:drop-shadow-lg font-[18px] rounded-[4px] w-[200px] h-[40px] align-middle items-center text-center mb-[8px]"
            >
              Выбрать
            </button>
            <p
              class="font-openSans text-[12px] leading-[16px] text-[#707276] mb-[15px]"
            >
              Цена за всех пассажиров
            </p>
            <div class="flex gap-[6px] items-center align-middle">
              <p
                class="font-openSans text-[12px] leading-[16px] text-[#202123]"
              >
                Нет багажа
              </p>
              <button
                class="font-openSans w-[128px] h-[24px] rounded-[2px] bg-[#EAF0FA] font-semibold text-[12px] leading-[16px] text-[#5763B3] ease-in duration-100 hover:drop-shadow-lg"
              >
                + Добавить багаж
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useResultStore } from "/src/store/results.js";

export default {
  name: "MainContent",
  computed: {
    ...mapState(useResultStore, {
      resultsArray: (store) => store.resultsArray,
    }),
    getInfo() {
      return this.resultsArray.airlines;
    },
  },
};
</script>
