import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard,
  MessageSquare,
  Code,
  BookOpen,
  Calendar,
  FileText,
  Users,
  GitPullRequest,
  GraduationCap,
  Briefcase,
  Settings,
  Bell,
  Search,
  ChevronDown
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const quickActions = [
    { icon: Code, title: 'New Project', link: '/projects/new', color: 'bg-blue-100 text-blue-600' },
    { icon: FileText, title: 'Submit Assignment', link: '/assignments', color: 'bg-green-100 text-green-600' },
    { icon: MessageSquare, title: 'Join Discussion', link: '/discussion', color: 'bg-purple-100 text-purple-600' },
    { icon: Calendar, title: 'View Schedule', link: '/calendar', color: 'bg-orange-100 text-orange-600' }
  ];

  const recentActivities = [
    { 
      title: 'New comment on CS-304 Project', 
      description: 'Professor Alemayehu commented on your submission',
      time: '2 hours ago',
      icon: MessageSquare,
      color: 'text-blue-500'
    },
    { 
      title: 'Assignment deadline approaching', 
      description: 'Data Structures assignment due tomorrow',
      time: '5 hours ago',
      icon: BookOpen,
      color: 'text-red-500'
    },
    { 
      title: 'Team invitation', 
      description: 'You were added to Group B for Software Engineering',
      time: '1 day ago',
      icon: Users,
      color: 'text-green-500'
    }
  ];

  const upcomingDeadlines = [
    { course: 'CS-304', assignment: 'Final Project Submission', due: 'Tomorrow, 11:59 PM' },
    { course: 'CS-201', assignment: 'Algorithm Analysis', due: 'In 3 days' },
    { course: 'CS-102', assignment: 'Database Design', due: 'Next Monday' }
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Dire-Dev</h1>
          </div>
          <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
            <nav className="flex-1 space-y-2">
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-blue-50 text-blue-700 dark:bg-gray-700 dark:text-blue-400"
              >
                <LayoutDashboard className="w-5 h-5 mr-3" />
                Dashboard
              </Link>
              <Link
                to="/courses"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <GraduationCap className="w-5 h-5 mr-3" />
                My Courses
              </Link>
              <Link
                to="/projects"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <GitPullRequest className="w-5 h-5 mr-3" />
                Projects
              </Link>
              <Link
                to="/assignments"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <BookOpen className="w-5 h-5 mr-3" />
                Assignments
              </Link>
              <Link
                to="/discussion"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Discussions
              </Link>
              <Link
                to="/resources"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <FileText className="w-5 h-5 mr-3" />
                Resources
              </Link>
              <Link
                to="/calendar"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Calendar
              </Link>
            </nav>
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <Search className="w-5 h-5" />
                </button>
              </div>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  {user?.displayName?.charAt(0) || 'U'}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user?.displayName || 'User'}
                </span>
                <ChevronDown className="w-4 h-4 ml-1 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white mb-6">
            <h3 className="text-2xl font-bold mb-2">Welcome back, {user?.displayName || 'Student'}!</h3>
            <p className="text-blue-100">
              You have 3 upcoming deadlines this week. Stay on top of your work!
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map(({ icon: Icon, title, link, color }) => (
                <Link
                  key={title}
                  to={link}
                  className={`flex items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${color} bg-opacity-30 dark:bg-opacity-20`}
                >
                  <div className={`p-3 rounded-lg ${color} bg-opacity-30 mr-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">{title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Activities</h3>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {recentActivities.map(({ icon: Icon, color, title, description, time }, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex">
                        <div className={`flex-shrink-0 ${color} mt-1`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-800 dark:text-white">{title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 text-center">
                  <Link
                    to="/activities"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    View all activities
                  </Link>
                </div>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Upcoming Deadlines</h3>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {upcomingDeadlines.map(({ course, assignment, due }, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 dark:text-white">{assignment}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{course}</p>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full">
                          {due}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 text-center">
                  <Link
                    to="/calendar"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    View full calendar
                  </Link>
                </div>
              </div>

              {/* Current Courses */}
              <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Current Courses</h3>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">CS</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">CS-304 - Software Engineering</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Prof. Alemayehu</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                      <span className="text-green-600 dark:text-green-400 font-bold">CS</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">CS-201 - Data Structures</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Prof. Selam</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">CS</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">CS-102 - Database Systems</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Prof. Daniel</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 text-center">
                  <Link
                    to="/courses"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    View all courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;