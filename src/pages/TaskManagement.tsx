// src/pages/TaskManagement.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Circle, Flag, Calendar, Clock, Plus, 
  Filter, Search, List, Grid, MoreVertical, 
  ChevronDown, Tag, Users, Paperclip, MessageSquare,
  AlertCircle, Star, Archive, Trash2, Edit
} from 'lucide-react';

const TaskManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'completed' | 'overdue'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete algorithm assignment',
      description: 'Implement Dijkstra algorithm with visualization',
      dueDate: '2023-06-15',
      priority: 'high',
      status: 'pending',
      labels: ['CS-201', 'Algorithm'],
      assignedTo: ['Me', 'Team'],
      completed: false
    },
    {
      id: 2,
      title: 'Prepare for database exam',
      description: 'Review normalization and SQL queries',
      dueDate: '2023-06-20',
      priority: 'medium',
      status: 'pending',
      labels: ['CS-102'],
      assignedTo: ['Me'],
      completed: false
    },
    {
      id: 3,
      title: 'Group project meeting',
      description: 'Discuss UI design with team members',
      dueDate: '2023-06-10',
      priority: 'low',
      status: 'completed',
      labels: ['CS-304', 'Project'],
      assignedTo: ['Team'],
      completed: true
    }
  ]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: tasks.length + 1,
        title: newTask,
        description: '',
        dueDate: '',
        priority: 'medium',
        status: 'pending',
        labels: [],
        assignedTo: ['Me'],
        completed: false
      }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return !task.completed;
    if (activeTab === 'completed') return task.completed;
    if (activeTab === 'overdue') {
      return !task.completed && task.dueDate && new Date(task.dueDate) < new Date();
    }
    return true;
  });

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Task Management</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
              onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
            >
              {viewMode === 'list' ? <Grid className="w-5 h-5" /> : <List className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Task Controls */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Tabs */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {['all', 'pending', 'completed', 'overdue'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium rounded-full capitalize ${
                  activeTab === tab
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filter and Add Task */}
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
              <Filter className="w-4 h-4 mr-2" />
              Filter
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            <button className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </button>
          </div>
        </div>

        {/* Quick Add Task */}
        <div className="mb-6 flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-2">
          <button 
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => setNewTask('')}
          >
            <Plus className="w-5 h-5" />
          </button>
          <input
            type="text"
            className="flex-1 px-3 py-2 bg-transparent outline-none"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <div className="flex space-x-1">
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Calendar className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Flag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tasks List */}
        {viewMode === 'list' ? (
          <div className="space-y-3">
            {filteredTasks.map((task) => (
              <div 
                key={task.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border-l-4 ${
                  task.priority === 'high' ? 'border-red-500' : 
                  task.priority === 'medium' ? 'border-yellow-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                <div className="flex items-start">
                  <button 
                    className="mt-1 mr-3 text-gray-400 hover:text-blue-500"
                    onClick={() => toggleTaskCompletion(task.id)}
                  >
                    {task.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800 dark:text-white'}`}>
                        {task.title}
                      </h3>
                      <div className="flex space-x-2">
                        {task.labels.map((label) => (
                          <span 
                            key={label}
                            className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                    {task.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {task.description}
                      </p>
                    )}
                    <div className="flex items-center mt-3 space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      {task.dueDate && (
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{task.assignedTo.join(', ')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="hover:text-blue-500">
                          <Paperclip className="w-4 h-4" />
                        </button>
                        <button className="hover:text-blue-500">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button className="hover:text-blue-500">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks.map((task) => (
              <div 
                key={task.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border-t-4 ${
                  task.priority === 'high' ? 'border-red-500' : 
                  task.priority === 'medium' ? 'border-yellow-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <button 
                    className="text-gray-400 hover:text-blue-500"
                    onClick={() => toggleTaskCompletion(task.id)}
                  >
                    {task.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                  <div className="flex space-x-1">
                    <button className="text-gray-400 hover:text-blue-500">
                      <Star className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-500">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <h3 className={`font-medium text-lg mb-2 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800 dark:text-white'}`}>
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {task.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mb-3">
                  {task.labels.map((label) => (
                    <span 
                      key={label}
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  {task.dueDate && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{task.assignedTo.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredTasks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
              No tasks found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              {activeTab === 'completed' 
                ? "You haven't completed any tasks yet." 
                : activeTab === 'overdue'
                ? "You're all caught up with no overdue tasks!"
                : "Create a new task to get started."}
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add New Task
            </button>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-2">
        <div className="flex justify-around">
          <button className="p-2 text-blue-600 dark:text-blue-400">
            <List className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Calendar className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Tag className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Users className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;