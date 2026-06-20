/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFF8F3',
          primary: '#FF7A59',
          secondary: '#FFB86B',
          peach: '#FFE8D6',
          coral: '#FFB4A2',
          text: '#1F2937',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(255, 122, 89, 0.1)',
        'premium': '0 20px 40px -15px rgba(31, 41, 55, 0.06)',
        'hover-card': '0 30px 60px -15px rgba(255, 122, 89, 0.15)',
      },
      borderRadius: {
        '3xl-custom': '32px',
        '2xl-custom': '24px',
      }
    },
  },
  plugins: [],
}
