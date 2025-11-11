<script setup>
import { RouterView } from 'vue-router'
import TooBar from './components/TooBar.vue'
import HeroSlider from './components/HeroSlider.vue'
import CategorySection from './components/CategorySection.vue'
</script>

<template >
  <!-- <div class="bg-white min-h-screen"> -->
    <TooBar />
    <HeroSlider />
    <CategorySection />
    <RouterView />
  <!-- </div> -->
</template>
