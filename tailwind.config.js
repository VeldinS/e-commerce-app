/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-orange': '#FF9900',
        'teal':'#0099CC',
        'creamy-yellow':'#FFFDD0',
        'deep-blue':'#004C99',
        'lime-green':'#99CC00',
        'olive-green':'#808000',
        'terracotta':'#E2725B',
        'beige':'#F5F5DC'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        audiowide: ['var(--font-audiowide)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
