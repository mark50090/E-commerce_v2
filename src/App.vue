<script setup>
import { RouterView } from 'vue-router'
import TooBar from './components/TooBar.vue'
import HeroSlider from './components/HeroSlider.vue'
import CategorySection from './components/CategorySection.vue'
import Collection from './components/Collection.vue'
import Footerss from './components/Footer.vue'
</script>

<template >
  <!-- <div class="bg-white min-h-screen"> -->
    <TooBar />
    <HeroSlider />
    <CategorySection />
    <Collection />
    <RouterView />
    <Footerss />
  <!-- </div> -->
</template>
