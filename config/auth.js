/**
 * Auth Configuration
 */
const auth = {
  /**
   * User model.
   */
  'users': {
    'model': require('app/User/model')
  },

  'strategies': {
    'github': {
      clientID: process.env.GH_CLIENT_ID || '',
      clientSecret: process.env.GH_CLIENT_SECRET || '',
      callbackURL: process.env.GH_CALLBACK || 'https://your-app.com/auth/callback'
    }
  }
}

module.exports = {
  users: auth.users,
  strategy: auth.strategies[process.env.AUTH_STRATEGY]
}
