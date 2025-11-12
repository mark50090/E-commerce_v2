<template>
  <div class="relative w-full  mx-auto overflow-hidden">
    <!-- Slide images -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="min-w-full flex justify-center items-center bg-gray-100"
      >
        <img
          :src="image"
          alt="banner"
          class="w-full object-cover h-[500px] sm:h-[400px] lg:h-[600px]"
        />
      </div>
    </div>

    <!-- Left arrow -->
    <button
      @click="prevSlide"
      class="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <!-- Right arrow -->
    <button
      @click="nextSlide"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
    </button>

    <!-- Dots -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all',
          currentIndex === index ? 'bg-gray-800 scale-110' : 'bg-gray-400'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const images = ref([
  "/images/pexels-photo-9775894.jpeg",
  "images/pexels-photo-9775885.jpeg",
  "/images/pexels-photo-9775860.jpeg",
])

const currentIndex = ref(0)
let interval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000) // Auto slide ทุก 5 วิ
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* ป้องกันภาพกระตุกตอน transition */
img {
  transition: opacity 0.3s ease-in-out;
}
</style>
