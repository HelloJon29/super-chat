import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const AuthiModal = () => {
  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="authi-modal">
      <h2>Login with Google</h2>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default AuthiModal;
