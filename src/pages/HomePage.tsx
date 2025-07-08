import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { 
  MessageCircle, Wrench, FileText, BookOpen, CheckSquare, 
  Users, Code2, Star, Calendar, TrendingUp, GraduationCap,
  Lightbulb, Shield, Globe, Database, GitPullRequest, Rocket
} from 'lucide-react';

const HomePage: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: MessageCircle,
      title: 'Real-Time Chat',
      description: 'Connect with fellow students instantly with our WebSocket-powered chat system with markdown support.',
      link: '/chat',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Dev-Tools Hub',
      description: 'Integrated development environment with code editors, compilers, and debugging tools.',
      link: '/dev-tools',
      color: 'bg-emerald-500',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: FileText,
      title: 'Learning Resources',
      description: 'Curated collection of coding books, video tutorials, and university-specific materials.',
      link: '/pages',
      color: 'bg-violet-500',
      gradient: 'from-violet-500 to-violet-600'
    },
    {
      icon: BookOpen,
      title: 'Discussion Forums',
      description: 'Topic-based discussions with thread organization and professor participation.',
      link: '/discussion',
      color: 'bg-amber-500',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: CheckSquare,
      title: 'Task Manager',
      description: 'Kanban-style task management with deadlines, priorities, and group assignments.',
      link: '/taskmanagement',
      color: 'bg-rose-500',
      gradient: 'from-rose-500 to-rose-600'
    },
    {
      icon: GitPullRequest,
      title: 'Project Collaboration',
      description: 'Git-integrated project workspace for team coding assignments and version control.',
      link: '/ProjectCollaboration',
      color: 'bg-fuchsia-500',
      gradient: 'from-fuchsia-500 to-fuchsia-600'
    },
    {
      icon: Database,
      title: 'Code Repository',
      description: 'Searchable database of code snippets and algorithms shared by students.',
      link: '/CodeRepository',
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: GraduationCap,
      title: 'Course Support',
      description: 'University course-specific resources and discussion channels.',
      link: '/courses',
      color: 'bg-teal-500',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Interview Prep',
      description: 'Coding challenges, mock interviews, and career guidance resources.',
      link: '/interview',
      color: 'bg-cyan-500',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Students', value: '3,200+', change: '+12% this month' },
    { icon: Code2, label: 'Code Submissions', value: '15,000+', change: '24% increase' },
    { icon: Star, label: 'Learning Resources', value: '850+', change: 'New additions weekly' },
    { icon: Calendar, label: 'Upcoming Events', value: '18', change: 'Hackathons & Workshops' }
  ];

  const testimonials = [
    {
      quote: "Dire-Dev revolutionized how our study group collaborates on projects. The integrated tools saved us countless hours!",
      author: "Aisha Mohammed",
      role: "3rd Year CS Student"
    },
    {
      quote: "As a teaching assistant, I've seen student engagement improve dramatically since we started using this platform.",
      author: "Daniel Getachew",
      role: "CS Teaching Assistant"
    },
    {
      quote: "The interview prep resources helped me land my internship at a top tech company. Incredibly valuable!",
      author: "Yohannes Teshome",
      role: "Recent Graduate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Image */}
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src='../assets/hero-image.jpg'
            alt="Dire Dawa University students collaborating"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-indigo-600/80 to-purple-600/90" />
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:100px_100px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Welcome to </span>
              <span className="text-blue-200 bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                Dire-Dev
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              The comprehensive academic platform for Dire Dawa University's tech community. 
              Code, collaborate, and accelerate your learning journey.
            </p>
            <div className="text-lg text-blue-100 mb-8">
              <span className="font-semibold text-white">{user?.displayName || 'Welcome back'}</span>! 
              {user ? ' Ready to continue your journey?' : ' Join our growing community today!'}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <>
                  <Link
                    to="/Dashboard"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Your Dashboard
                  </Link>
                  <Link
                    to="/discussion"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore Community
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Create Account
                  </Link>
                  <Link
                    to="/login"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-gray-800 shadow-xl -mt-8 rounded-t-3xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value, change }) => (
              <div key={label} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50 mr-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{label}</div>
                  </div>
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">{change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Complete Academic Toolkit
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Designed specifically for Dire Dawa University's computer science community, 
            with features that grow with your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, link, color, gradient }) => (
            <Link
              key={title}
              to={link}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`}></div>
              <div className="p-6">
                <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{description}</p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  <span>Explore feature</span>
                  <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 dark:bg-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Students & Faculty
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join thousands of Dire Dawa University members who are already accelerating their learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* University Integration Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-3xl p-8 md:p-12 shadow-inner">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Seamless University Integration
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Dire-Dev works hand-in-hand with Dire Dawa University's systems to provide:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Official course materials and syllabi</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Professor-led discussion channels</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-green-500 mr:3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Assignment submission integration</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">University event calendar sync</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 mr-4">
                    <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Getting Started Guide</h3>
                </div>
                <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <span>Create your account with your university email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <span>Join your course-specific channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <span>Connect with classmates and professors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <span>Explore tools tailored for your curriculum</span>
                  </li>
                </ol>
                <div className="mt-8">
                  <Link
                    to="/guide"
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    View complete onboarding guide
                    <TrendingUp className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] bg-[length:100px_100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the platform that's changing how Dire Dawa University students learn computer science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started - It's Free
                  </Link>
                  <Link
                    to="/features"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Explore Features
                  </Link>
                </>
              )}
            </div>
            <div className="mt-8 text-indigo-200 text-sm">
              <p>Trusted by students across all computer science departments</p>
              <div className="flex justify-center mt-4 space-x-6">
                <span className="opacity-80">Year 1</span>
                <span className="opacity-80">Year 2</span>
                <span className="opacity-80">Year 3</span>
                <span className="opacity-80">Year 4</span>
                <span className="opacity-80">Graduates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;