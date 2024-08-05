import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDo07dBIjzuaaJMGSXjJ3R4Jg-cuUrpZaA",
  authDomain: "baki-zeta.firebaseapp.com",
  projectId: "baki-zeta",
  storageBucket: "baki-zeta.appspot.com",
  messagingSenderId: "269196606236",
  appId: "1:269196606236:web:0bf0fbf2cdf3f2bb32d8d9",
  measurementId: "G-KDRFQ3Y024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
