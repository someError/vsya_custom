const withVideos = require('next-videos');

module.exports = withVideos();

module.exports = {
  images: {
    domains: ['localhost', 'chart.googleapis.com'],
  },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    localeDetection: false
  },

}