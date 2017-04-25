/**
 * Session config
 */
module.exports = {
  /**
   * Secret for season.
   *
   * @type {String}
   */
  secret: process.env.APP_SECRET || 'secret',

  /**
   * Session name id.
   *
   * @type {String}
   */
  name: process.env.SESSION_NAME || 'app.sid'
}
