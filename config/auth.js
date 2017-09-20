/**
 * Auth Configuration
 */
module.exports = {
  /**
   * User model.
   */
  users: {
    model: require('app/User/model')
  },

  strategies: {
    /**
     * Settings for facebook provider
     */
    facebook: {
      clientID: process.env.FB_APP_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: process.env.FB_CALLBACK,
      profileFields: [
        'id', 'emails', 'link', 'locale', 'name'
      ]
    },

    /**
     * Settings for github provider
     */
    github: {
      clientID: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_CLIENT_SECRET,
      callbackURL: process.env.GH_CALLBACK
    }
  }
}
