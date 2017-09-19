/**
 * Auth Configuration
 */
module.exports = {
  /**
   * User model.
   */
  'users': {
    'model': require('app/User/model')
  },

  strategies: {
    facebook: {
      clientID: process.env.FB_APP_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: process.env.FB_CALLBACK,
      profileFields: [
        'id', 'emails', 'link', 'locale', 'name'
      ]
    }
  }
}
