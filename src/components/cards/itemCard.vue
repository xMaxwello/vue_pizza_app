<script setup lang="ts">

</script>

<template>
  <div class="w-[351px] h-[327px] outline-none border-2 border-transparent bg-card rounded-[10px] pt-5 px-4 pb-4 flex flex-col justify-center items-center">
    <img class="mb-5 w-[100px]" src="/src/assets/food/Margherita.svg" alt="item"/>
    <div class="flex justify-between w-full items-center">
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M11.67 3.86998L9.9 2.09998L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.86998Z" fill="#001427"/>
          </g>
        </svg>
      </button>
    <strong class="text-mainColor text-base font-semibold text-center leading-[18px]">Test</strong>
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M12.33 20.13L14.1 21.9L24 12L14.1 2.10002L12.33 3.87002L20.46 12L12.33 20.13Z" fill="#001427"/>
          </g>
        </svg>
      </button>
    </div>
    <strong class="mt-3 text-price text-center leading-6">Test</strong>
    <div class="mt-3 flex space-x-4 justify-center items-center">
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M19 12.998H5V10.998H19V12.998Z" fill="#001427"/>
          </g>
        </svg>
      </button>
      <div class="w-[30px] h-[30px] flex justify-center items-center outline-none border-2 border-gray-400 rounded-[20px]">
        <strong class="text-mainColor text-sm font-semibold text-center leading-[21px]">1</strong>
      </div>
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99799H13V10.998H19V12.998Z" fill="#001427"/>
          </g>
        </svg>
      </button>
    </div>
    <div class="flex justify-center items-center mt-10 font-semibold text-xs leading-[18px] space-x-10">
      <button>Klein</button>
      <button>Mittel</button>
      <button>Groß</button>
    </div>
  </div>
</template>
