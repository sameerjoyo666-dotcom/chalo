import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import './ChatBot.css';
import Reveal from './Reveal';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I'm Chaloo's AI assistant. How can I help you today?", sender: 'bot', time: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      time: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "That's a great question! I'm currently in training, but I can tell you that Chaloo is Pakistan's leading mobility app for smart, green travel.";
      
      if (inputValue.toLowerCase().includes('price') || inputValue.toLowerCase().includes('fare')) {
        botResponse = "Our fares are highly competitive! We focus on affordable, shared intercity travel starting from very budget-friendly rates.";
      } else if (inputValue.toLowerCase().includes('safety') || inputValue.toLowerCase().includes('safe')) {
        botResponse = "Safety is our #1 priority. All our drivers are verified, and we offer live tracking for every ride.";
      } else if (inputValue.toLowerCase().includes('book')) {
        botResponse = "You can book a ride easily through our mobile app! Would you like a link to download it?";
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        time: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className={`chatbot-wrapper ${isOpen ? 'active' : ''}`}>
      {/* Chat Trigger Button */}
      {!isOpen && (
        <button className="chatbot-trigger" onClick={() => setIsOpen(true)}>
          <MessageCircle size={28} />
          <span className="trigger-badge">1</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="bot-info">
              <div className="bot-avatar">
                <Bot size={20} />
                <span className="online-dot"></span>
              </div>
              <div>
                <h3>Chaloo Assistant</h3>
                <p>Online | Ready to help</p>
              </div>
            </div>
            <button className="close-chat" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="chat-content" ref={scrollRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                <div className="message-avatar">
                  {msg.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="message-bubble">
                  {msg.text}
                  <span className="message-time">
                    {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message-wrapper bot typing">
                <div className="message-avatar"><Bot size={14} /></div>
                <div className="message-bubble">
                  <div className="typing-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="send-btn" disabled={!inputValue.trim()}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
