const withPWA = require('next-pwa');
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
      dest: "public",
      register: true,
      skipWaiting: true
  },
  images: {
    domains: ['i.ytimg.com','yt3.ggpht.com']
  }
})
