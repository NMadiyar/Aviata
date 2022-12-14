<template>
  <div>
    <div class="w-100 h-[152px] bg-[#f5f5f5] rounded-[4px] ml-[12px] mr-[12px]">
      <div>
        <div class="flex justify-between align-middle font-openSans p-[12px]">
          <h2 class="font-bold leading-[20px] text-[17px] text-[#202123]">
            Опции тарифа
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
            @mouseover="hoverInput(this.$refs.checkStraight)"
            @mouseleave="leaveInput(this.$refs.checkStraight)"
          >
            <input
              id="checkStraight"
              ref="checkStraight"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('/img/checbox_active.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="checkStraight"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Только прямые</label
            >
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.checkLuggage)"
            @mouseleave="leaveInput(this.$refs.checkLuggage)"
          >
            <input
              id="checkLuggage"
              ref="checkLuggage"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 ease-linear duration-200 checked:bg-[url('/img/checbox_active.svg')] focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="checkLuggage"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Только с багажом</label
            >
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
            @mouseover="hoverInput(this.$refs.checkReturnal)"
            @mouseleave="leaveInput(this.$refs.checkReturnal)"
          >
            <input
              id="checkReturnal"
              ref="checkReturnal"
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('/img/checboxNormal.svg')] bg-cover appearance-none border-0 ease-linear duration-200 checked:bg-[url('/img/checbox_active.svg')] focus:ring-0 focus:ring-offset-0 active:bg-[url('/img/checbox_active.svg')]"
            />
            <label
              for="checkReturnal"
              class="text-[#202123] cursor-pointer w-[100%] text-left"
              >Только возвратные</label
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RateOptions",
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
