import firebaseui from 'firebaseui';
import { firebase } from './firebase';
import { dummyFn } from './dummy';

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


const preConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>',
};

class FirebaseAuth {
  static start({
    dom = '',
    signInSuccessWithAuthResult = dummyFn,
    uiShown = dummyFn,
  }, config = {}) {
    this.dom = dom;
    this.config = {
      callbacks: {
        signInSuccessWithAuthResult,
        uiShown,
      },
      ...preConfig,
      ...config,
    };
    firebaseui.start(this.dom, this.config);
  }
}

export {
  FirebaseAuth,
};

