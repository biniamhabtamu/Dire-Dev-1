import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Send, Users, Search, Smile, Paperclip, MoreVertical } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  avatar?: string;
}

const ChatPage: React.FC = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [activeUsers] = useState(['Alice Chen', 'Bob Johnson', 'Clara Williams', 'David Brown']);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock initial messages
  useEffect(() => {
    const mockMessages: Message[] = [
      {
        id: '1',
        text: 'Hey everyone! Anyone working on the database assignment?',
        sender: 'Alice Chen',
        timestamp: new Date(Date.now() - 3600000),
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face'
      },
      {
        id: '2',
        text: 'Yes! I\'m struggling with the SQL joins. Any tips?',
        sender: 'Bob Johnson',
        timestamp: new Date(Date.now() - 3000000),
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
      },
      {
        id: '3',
        text: 'I can help! Check out the resources in the Dev-Materials section',
        sender: 'Clara Williams',
        timestamp: new Date(Date.now() - 2400000),
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
      }
    ];
    setMessages(mockMessages);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: user?.displayName || 'You',
        timestamp: new Date(),
        avatar: user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName}&size=50&background=3B82F6&color=fff`
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
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
      <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Chat Rooms</h2>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full pl-10 pr-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="space-y-2">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">General</h3>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">24</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Main discussion room</p>
              </div>
              <div className="p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white">Study Groups</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Academic discussions</p>
              </div>
              <div className="p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white">Project Teams</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Collaboration space</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900 dark:text-white">Online Now</h3>
            <Users className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            {activeUsers.map((user) => (
              <div key={user} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{user}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">General Chat</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{activeUsers.length} members online</p>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-3">
              <img
                src={message.avatar || `https://ui-avatars.com/api/?name=${message.sender}&size=40&background=3B82F6&color=fff`}
                alt={message.sender}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900 dark:text-white">{message.sender}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none"
                rows={1}
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Smile className="w-5 h-5" />
            </button>
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;