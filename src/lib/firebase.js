import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { seedDatabase } from '../seed';

// here i want to import seed file
const config = {
	apiKey: 'AIzaSyBKRkU69LQkWF29_qrGATKIrJEmLCDuHYY',
	authDomain: 'instagram-clone-cde75.firebaseapp.com',
	projectId: 'instagram-clone-cde75',
	storageBucket: 'instagram-clone-cde75.appspot.com',
	messagingSenderId: '182948873784',
	appId: '1:182948873784:web:6c59cc79f8e2bb455748cd',
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };
