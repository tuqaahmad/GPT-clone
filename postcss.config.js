module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NEXT_PUBLIC_ENV === 'Production' ? { cssnano: {} } : {}),
  },
}
