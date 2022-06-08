import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

import {
  CardWedding,
  DayProgram,
  GalleryImg,
  SubscribeForm,
} from "./components";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

function App() {
  const [uid, setUID] = useState<string | null>(null);
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUID(uid);
      } else {
        signInAnonymously(auth)
          .then(() => {
            // Signed in..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
          });
      }
    });
    setTimeout(() => {
      window.scroll(0, 0);
    }, 1000);
  }, []);

  return (
    <div className="mariage">
      <CardWedding />
      <DayProgram />
      {uid && <SubscribeForm />}
      <GalleryImg />
    </div>
  );
}

export default App;
