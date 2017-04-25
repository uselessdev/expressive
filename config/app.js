/**
 * Application Settings
 */
module.exports = {
  /**
   * Process app name.
   *
   * @type {String}
   */
  name: process.env.APP_NAME || 'app',

  /**
   * Environment application.
   *
   * @type {String}
   */
  env: process.env.NODE_ENV || 'production',

  /**
   * Port applications.
   *
   * @type {Int}
   */
  port: process.env.PORT || 3000,

  /**
   * App Locale.
   *
   * @type {String}
   */
  locale: process.env.APP_LOCALE || 'en-us'
}
