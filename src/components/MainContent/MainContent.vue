<template>
  <div v-for="flight in getRateFilterValue" :key="flight">
    <div v-for="(itinerar, index) in flight.itineraries" :key="itinerar">
      <!--      ZDES-->
      <div class="m-2 bg-white h-[408px] min-w-[240px] rounded-[4px] sm:hidden">
        <div
          class="flex justify-between p-[12px] mb-[25px] align-middle items-center"
        >
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
              {{ itinerar[index].carrier_name }}
            </p>
          </div>
          <div
            class="font-openSans text-[12px] leading-[16px] text-[#202123]"
            v-for="luggage in flight.services"
            :key="luggage"
          >
            <div v-if="luggage.code === '0PC'">Нет багажа</div>
            <div v-if="luggage.code === '1PC'">20кг</div>
            <div v-if="luggage.code === '20KG'">20кг</div>
          </div>
        </div>

        <div
          class="flex justify-between p-[12px] mb-2 align-middle items-center"
        >
          <div>
            <p class="font-openSans text-[12px] leading-[16px] text-[#202123]">
              {{ itinerar[index].segments[index].dep_time.slice(0, 11) }}
            </p>
            <p class="font-openSans text-[24px] leading-[33px] text-[#202123]">
              {{ itinerar[index].segments[index].dep_time.slice(11) }}
            </p>
          </div>
          <div>
            <p class="font-openSans text-[12px] leading-[16px] text-[#202123]">
              {{ itinerar[index].segments[index].arr_time.slice(0, 11) }}
            </p>
            <p class="font-openSans text-[24px] leading-[33px] text-[#202123]">
              {{ itinerar[index].segments[index].arr_time.slice(11) }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <div>
            <div class="flex justify-between items-center mb-[20px]">
              <p
                class="font-openSans text-[12px] leading-[12px] text-[#B9B9B9]"
              >
                {{ itinerar[index].segments[index].origin_code }}
              </p>
              <p
                class="font-openSans text-[12px] leading-[18px] text-[#202123]"
              >
                {{ getTimeTravel(flight.best_time) }}
              </p>
              <p
                class="font-openSans text-[12px] leading-[12px] text-[#B9B9B9]"
              >
                {{ itinerar[index].segments[index].dest_code }}
              </p>
            </div>
            <img src="/img/0--0--0.svg" alt="line" height="5" width="173" />
            <div
              v-if="itinerar[index].stops > 0"
              class="font-openSans text-[12px] leading-[16px] text-[#FF9900] mt-[20px] items-center flex justify-center"
            >
              через {{ itinerar[index].segments[index].airport_dest }}, 1 ч 50 м
            </div>
          </div>
        </div>

        <div class="mt-10 flex justify-center items-center">
          <p class="text-[24px] leading-[28px] text-[#202123]">
            {{ flight.price }} ₸
          </p>
        </div>

        <div class="mt-2 flex justify-center items-center">
          <button
            class="font-bold font-openSans text-white bg-[#55BB06] leading-[25px] hover:bg-[#7284E4] ease-in duration-100 hover:drop-shadow-lg font-[18px] rounded-[4px] w-[200px] h-[40px] align-middle items-center text-center mb-[8px]"
          >
            Выбрать
          </button>
        </div>

        <div class="mt-3 flex justify-center items-center">
          <p
            class="font-openSans text-[12px] leading-[16px] text-[#707276] mb-[15px]"
          >
            Цена за всех пассажиров
          </p>
        </div>
      </div>

      <div
        class="bg-white shadow-[0px 2px 4px rgba(0, 0, 0, 0.15)] h-[168px] font-openSans rounded-[4px] mb-[12px] sm:block hidden"
      >
        <div
          class="flex h-[100%] justify-between pl-10 align-middle text-center relative bg-white rounded-[4px]"
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
                  {{ itinerar[index].carrier_name }}
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
              <p
                class="font-openSans text-[12px] leading-[16px] text-[#202123]"
              >
                {{ itinerar[index].segments[index].dep_time.slice(0, 11) }}
              </p>
              <p
                class="font-openSans text-[24px] leading-[33px] text-[#202123]"
              >
                {{ itinerar[index].segments[index].dep_time.slice(11) }}
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
                <p
                  class="font-openSans text-[12px] leading-[12px] text-[#B9B9B9]"
                >
                  {{ itinerar[index].segments[index].origin_code }}
                </p>
                <p
                  class="font-openSans text-[12px] leading-[18px] text-[#202123]"
                >
                  {{ getTimeTravel(flight.best_time) }}
                </p>
                <p
                  class="font-openSans text-[12px] leading-[12px] text-[#B9B9B9]"
                >
                  {{ itinerar[index].segments[index].dest_code }}
                </p>
              </div>
              <img src="/img/0--0--0.svg" alt="line" height="5" width="173" />
              <div
                v-if="itinerar[index].stops > 0"
                class="font-openSans text-[12px] leading-[16px] text-[#FF9900]"
              >
                через {{ itinerar[index].segments[index].airport_dest }}, 1 ч 50
                м
              </div>
              <div class="flex mt-[54px] justify-center">
                <img
                  v-if="flight.refundable === false"
                  src="/img/icon-non-refundeble.svg"
                  alt="non-refundable"
                  height="20"
                  width="20"
                  class="mr-1.5"
                />
                <button
                  v-if="flight.refundable === false"
                  class="text-[12px] leading-[14px] text-[#707276] hover:drop-shadow-2xl duration-100"
                >
                  невозвратный
                </button>
                <button
                  v-if="flight.refundable === true"
                  class="text-[12px] leading-[14px] text-[#A4BE7B] hover:drop-shadow-2xl duration-100"
                >
                  возвратный
                </button>
              </div>
            </div>
          </div>

          <div class="flex mr-20">
            <div class="mt-[46px]">
              <p
                class="font-openSans text-[12px] leading-[16px] text-[#202123]"
              >
                {{ itinerar[index].segments[index].arr_time.slice(0, 11) }}
              </p>
              <p
                class="font-openSans text-[24px] leading-[33px] text-[#202123]"
              >
                {{ itinerar[index].segments[index].arr_time.slice(11) }}
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
                <div
                  class="flex gap-[6px] items-center align-middle justify-between"
                >
                  <div
                    class="font-openSans text-[12px] leading-[16px] text-[#202123]"
                    v-for="luggage in flight.services"
                    :key="luggage"
                  >
                    <div v-if="luggage.code === '0PC'">Нет багажа</div>
                    <div v-if="luggage.code === '1PC'">20кг</div>
                    <div v-if="luggage.code === '20KG'">20кг</div>
                  </div>
                  <button
                    class="font-openSans w-[128px] h-[24px] rounded-[2px] bg-[#EAF0FA] font-semibold text-[12px] leading-[16px] text-[#5763B3] ease-in duration-100 hover:drop-shadow-lg"
                  >
                    + Добавить багаж {{ getLuggageFilter }}
                  </button>
                </div>
              </div>
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
  props: {
    rateFilter: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filtered: [],
    };
  },
  computed: {
    ...mapState(useResultStore, {
      resultsArray: (store) => store.resultsArray,
    }),
    getRateFilterValue() {
      let res = "";
      this.rateFilter.forEach((el) => (res = el));
      let resC = this.resultsArray.flights.filter((el) => {
        return el.refundable === true;
      });
      return resC;
    },
    getLuggageFilter() {
      // let res = this.resultsArray.flights.map((el) => {
      //   return el.services;
      // });
      // let another = Object.values(res);
      // another.forEach((el) => {
      //   Object.values(
      //     el.forEach((i) => {
      //       console.log(i);
      //     })
      //   );
      // });
      // return res;
    },
  },
  methods: {
    getTimeTravel(value) {
      let h = Math.floor(value / 3600);
      let m = Math.floor((value % 3600) / 60);

      let hDisplay = h + "ч ";
      let mDisplay = m + "м ";
      return hDisplay + mDisplay;
    },
  },
};
</script>
