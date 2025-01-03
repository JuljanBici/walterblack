/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
            '0%': {
                transform: 'translateX(0)'
            },
            '100%': {
                transform: 'translateX(-100%)'
            },
        },
    },
    // Add custom animations
    animation: {
        'marquee': 'marquee 20s linear infinite',
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
