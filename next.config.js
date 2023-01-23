const path = require("node:path")


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {

    domains: [

      "images.kabum.com.br"

    ],

  },

  webpack: (config, options) => {

    config.resolve.alias = {

      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components"),
      "@assets/*": path.resolve(__dirname, "src/assets/*"),
      

    }
    
    return config;

  }
}

module.exports = nextConfig
