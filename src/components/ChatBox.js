import React, { useState, useEffect } from 'react';
import firebase from '../firebaseConfig'; // Secrets File
import '../Styles/ChatBox.css';

const ChatBox = ({ currentUser }) => {
  // use state to update messages
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // reference to firestore collection
  const messageRef = firebase.firestore().collection('messages');

  useEffect(() => {
    // Listen for changes in the firestore collection
    const unsubscribe = messageRef.onSnapshot((snapshot) => {
      const messageData = snapshot.docs.map((doc) => doc.data());
      setMessages(messageData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // crreate the new message object to send to the back end here
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // store the info in JSON format
    const newMessageObj = {
      text: newMessage,
      timestamp: new Date().toISOString(),
      userId: firebase.auth().currentUser.uid,
    };

    // add the new message to Firestore
    messageRef.add(newMessageObj);

    setNewMessage('');
  };

  return (
    <div className="chat-box">
      <div className="message-list">
        {messages
          .slice()
          .reverse()
          .map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.userId === currentUser.uid ? 'own-message' : ''
              }`}
            >
              {message.text}
            </div>
          ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
