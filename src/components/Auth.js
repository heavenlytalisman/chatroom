import { useEffect } from 'react';
import { auth, provider } from '../firebase-config.js';
import { signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Auth = (props) => {
  const { setIsAuth } = props;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const signInWithGoogle = async () => {
    try {
      if (isMobile) {
        await signInWithRedirect(auth, provider);
      } else {
        const result = await signInWithPopup(auth, provider);
        const idToken = await result.user.getIdToken();
        cookies.set("auth-token", idToken, { path: "/", secure: true, sameSite: "strict" });
        setIsAuth(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isMobile) {
      getRedirectResult(auth)
        .then(async (result) => {
          if (result) {
            const idToken = await result.user.getIdToken();
            cookies.set("auth-token", idToken, { path: "/", secure: true, sameSite: "strict" });
            setIsAuth(true);
          }
        })
        .catch(console.error);
    }
  }, [isMobile, setIsAuth]);

  return (
    <div className="auth">
      <p>Sign In with Google to continue.</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};
