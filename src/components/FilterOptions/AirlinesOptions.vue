<template>
  <div>
    <div class="min-w-[240px] h-[320px] bg-[#f5f5f5] rounded-[4px] m-[12px]">
      <div>
        <div class="flex justify-between align-middle font-openSans p-[12px]">
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
              src="/img/icon-close-filter.svg"
              alt="reset"
              width="20"
              height="20"
            />
          </button>
        </div>

        <form class="align-middle text-center text-[14px]">
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.All)"
            @mouseleave="leaveInput(this.$refs.All)"
          >
            <input
              id="All"
              ref="All"
              v-model="airlineData"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('/img/checbox_active.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="All"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Все</label
            >
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.Astana)"
            @mouseleave="leaveInput(this.$refs.Astana)"
          >
            <input
              id="Astana"
              ref="Astana"
              v-model="airlineData"
              value="KC"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('/img/checbox_active.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="Astana"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Air Astana</label
            >
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.uzbek)"
            @mouseleave="leaveInput(this.$refs.uzbek)"
          >
            <input
              id="uzbek"
              ref="uzbek"
              v-model="airlineData"
              value="HY"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('/img/checbox_active.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="uzbek"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Uzbekistan Airways</label
            >
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.Emirates)"
            @mouseleave="leaveInput(this.$refs.Emirates)"
          >
            <input
              id="Emirates"
              ref="Emirates"
              v-model="airlineData"
              value="EK"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('/img/checbox_active.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="Emirates"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Emirates</label
            >
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.Scat)"
            @mouseleave="leaveInput(this.$refs.Scat)"
          >
            <input
              id="Scat"
              ref="Scat"
              v-model="airlineData"
              value="DV"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('/img/checbox_active.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="Scat"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Scat Airlines</label
            >
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.Lufthansa)"
            @mouseleave="leaveInput(this.$refs.Lufthansa)"
          >
            <input
              id="Lufthansa"
              ref="Lufthansa"
              v-model="airlineData"
              value="LH"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('/img/checbox_active.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="Lufthansa"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Lufthansa</label
            >
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.Turkish)"
            @mouseleave="leaveInput(this.$refs.Turkish)"
          >
            <input
              id="Turkish"
              ref="Turkish"
              v-model="airlineData"
              value="TK"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('/img/checbox_active.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="Turkish"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Turkish Airlines</label
            >
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.China)"
            @mouseleave="leaveInput(this.$refs.China)"
          >
            <input
              id="China"
              ref="China"
              v-model="airlineData"
              value="CZ"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('/img/checbox_active.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="China"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >China Southern Air</label
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AirlineOptions",
  data() {
    return {
      airlineData: [],
    };
  },
  methods: {
    onHover() {
      this.$refs.filterIcon.setAttribute(
        "src",
        "/img/icon-close-filter-hover.svg"
      );
    },
    afterHover() {
      this.$refs.filterIcon.setAttribute("src", "/img/icon-close-filter.svg");
    },
    hoverInput(ref) {
      ref.classList.add("bg-[url('/img/checbox_hover.svg')]");
    },
    leaveInput(ref) {
      ref.classList.remove("bg-[url('/img/checbox_hover.svg')]");
    },
  },
};
</script>
