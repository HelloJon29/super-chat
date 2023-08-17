import React from 'react';
import '../Styles/ChatBox.css';

const ChatBox = () => {
  // Hardcode the chat box first to style and get an idea, return basic html
  return (
    <div className="chat-box">
      <div className="message-list">
        <span className="message-text">Hello! World! We Are Live!</span>
        <span className="message-time">12:41AM</span>
      </div>
      <div className="message">
        <span className="message-text">Wow! That's so cool!</span>
        <span className="message-time">12:42AM</span>
      </div>
      <div className="message-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
