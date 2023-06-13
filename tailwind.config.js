/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        custom: {
          "whatsapp-1": "#00a884",
          "whatsapp-2": "#008069",
          "owner-message": "#d9fdd3",
          "chat-bg": "#efeae2",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

