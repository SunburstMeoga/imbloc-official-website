/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      const value = ((index + 1) / 10).toFixed(1);
      const [integerPart, decimalPart] = value.split('.');
      const key = `${integerPart}-${decimalPart}`;
      const formattedValue = `${integerPart}.${decimalPart}`;
      map[key] = `${formattedValue}rem`;
      return map;
    }, {}),
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "language-gradient-radial": "linear-gradient(278deg, rgba(0,113,183,1) 0%, rgba(190,2,55,1) 100%);",
        "phone-module-banner": "url('/images/phone/phone-module-banner.png')",
        "core-items": "linear-gradient(225deg, rgba(190,2,55,1) 0%, rgba(0,113,183,1) 100%);",
        "title-gradient-radial": "linear-gradient(90deg, rgba(190,2,55,1) 0%, rgba(0,113,183,1) 100%);",
        "future-item": "url('/images/phone/future-item.png')",
        "footer-gradient-radial": "linear-gradient(180deg, rgba(61,62,101,1) 0%, rgba(34,25,72,1) 100%)"
      },
      colors: {
        "module-white": "#F4F0FD",
        "module-word": "#32236F",
        "core-word": "#3E3F66",
        "white072": "#ffffffb8",
        "white078": "#ffffffc7",
        "primary078": "#3E3F66C7",
        "reason-module": "#F5F9FF",
        "reason-right": "#0071B7",
        "guide-border": "#DFDAF3",
        "guide-method": "#CAC4E0"
      },
      fontSize: ({ theme }) => ({
        ...theme("spacing"),
      }),
      lineHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
