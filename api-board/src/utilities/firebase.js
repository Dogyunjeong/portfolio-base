import fb from 'firebase';
import { firebaseConfig } from '../config/firebase';

const firebase = fb.initializeApp(firebaseConfig);

export default firebase;
export { firebase };
