export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"), // ✅ ต้องเป็น array (ไม่ใช่ object)
  ],
  daisyui: {
    themes: ["light"], // หรือ ["light", "dark"] ถ้าอยากเปิดธีมสลับ
  },
};
