const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'login',

  exposes: {
    './ChangePassword': './projects/login/src/app/views/change-password/change-password.ts',
    './ForgotPassword': './projects/login/src/app/views/forgot-password/forgot-password.ts',
    './Login': './projects/login/src/app/views/login/login.ts',
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
