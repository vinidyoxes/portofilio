/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['mir-s3-cdn-cf.behance.net']
    },
    i18n: {
        locales: ['pt-BR','en-US'],
        defaultLocale: 'pt-BR',
          }
}

module.exports = nextConfig
