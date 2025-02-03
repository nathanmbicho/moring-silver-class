import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAESt7geoss6Cm3pLQMCcCALGg6o96WboE",
    authDomain: "moringa-react-portfolio.firebaseapp.com",
    projectId: "moringa-react-portfolio",
    storageBucket: "moringa-react-portfolio.firebasestorage.app",
    messagingSenderId: "285034521012",
    appId: "1:285034521012:web:f8b335113d9f56771bd2e1",
    measurementId: "G-DQVYT0MXWY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };