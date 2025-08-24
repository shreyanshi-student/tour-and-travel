/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      
      colors: {
        primary: {
          light: '#C7D2FE',  // soft blue
          DEFAULT: '#6366F1', // indigo-500
          dark: '#4F46E5',    // indigo-600
        },
        accent: {
          light: '#FCD34D',  // yellow-300
          DEFAULT: '#FBBF24', // yellow-400
          dark: '#F59E0B',    // yellow-500
        },
        muted: {
          light: '#F3F4F6',   // gray-100
          DEFAULT: '#9CA3AF', // gray-400
          dark: '#4B5563',    // gray-600
        },
        romantic: {
          light: '#FDE2E4',
          DEFAULT: '#FECACA',
          dark: '#FCA5A5',
        }
      },

      // 🎞️ Animations
      animation: {
        'slide-down': 'slideDown 0.3s ease-out',
         blob: "blob 8s infinite",
    "blob-fast": "blob 5s infinite",
    glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
      "0%": { transform: "translate(0px, 0px) scale(1)" },
      "33%": { transform: "translate(30px, -20px) scale(1.1)" },
      "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
      "100%": { transform: "translate(0px, 0px) scale(1)" },
    },
    glow: {
      "0%, 100%": { boxShadow: "0 0 0px rgba(255,255,255,0.2)" },
      "50%": { boxShadow: "0 0 25px rgba(255,255,255,0.4)" },
    },
      },
    },
  },
  plugins: [],
};
