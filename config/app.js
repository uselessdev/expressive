/**
 * Application Settings
 */
module.exports = {
  /**
   * Process app name.
   *
   * @type {String}
   */
  name: process.env.APP_NAME || 'Expressive - Boilerplate',

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
  locale: process.env.APP_LOCALE || 'en-us',

  /**
   * Public folder to your static files
   */
  public: 'public',

  /**
   * Views settings
   */
  views: {
    engine: 'pug',
    folders: ['app', 'resources']
  }
}
