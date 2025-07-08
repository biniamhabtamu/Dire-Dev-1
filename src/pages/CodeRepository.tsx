// src/pages/CodeRepository.tsx
import React, { useState, useEffect } from 'react';
import { 
  Code, GitBranch, GitCommit, GitPullRequest, History, 
  Star, Eye, GitFork, File, Search, List, Copy, Download,  // Changed Fork to GitFork
  FileText, Settings, Plus, Trash2, Lock, Globe, Tag,
  ChevronDown, CheckCircle, AlertCircle, Clock, Users
} from 'lucide-react';
const CodeRepository: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'commits' | 'pr' | 'issues'>('code');
  const [branches, setBranches] = useState([
    { name: 'main', protected: true, lastCommit: 'Latest UI updates', date: '2 hours ago' },
    { name: 'dev', protected: false, lastCommit: 'Authentication service', date: '1 day ago' },
    { name: 'feature/dashboard', protected: false, lastCommit: 'Dashboard widgets', date: '3 days ago' },
    { name: 'fix/login-bug', protected: false, lastCommit: 'Fixed login validation', date: '5 days ago' },
  ]);
  const [selectedBranch, setSelectedBranch] = useState('main');
  const [files, setFiles] = useState([
    { name: 'src', type: 'folder', lastCommit: 'Refactored components', date: '2 hours ago' },
    { name: 'public', type: 'folder', lastCommit: 'Added assets', date: '1 day ago' },
    { name: 'package.json', type: 'file', lastCommit: 'Updated dependencies', date: '2 days ago' },
    { name: 'README.md', type: 'file', lastCommit: 'Added installation guide', date: '3 days ago' },
    { name: 'tsconfig.json', type: 'file', lastCommit: 'Updated config', date: '4 days ago' },
    { name: '.gitignore', type: 'file', lastCommit: 'Added env files', date: '5 days ago' },
  ]);
  const [commits, setCommits] = useState([
    { id: 'a3f7b2', author: 'Aisha Mohammed', message: 'Implemented authentication service', date: '2 hours ago' },
    { id: 'c8e9d4', author: 'Daniel Getachew', message: 'Updated user model', date: '4 hours ago' },
    { id: 'f2e9c4', author: 'Selamawit Abebe', message: 'Fixed login validation', date: '1 day ago' },
    { id: 'b5d2e1', author: 'Yohannes Teshome', message: 'Added dashboard UI components', date: '2 days ago' },
    { id: 'e7f1a9', author: 'Aisha Mohammed', message: 'Initial project setup', date: '5 days ago' },
  ]);
  const [pullRequests, setPullRequests] = useState([
    { id: 42, title: 'Implement authentication service', author: 'Aisha', status: 'merged', date: '2 hours ago' },
    { id: 41, title: 'Update user profile functionality', author: 'Daniel', status: 'open', date: '1 day ago' },
    { id: 40, title: 'Fix responsive layout issues', author: 'Yohannes', status: 'closed', date: '3 days ago' },
  ]);
  const [issues, setIssues] = useState([
    { id: 128, title: 'Login page not responsive on mobile', author: 'Selamawit', status: 'open', date: '5 hours ago' },
    { id: 127, title: 'Password reset email not sending', author: 'Daniel', status: 'in-progress', date: '1 day ago' },
    { id: 126, title: 'Dashboard performance improvements', author: 'Aisha', status: 'closed', date: '3 days ago' },
  ]);
  const [stats, setStats] = useState({
    stars: 24,
    watching: 8,
    forks: 6,
    languages: [
      { name: 'TypeScript', percentage: 65.2, color: '#3178c6' },
      { name: 'JavaScript', percentage: 18.7, color: '#f1e05a' },
      { name: 'CSS', percentage: 12.1, color: '#563d7c' },
      { name: 'HTML', percentage: 4.0, color: '#e34c26' },
    ]
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Repository Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Dire-Dev / student-portal</h1>
                  <p className="text-blue-100 mt-1">University student portal web application</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg">
                <Eye className="w-4 h-4 mr-2" />
                <span>Watch</span>
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">{stats.watching}</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg">
                <Star className="w-4 h-4 mr-2" />
                <span>Star</span>
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">{stats.stars}</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg">
                <Fork className="w-4 h-4 mr-2" />
                <span>Fork</span>
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">{stats.forks}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Repository Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4">
            <div className="flex space-x-1 mb-4 md:mb-0 overflow-x-auto pb-2">
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === 'code' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('code')}
              >
                Code
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === 'commits' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('commits')}
              >
                Commits
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === 'pr' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('pr')}
              >
                Pull Requests
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === 'issues' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('issues')}
              >
                Issues
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <button className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                  <GitBranch className="w-4 h-4 mr-2" />
                  {selectedBranch}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>
                <div className="absolute right-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 hidden">
                  {branches.map(branch => (
                    <button 
                      key={branch.name}
                      className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setSelectedBranch(branch.name)}
                    >
                      <div className="flex-1 text-left">{branch.name}</div>
                      {branch.protected && <Lock className="w-4 h-4 text-yellow-500" />}
                    </button>
                  ))}
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/30">
                      <Plus className="w-4 h-4 mr-2" />
                      New branch
                    </button>
                  </div>
                </div>
              </div>
              <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {activeTab === 'code' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                  <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <File className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="font-medium">Files and folders</span>
                    </div>
                    <div className="flex items-center">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Find a file..."
                          className="pl-8 pr-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                        />
                        <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
                      </div>
                      <button className="ml-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
                        <Settings className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {files.map((file, index) => (
                      <div key={index} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                        <div className="flex items-center">
                          {file.type === 'folder' ? (
                            <Folder className="w-5 h-5 text-blue-500 mr-3" />
                          ) : (
                            <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                          )}
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 dark:text-white">{file.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{file.lastCommit}</div>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{file.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center mr-4">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                        <span>TypeScript</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                        <span>JavaScript</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
                        <span>CSS</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'commits' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                  <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3">
                    <h3 className="font-medium text-gray-800 dark:text-white">Recent Commits</h3>
                  </div>
                  
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {commits.map(commit => (
                      <div key={commit.id} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                            <span className="text-blue-800 dark:text-blue-200 font-medium text-sm">
                              {commit.author.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 dark:text-white">{commit.message}</div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                              <span className="font-medium">{commit.author}</span>
                              <span className="mx-2">•</span>
                              <span className="font-mono text-blue-600 dark:text-blue-400">#{commit.id}</span>
                              <span className="mx-2">•</span>
                              <span>{commit.date}</span>
                            </div>
                          </div>
                          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
                            <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 text-center">
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                      View all commits
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'pr' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                  <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center">
                    <h3 className="font-medium text-gray-800 dark:text-white">Pull Requests</h3>
                    <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-1" />
                      New Pull Request
                    </button>
                  </div>
                  
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {pullRequests.map(pr => (
                      <div key={pr.id} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="flex items-start">
                          <div className="flex-1">
                            <div className="flex items-center">
                              <GitPullRequest className={`w-5 h-5 mr-2 ${
                                pr.status === 'merged' ? 'text-purple-500' : 
                                pr.status === 'open' ? 'text-green-500' : 'text-gray-500'
                              }`} />
                              <div className="font-medium text-gray-800 dark:text-white">{pr.title}</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              #{pr.id} opened {pr.date} by {pr.author}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              pr.status === 'merged' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : 
                              pr.status === 'open' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                              'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                            }`}>
                              {pr.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'issues' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                  <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-between items-center">
                    <h3 className="font-medium text-gray-800 dark:text-white">Issues</h3>
                    <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-1" />
                      New Issue
                    </button>
                  </div>
                  
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {issues.map(issue => (
                      <div key={issue.id} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            {issue.status === 'open' ? (
                              <AlertCircle className="w-5 h-5 text-red-500" />
                            ) : issue.status === 'in-progress' ? (
                              <Clock className="w-5 h-5 text-blue-500" />
                            ) : (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 dark:text-white">{issue.title}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              #{issue.id} opened {issue.date} by {issue.author}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column */}
            <div>
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">About</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is the official student portal for Dire Dawa University. Built with React, Node.js, and MongoDB.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>Public repository</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Tag className="w-4 h-4 mr-2" />
                  <span>v1.2.0</span>
                </div>
              </div>
              
              {/* Language Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Languages</h3>
                <div className="space-y-3">
                  {stats.languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{lang.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contributors */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Contributors</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                      <span className="text-blue-800 dark:text-blue-200 font-medium">A</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-white">Aisha Mohammed</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">12 commits</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                      <span className="text-purple-800 dark:text-purple-200 font-medium">D</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-white">Daniel Getachew</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">8 commits</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                      <span className="text-green-800 dark:text-green-200 font-medium">Y</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-white">Yohannes Teshome</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">6 commits</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mr-3">
                      <span className="text-yellow-800 dark:text-yellow-200 font-medium">S</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-white">Selamawit Abebe</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">4 commits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white mr-3">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <div className="font-medium">Dire-Dev Student Portal</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">University project repository</div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Download className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Copy className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Trash2 className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Custom Folder icon component
const Folder = ({ className, ...props }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"/>
  </svg>
);

export default CodeRepository;