/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'map-highlight': '#c6d3df',    // Light bluish-gray for map highlights, road details, and subtle UI backgrounds
        'map-accent': '#749217',       // Olive green for map lines, labels, and neutral accents
        'brand-lime': '#c0ef1c',       // Bright lime green for main accent color, safety button, call button, and primary actions
        'neutral-light': '#999190',    // Neutral light gray for secondary UI elements and text areas
        'neutral-dark': '#666361',     // Darker neutral gray for muted text and less prominent UI elements
      }
    },
  },
  plugins: [],
};
