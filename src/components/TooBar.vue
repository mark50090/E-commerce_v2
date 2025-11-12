<template>
  <header class="bg-white shadow-sm sticky top-0 z-50  ">
    <div
      class="navbar bg-base-100 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <!-- Left Section -->
      <div class="flex-1 flex items-center">
        <!-- Hamburger -->
        <button
          @click="toggleSidebar"
          class="btn btn-ghost btn-square lg:hidden mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <p class="text-2xl font-normal">Kmar</p>
      </div>

      <!-- Desktop Menu -->
      <div
        class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-10"
      >
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/product" class="nav-link">Shop</RouterLink>
        <a href="#" class="nav-link">Collection</a>
        <a href="#" class="nav-link">Contact</a>
      </div>

      <!-- Right Section -->
      <div class="flex-none space-x-2 pl-4">
        <!-- Search -->
        <button @click="toggleSearch" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </button>

        <!-- User -->
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
            />
          </svg>
        </button>

        <!-- Cart -->
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h12.4M7 13H5.4M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- ✅ Search Bar (Apple-style) -->
    <transition name="slide-down">
      <div
        v-if="isSearchOpen"
        class="fixed inset-0 z-50 flex flex-col items-center justify-start backdrop-blur-md bg-white/60"
      >
        <div class="w-full max-w-2xl mt-10 relative px-4">
          <input
            type="text"
            placeholder="Search products..."
            class="input w-full bg-white/80 backdrop-blur-lg rounded-full pl-12 pr-10 py-3 border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <!-- Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute left-8 top-1/2 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
          <!-- Close -->
          <button
            @click="toggleSearch"
            class="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      </div>
    </transition>

    <!-- Sidebar Overlay -->
    <transition name="fade">
      <div
        v-if="isSidebarOpen"
        class="fixed inset-0 bg-black/40 z-40"
        @click="toggleSidebar"
      ></div>
    </transition>

    <!-- Sidebar Drawer -->
    <transition name="slide-left">
      <aside
        v-if="isSidebarOpen"
        class="fixed left-0 top-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col space-y-4"
      >
        <button
          @click="toggleSidebar"
          class="btn btn-sm btn-circle btn-ghost absolute top-3 right-3"
        >
          ✕
        </button>

        <ul class="menu mt-8 text-gray-700">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Collection</a></li>
          <!-- <li><a href="#">About us</a></li> -->
          <li><a href="#">Contact</a></li>
        </ul>
      </aside>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isSidebarOpen = ref(false);
const isSearchOpen = ref(false);

const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value);
const toggleSearch = () => (isSearchOpen.value = !isSearchOpen.value);
</script>

<style scoped>
@reference "tailwindcss";
.nav-link {
  @apply text-base font-light text-gray-700 border-b-2 border-transparent hover:border-gray-700 transition-all;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
