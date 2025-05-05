import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiiy270P4YG55p73hxrm8iJ6Vv5kVU4QU",
  authDomain: "netflixclone-c4e97.firebaseapp.com",
  projectId: "netflixclone-c4e97",
  storageBucket: "netflixclone-c4e97.firebasestorage.app",
  messagingSenderId: "710606675909",
  appId: "1:710606675909:web:14fb019bfbdf054349f5ac",
  measurementId: "G-9BD8CQELM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Save additional user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: name,
      email: email,
      createdAt: new Date(),
    });

    console.log("User signed up and saved:", user);
  } catch (error) {
    console.error("Signup failed:", error.message);
  }
};

export { auth, db, signup };
