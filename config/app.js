/**
 * Application settings
 */
module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'production',
  locale: process.env.APP_LOCALE || 'en_us'
}
