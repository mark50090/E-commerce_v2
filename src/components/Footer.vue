<template>
  <footer class="bg-base-200 text-base-content px-10 py-8">
    <div class="flex flex-col sm:flex-row sm:justify-between flex-wrap gap-8">
      
      <!-- About -->
      <div class="flex flex-col">
        <h6 class="footer-title mb-2">About</h6>
        <p>Mueang Lampang, Thailand</p>
      </div>

      <!-- Help -->
      <div class="flex flex-col">
        <h6 class="footer-title mb-2">Help</h6>
        <p>Phone: (+66) 12 123 4567</p>
        <p>Email: Kmar@gmail.com</p>
      </div>

      <!-- Follow Us -->
      <div class="flex flex-col">
        <h6 class="footer-title mb-2">Follow Us</h6>
        <div class="flex gap-4">
          <a href="#" class="link link-hover flex items-center gap-2">
            <i class="fa-brands fa-facebook"></i> Facebook
          </a>
          <a href="#" class="link link-hover flex items-center gap-2">
            <i class="fa-brands fa-instagram"></i> Instagram
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="flex flex-col justify-end sm:items-end text-sm text-gray-500">
        <p>© 2021 - 2022 Created by Krittapas</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// ไม่มี logic ใน component นี้
</script>

<style scoped>
@reference "tailwindcss";
.footer-title {
  @apply font-semibold text-base;
}
</style>
