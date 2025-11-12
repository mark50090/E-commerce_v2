<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8 relative">
      <div class="flex items-center space-x-4">
        <button class="flex items-center space-x-1 text-gray-700 hover:text-black transition">
          <i class="fa-solid fa-filter"></i>
          <span>Filter</span>
        </button>
        <button class="flex items-center space-x-1 text-gray-700 hover:text-black transition">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </button>
      </div>

      <h2 class="text-3xl font-bold tracking-wide absolute left-1/2 -translate-x-1/2">
        เสื้อยืดโอเวอร์ไซต์ - OVERSIZE UNISEX.
      </h2>
    </div>

    <!-- Product Flex -->
    <div
      class="flex flex-wrap justify-center gap-8 text-center"
    >
      <div
        v-for="(product, index) in products"
        :key="index"
        class="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-64 h-64 object-cover rounded-md shadow-sm hover:scale-105 transition"
        />
        <p class="mt-4 font-medium">{{ product.name }}</p>
        <p class="text-gray-500">{{ product.price }}</p>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="flex justify-center mt-10">
      <button
        class="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition"
      >
        สินค้าทั้งหมด
      </button>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    name: "เสื้อยืดคอกลม - สีดำ",
    price: "100.00 $",
    image:
      "/images/pexels-photo-9558909.jpeg",
  },
  {
    name: "เสื้อยืดคอกลม - สีขาว",
    price: "100.00 $",
    image:
      "/images/pexels-photo-9558724.jpeg",
  },
  {
    name: "เสื้อยืดคอกลม - สีชมพู",
    price: "100.00 $",
    image:
      "/images/pexels-photo-9558894.jpeg",
  },
  {
    name: "เสื้อยืดคอกลม - สีน้ำตาล",
    price: "100.00 $",
    image:
      "/images/pexels-photo-9558573.jpeg",
  },
  {
    name: "กางเกงยีนส์",
    price: "100.00 $",
    image:
      "/images/pexels-photo-7764613.jpeg",
  },
  {
    name: "กางเกงยีนส์",
    price: "100.00 $",
    image:
      "/images/pexels-photo-7764611.jpeg",
  },
  {
    name: "กางเกงยีนส์",
    price: "100.00 $",
    image:
      "/images/pexels-photo-6764142.jpeg",
  },
  {
    name: "กางเกงยีนส์",
    price: "100.00 $",
    image:
      "images/pexels-photo-6764143.jpeg",
  },
];
</script>
