// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyDTX77tJvtKYCqOP3pr_Itb36R_Kl_1sVs',
    authDomain: 'screenshots-be64e.firebaseapp.com',
    databaseURL: 'https://screenshots-be64e.firebaseio.com',
    projectId: 'screenshots-be64e',
    storageBucket: 'screenshots-be64e.appspot.com',
    messagingSenderId: '1029455357682'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
