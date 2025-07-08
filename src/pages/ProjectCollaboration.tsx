// src/pages/ProjectCollaboration.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, FileText, MessageSquare, GitBranch, Clock, Calendar, 
  Plus, CheckCircle, MoreVertical, Search, Star, Paperclip,
  Settings, List, Grid, GitPullRequest, Code, 
  Folder, BarChart2, Milestone, Tag, Download
} from 'lucide-react';

const ProjectCollaboration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'files' | 'code' | 'settings'>('overview');
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Aisha Mohammed', role: 'Frontend Dev', status: 'online', lastActive: '2 min ago' },
    { id: 2, name: 'Daniel Getachew', role: 'Backend Lead', status: 'online', lastActive: '5 min ago' },
    { id: 3, name: 'Yohannes Teshome', role: 'UI/UX Designer', status: 'offline', lastActive: '1 hour ago' },
    { id: 4, name: 'Selamawit Abebe', role: 'QA Engineer', status: 'away', lastActive: '30 min ago' },
  ]);
  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Implement authentication', status: 'completed', assignedTo: 'Aisha', dueDate: '2023-06-15' },
    { id: 2, title: 'Design dashboard UI', status: 'in-progress', assignedTo: 'Yohannes', dueDate: '2023-06-18' },
    { id: 3, title: 'Setup database schema', status: 'todo', assignedTo: 'Daniel', dueDate: '2023-06-20' },
    { id: 4, title: 'Write API documentation', status: 'todo', assignedTo: 'Selamawit', dueDate: '2023-06-22' },
  ]);
  
  const [files, setFiles] = useState([
    { id: 1, name: 'Project Requirements.pdf', type: 'pdf', size: '2.4 MB', uploadedBy: 'Daniel', date: '2023-06-10' },
    { id: 2, name: 'Wireframes.fig', type: 'design', size: '5.7 MB', uploadedBy: 'Yohannes', date: '2023-06-12' },
    { id: 3, name: 'Technical Specs.docx', type: 'document', size: '1.1 MB', uploadedBy: 'Aisha', date: '2023-06-14' },
    { id: 4, name: 'Backend Architecture.png', type: 'image', size: '3.2 MB', uploadedBy: 'Daniel', date: '2023-06-15' },
  ]);
  
  const [messages, setMessages] = useState([
    { id: 1, user: 'Aisha', text: 'Just pushed the auth implementation to dev branch', time: '10:30 AM' },
    { id: 2, user: 'Daniel', text: 'Great! I\'ll review it after lunch', time: '10:32 AM' },
    { id: 3, user: 'Yohannes', text: 'Dashboard designs are ready for feedback', time: '11:15 AM' },
    { id: 4, user: 'Selamawit', text: 'Found some edge cases in the login flow, will document', time: '11:45 AM' },
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [progress, setProgress] = useState(65);
  const [activeUsers, setActiveUsers] = useState(3);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: 'You',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
      case 'design': return <GitBranch className="w-5 h-5 text-purple-500" />;
      case 'document': return <FileText className="w-5 h-5 text-blue-500" />;
      case 'image': return <FileText className="w-5 h-5 text-green-500" />;
      default: return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center text-white">
              <GitPullRequest className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dire-Dev Platform</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Project Collaboration Space</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <div className="flex -space-x-2">
              {teamMembers.slice(0, 3).map(member => (
                <div 
                  key={member.id} 
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800 flex items-center justify-center relative"
                >
                  <span className="text-xs font-medium text-gray-700">
                    {member.name.charAt(0)}
                  </span>
                  <div className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ${
                    member.status === 'online' ? 'bg-green-500' : 
                    member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></div>
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium text-gray-700">
                +{teamMembers.length - 3}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Project Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Student Portal Redesign</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Redesigning the student portal with modern UI/UX principles and improved performance.
                This project is part of Dire Dawa University's digital transformation initiative.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Invite Members
              </button>
              <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Start Date</p>
                <p className="font-medium text-gray-800 dark:text-white">Jun 1, 2023</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Deadline</p>
                <p className="font-medium text-gray-800 dark:text-white">Jul 15, 2023</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
                <p className="font-medium text-gray-800 dark:text-white">{teamMembers.length} Members</p>
              </div>
            </div>
            <div className="flex items-center">
              <BarChart2 className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 dark:bg-gray-700 mr-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="font-medium text-gray-800 dark:text-white">{progress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          {['overview', 'tasks', 'files', 'code', 'settings'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-3 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(tab as any)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Project Overview</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    The Student Portal Redesign project aims to create a modern, user-friendly interface for Dire Dawa University's student portal. 
                    The new design will focus on accessibility, performance, and a seamless user experience across all devices.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Milestones</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Milestone className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Research & Planning</span>
                        <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                      </li>
                      <li className="flex items-center">
                        <Milestone className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">UI/UX Design</span>
                        <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                      </li>
                      <li className="flex items-center">
                        <Milestone className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Frontend Implementation</span>
                        <span className="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Progress</span>
                      </li>
                      <li className="flex items-center">
                        <Milestone className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Backend Integration</span>
                      </li>
                      <li className="flex items-center">
                        <Milestone className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm">Testing & Deployment</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Recent Activity</h4>
                    <ul className="space-y-3">
                      <li>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <span className="text-blue-800 font-medium text-sm">A</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-white">Aisha pushed to main</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Updated auth service</p>
                            <p className="text-xs text-gray-400">2 hours ago</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-800 font-medium text-sm">Y</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-white">Yohannes added files</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Uploaded dashboard designs</p>
                            <p className="text-xs text-gray-400">4 hours ago</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                            <span className="text-purple-800 font-medium text-sm">D</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-white">Daniel created task</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">"Implement API endpoints"</p>
                            <p className="text-xs text-gray-400">Yesterday</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm rounded-full">React.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-sm rounded-full">MongoDB</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-sm rounded-full">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-sm rounded-full">Figma</span>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'tasks' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Tasks</h3>
                  <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-1" />
                    New Task
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
                      To Do
                      <span className="ml-auto bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        {tasks.filter(t => t.status === 'todo').length}
                      </span>
                    </h4>
                    <div className="space-y-3">
                      {tasks.filter(t => t.status === 'todo').map(task => (
                        <div key={task.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                          <div className="flex items-start">
                            <div className="mt-0.5">
                              <Circle className="w-4 h-4 text-gray-400" />
                            </div>
                            <div className="ml-2 flex-1">
                              <p className="font-medium text-gray-800 dark:text-white">{task.title}</p>
                              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                                <Tag className="w-3 h-3 mr-1" />
                                <span>{task.assignedTo}</span>
                                <span className="mx-2">•</span>
                                <Calendar className="w-3 h-3 mr-1" />
                                <span>{task.dueDate}</span>
                              </div>
                            </div>
                            <button>
                              <MoreVertical className="w-5 h-5 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                      In Progress
                      <span className="ml-auto bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        {tasks.filter(t => t.status === 'in-progress').length}
                      </span>
                    </h4>
                    <div className="space-y-3">
                      {tasks.filter(t => t.status === 'in-progress').map(task => (
                        <div key={task.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                          <div className="flex items-start">
                            <div className="mt-0.5">
                              <Circle className="w-4 h-4 text-yellow-500" />
                            </div>
                            <div className="ml-2 flex-1">
                              <p className="font-medium text-gray-800 dark:text-white">{task.title}</p>
                              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                                <Tag className="w-3 h-3 mr-1" />
                                <span>{task.assignedTo}</span>
                                <span className="mx-2">•</span>
                                <Calendar className="w-3 h-3 mr-1" />
                                <span>{task.dueDate}</span>
                              </div>
                            </div>
                            <button>
                              <MoreVertical className="w-5 h-5 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Completed
                      <span className="ml-auto bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        {tasks.filter(t => t.status === 'completed').length}
                      </span>
                    </h4>
                    <div className="space-y-3">
                      {tasks.filter(t => t.status === 'completed').map(task => (
                        <div key={task.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                          <div className="flex items-start">
                            <div className="mt-0.5">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            </div>
                            <div className="ml-2 flex-1">
                              <p className="font-medium text-gray-800 dark:text-white">{task.title}</p>
                              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                                <Tag className="w-3 h-3 mr-1" />
                                <span>{task.assignedTo}</span>
                                <span className="mx-2">•</span>
                                <Calendar className="w-3 h-3 mr-1" />
                                <span>{task.dueDate}</span>
                              </div>
                            </div>
                            <button>
                              <MoreVertical className="w-5 h-5 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'files' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Files & Documents</h3>
                  <div className="flex space-x-2">
                    <button 
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List className="w-5 h-5" />
                    </button>
                    <button 
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-1" />
                      Upload File
                    </button>
                  </div>
                </div>
                
                {viewMode === 'list' ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Size</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Uploaded By</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {files.map(file => (
                          <tr key={file.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                {getFileIcon(file.type)}
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">{file.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">{file.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{file.size}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{file.uploadedBy}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{file.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                                <Download className="w-5 h-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {files.map(file => (
                      <div key={file.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                        <div className="p-4 flex items-center">
                          {getFileIcon(file.type)}
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{file.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{file.size} • {file.date}</p>
                          </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-600 px-4 py-2 flex justify-between items-center">
                          <span className="text-xs text-gray-700 dark:text-gray-300">By {file.uploadedBy}</span>
                          <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'code' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Code Repository</h3>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <Code className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="font-medium text-gray-800 dark:text-white">student-portal</span>
                      <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded-full">
                        main
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                        <GitBranch className="w-4 h-4 mr-1 inline" />
                        Branches
                      </button>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                        <Plus className="w-4 h-4 mr-1 inline" />
                        New Branch
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Latest Commits</h4>
                      <button className="text-sm text-blue-600 dark:text-blue-400">View All</button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-blue-500 pl-4 py-1">
                        <p className="font-medium text-gray-800 dark:text-white">Implement authentication service</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Added JWT authentication with refresh tokens</p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <span className="text-blue-800 font-medium text-xs">A</span>
                          </div>
                          <span>Aisha Mohammed</span>
                          <span className="mx-2">•</span>
                          <span>2 hours ago</span>
                          <span className="ml-auto">#a3f7b2</span>
                        </div>
                      </div>
                      
                      <div className="border-l-2 border-green-500 pl-4 py-1">
                        <p className="font-medium text-gray-800 dark:text-white">Update user model</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Added profile picture field to user model</p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                            <span className="text-purple-800 font-medium text-xs">D</span>
                          </div>
                          <span>Daniel Getachew</span>
                          <span className="mx-2">•</span>
                          <span>4 hours ago</span>
                          <span className="ml-auto">#c8e9d4</span>
                        </div>
                      </div>
                      
                      <div className="border-l-2 border-yellow-500 pl-4 py-1">
                        <p className="font-medium text-gray-800 dark:text-white">Fix login validation</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Resolved email validation issue on login form</p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                            <span className="text-green-800 font-medium text-xs">S</span>
                          </div>
                          <span>Selamawit Abebe</span>
                          <span className="mx-2">•</span>
                          <span>Yesterday</span>
                          <span className="ml-auto">#f2e9c4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column */}
          <div>
            {/* Team Members */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Team Members</h3>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                  {activeUsers} online
                </span>
              </div>
              
              <div className="space-y-4">
                {teamMembers.map(member => (
                  <div key={member.id} className="flex items-center">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-700 font-medium">{member.name.charAt(0)}</span>
                      </div>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                        member.status === 'online' ? 'bg-green-500' : 
                        member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="font-medium text-gray-800 dark:text-white">{member.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{member.lastActive}</div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                <Plus className="w-4 h-4 inline mr-1" />
                Add Member
              </button>
            </div>
            
            {/* Project Chat */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Project Chat</h3>
              
              <div className="h-80 overflow-y-auto mb-4 space-y-4">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.user === 'You' ? 'justify-end' : ''}`}
                  >
                    <div 
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${
                        message.user === 'You' 
                          ? 'bg-blue-500 text-white rounded-br-none' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                      }`}
                    >
                      <div className="font-medium">{message.user}</div>
                      <p>{message.text}</p>
                      <div className={`text-xs mt-1 ${message.user === 'You' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                        {message.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-l-lg focus:outline-none"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
                  onClick={sendMessage}
                >
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectCollaboration;