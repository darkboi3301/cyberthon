// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createClient } from "@supabase/supabase-js";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbMNgJESUnVGq8ibi0CvFCvv9d9sIj8AU",
  authDomain: "cyber-carnival-25.firebaseapp.com",
  projectId: "cyber-carnival-25",
  storageBucket: "cyber-carnival-25.firebasestorage.app",
  messagingSenderId: "663323088825",
  appId: "1:663323088825:web:ab76a8f486e5d36f4c8868",
};
const supabase = createClient(
  "https://zwgylnvqlufhxfprfltt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3Z3lsbnZxbHVmaHhmcHJmbHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3ODg4ODgsImV4cCI6MjA1MjM2NDg4OH0.RZ28r3LujYCOSguRLISdzx7VOzBmJYTfOmUZqo6opPU"
);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { supabase, db };
