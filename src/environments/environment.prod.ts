import { firebaseConfig } from "./firebaseConfig";

export const environment = {
  production: true,
  firebase: {
    apiKey: firebaseConfig.apiKey,
    appId: firebaseConfig.appId,
    authDomain: firebaseConfig.authDomain,
    databaseURL: firebaseConfig.databaseURL,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    messagingSenderId: firebaseConfig.messagingSenderId,
    measurementId: firebaseConfig.messagingSenderId
  }
};
