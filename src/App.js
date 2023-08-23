import React, { useEffect, useState } from 'react';
import Background from './components/Background';
import ChatBox from './components/ChatBox';
import firebase from './firebaseConfig';
import AuthiModal from './components/AuthiModal';

function App() {
  // state to update when user is authenticated
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Background />
      {!user ? <AuthiModal /> : <ChatBox currentUser={user} />}
    </div>
  );
}

export default App;
