import { useState, useEffect } from "react";

export function useAuth(authFirebase) {
  const [authentification, setAuthentification] = useState(null);
  const provider = new authFirebase.GoogleAuthProvider();
  const auth = authFirebase();
  const logIn = () => auth.signInWithPopup(provider);
  const logOut = () => auth.signOut().catch((err) => console.log(err));
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setAuthentification(user);
      } else {
        setAuthentification(null);
      }
    });
  }, [authentification]);

  return { authentification, logIn, logOut };
}
