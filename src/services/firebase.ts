import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getDatabase, Database } from 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAfo00vE5wnZfl_eVPUepj8cL2iKugEuKg",
  authDomain: "youth-4faa4.firebaseapp.com",
  databaseURL: "https://youth-4faa4-default-rtdb.firebaseio.com",
  projectId: "youth-4faa4",
  storageBucket: "youth-4faa4.firebasestorage.app",
  messagingSenderId: "909772765294",
  appId: "1:909772765294:web:b5d860db288e0a7a688e7f",
  measurementId: "G-CM1G03ZPQ6"
};

// Initialize Firebase App singleton safely
export const app: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth: Auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

// Initialize Firestore Database
export const db: Firestore = getFirestore(app);

// Initialize Realtime Database
export const rtdb: Database = getDatabase(app);

// Helper to check if Firebase is configured
export const isFirebaseConnected = (): boolean => {
  return !!app && !!firebaseConfig.projectId;
};
