import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { MessageCircle, Wrench, FileText, BookOpen, CheckSquare, Users, Code2, Star, Calendar, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: MessageCircle,
      title: 'Real-Time Chat',
      description: 'Connect with fellow students instantly with our WebSocket-powered chat system.',
      link: '/chat',
      color: 'bg-blue-500'
    },
    {
      icon: Wrench,
      title: 'Dev-Tools',
      description: 'Access code editors, compilers, and testing tools all in one place.',
      link: '/dev-tools',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Resources & Materials',
      description: 'Browse and download coding books, tutorials, and educational resources.',
      link: '/pages',
      color: 'bg-purple-500'
    },
    {
      icon: BookOpen,
      title: 'Discussion Forums',
      description: 'Join topic-based discussions and share knowledge with the community.',
      link: '/discussion',
      color: 'bg-orange-500'
    },
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Organize your projects and assignments with our integrated todo system.',
      link: '/todos',
      color: 'bg-pink-500'
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'Stay updated with university news, events, and student blogs.',
      link: '/community',
      color: 'bg-indigo-500'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Students', value: '2,500+' },
    { icon: Code2, label: 'Code Snippets', value: '10,000+' },
    { icon: Star, label: 'Resources', value: '500+' },
    { icon: Calendar, label: 'Events This Month', value: '15' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-blue-200">Dire-Dev</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The ultimate digital platform designed exclusively for Dire Dawa University students. 
              Code, collaborate, and succeed together.
            </p>
            <div className="text-lg text-blue-100 mb-8">
              Hello, <span className="font-semibold text-white">{user?.displayName || 'Student'}</span>! 
              Ready to boost your academic journey?
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/chat"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Chatting
              </Link>
              <Link
                to="/dev-tools"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
                <div className="text-gray-600 dark:text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From coding tools to community discussions, Dire-Dev provides all the resources 
            you need to excel in your computer science journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, link, color }) => (
            <Link
              key={title}
              to={link}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="p-6">
                <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  <span>Explore</span>
                  <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of Dire Dawa University students who are already using Dire-Dev 
              to enhance their learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/chat"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Join the Community
              </Link>
              <Link
                to="/pages"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;