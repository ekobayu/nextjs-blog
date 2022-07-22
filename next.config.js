/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {

  if(phase === PHASE_DEVELOPMENT_SERVER){
    // dev mode
    return {
      webpack: (config) => {
        config.resolve.fallback = { fs: false };
    
        return config;
      },
      reactStrictMode: false,
      swcMinify: true,
      env: {
        apiUrl: 'https://nextjs-blog-b0987-default-rtdb.asia-southeast1.firebasedatabase.app/post.json'
      },
      externals: {
        'sharp': 'commonjs sharp'
      }
    }
  }
  return {
    // prod mode
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
    reactStrictMode: false,
    swcMinify: true,
    env: {
      apiUrl: 'https://nextjs-blog-b0987-default-rtdb.asia-southeast1.firebasedatabase.app/post.json'
    },
    externals: {
      'sharp': 'commonjs sharp'
    }
  }
}

module.exports = nextConfig
