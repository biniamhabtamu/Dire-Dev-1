import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Send, Users, Search, Smile, Paperclip, MoreVertical } from 'lucide-react';
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: any;
  avatar?: string;
}

const ChatPage: React.FC = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [activeUsers] = useState(['Alice Chen', 'Bob Johnson', 'Clara Williams', 'David Brown']);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ✅ Get real-time messages from Firestore
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ✅ Send a message to Firestore
  const sendMessage = async () => {
    if (newMessage.trim() === '') return;

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      sender: user?.displayName || 'Anonymous',
      timestamp: serverTimestamp(),
      avatar:
        user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName}&size=50&background=3B82F6&color=fff`,
    });

    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      {/* ... same sidebar code ... */}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {/* ... same header code ... */}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-3">
              <img
                src={message.avatar}
                alt={message.sender}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900 dark:text-white">{message.sender}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {message.timestamp?.toDate?.().toLocaleTimeString?.() || 'Sending...'}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        {/* ... same input UI with sendMessage and handleKeyPress ... */}
      </div>
    </div>
  );
};

export default ChatPage;
