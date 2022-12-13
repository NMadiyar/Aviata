<template>
  <div>
    <div class="w-100 h-[152px] bg-[#f5f5f5] rounded-[4px] m-[12px]">
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
              src="public/img/icon-close-filter.svg"
              alt="reset"
              width="20"
              height="20"
            />
          </button>
        </div>

        <div class="align-middle text-center text-[14px]">
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
          >
            <input
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('public/img/checboxNormal.svg')] bg-cover appearance-none border-0 checked:bg-[url('public/img/checbox_active.svg')] hover:bg-[url('public/img/checbox_hover.svg')] ease-linear duration-200 focus:ring-0 focus:ring-offset-0 active:bg-[url('public/img/checbox_active.svg')]"
            />
            <p class="text-[#202123]">Только прямые</p>
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
          >
            <input
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('public/img/checboxNormal.svg')] bg-cover appearance-none border-0 hover:bg-[url('public/img/checbox_hover.svg')] ease-linear duration-200 checked:bg-[url('public/img/checbox_active.svg')] focus:ring-0 focus:ring-offset-0 active:bg-[url('public/img/checbox_active.svg')]"
            />
            <p class="text-[#202123]">Только с багажом</p>
          </div>
          <div
            class="flex text-center items-center h-[32px] cursor-pointer hover:bg-[#EBEBEB] pl-[12px]"
          >
            <input
              type="checkbox"
              class="mr-[12px] cursor-pointer bg-[url('public/img/checboxNormal.svg')] bg-cover appearance-none border-0 hover:bg-[url('public/img/checbox_hover.svg')] ease-linear duration-200 checked:bg-[url('public/img/checbox_active.svg')] focus:ring-0 focus:ring-offset-0 active:bg-[url('public/img/checbox_active.svg')]"
            />
            <p class="text-[#202123]">Только возвратные</p>
          </div>
        </div>
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
