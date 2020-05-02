// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAgkVuj5ZS8ZqB1D7O1gKDuWdRlxnn60k8',
    authDomain: 'my-cards-dice.firebaseapp.com',
    databaseURL: 'https://my-cards-dice.firebaseio.com',
    projectId: 'my-cards-dice',
    storageBucket: 'my-cards-dice.appspot.com',
    messagingSenderId: '814225685729',
    appId: '1:814225685729:web:0a0697956139d0800bcba0',
    measurementId: 'G-VSY9N3T6Y7'
  },
  links: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.cyrillefebvre.mycardsdice',
    myCardsDiceWeb: 'https://my-cards-dice.web.app/',
    linkedIn: 'https://www.linkedin.com/in/cyril-lefebvre-2a818294/',
    github: 'https://github.com/LirycMoaners'
  }
};
