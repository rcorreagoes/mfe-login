const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'shell',

  remotes: {
    login: 'http://localhost:4205/remoteEntry.json',
    // Proxy-served dashboard remote (goes through dev proxy to avoid CORS)
    dashboard: 'http://localhost:4300/remote-dashboard/remoteEntry.json',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
  ],

  features: {
    ignoreUnusedDeps: true
  }

});
