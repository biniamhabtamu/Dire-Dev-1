// src/pages/CourseSupport.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Calendar, FileText, Video, Users, 
  MessageSquare, Download, Bookmark, BarChart2, 
  ClipboardList, Clock, Award, GraduationCap, Bell, 
  Search, ChevronDown, Star, HelpCircle, File, 
  ChevronRight, CheckCircle, AlertCircle, MoreVertical
} from 'lucide-react';

import { FaPlus } from 'react-icons/fa'; // Import the icon

const CourseSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'resources' | 'assignments' | 'discussions' | 'grades'>('overview');
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState<any[]>([]);
  const [courses, setCourses] = useState([
    {
      id: 1,
      code: "CS-304",
      title: "Software Engineering",
      instructor: "Prof. Alemayehu",
      description: "Principles and practices of software development with focus on design patterns and team collaboration.",
      progress: 65,
      color: "bg-blue-500",
      resources: [
        { type: 'syllabus', title: 'Course Syllabus', date: '2023-09-01', icon: FileText },
        { type: 'lecture', title: 'Lecture 1: Introduction to SE', date: '2023-09-05', icon: Video },
        { type: 'textbook', title: 'Software Engineering Textbook', date: '2023-09-10', icon: BookOpen },
        { type: 'slides', title: 'Design Patterns Slides', date: '2023-09-15', icon: File },
      ],
      assignments: [
        { id: 101, title: 'Project Proposal', dueDate: '2023-10-15', status: 'submitted', grade: 'A-' },
        { id: 102, title: 'Design Patterns Implementation', dueDate: '2023-10-30', status: 'in-progress' },
        { id: 103, title: 'Final Project', dueDate: '2023-12-10', status: 'not-started' },
      ],
      discussions: [
        { id: 201, title: 'Project groups formation', author: 'Prof. Alemayehu', replies: 24, date: '2 days ago' },
        { id: 202, title: 'Question about design patterns', author: 'Aisha Mohammed', replies: 8, date: '1 day ago' },
        { id: 203, title: 'Assignment 1 clarification', author: 'Daniel Getachew', replies: 12, date: '3 days ago' },
      ],
      grades: {
        assignments: 85,
        project: 90,
        exam: 78,
        overall: 84
      }
    },
    {
      id: 2,
      code: "CS-201",
      title: "Data Structures",
      instructor: "Prof. Selam",
      description: "Study of fundamental data structures and their applications in problem solving.",
      progress: 45,
      color: "bg-green-500",
      resources: [
        { type: 'syllabus', title: 'Course Syllabus', date: '2023-09-01', icon: FileText },
        { type: 'lecture', title: 'Lecture 1: Arrays and Lists', date: '2023-09-05', icon: Video },
      ],
      assignments: [
        { id: 201, title: 'Linked List Implementation', dueDate: '2023-10-10', status: 'submitted', grade: 'B+' },
        { id: 202, title: 'Tree Traversal Algorithms', dueDate: '2023-10-25', status: 'not-started' },
      ],
      grades: {
        assignments: 78,
        project: 85,
        exam: 82,
        overall: 81
      }
    },
    {
      id: 3,
      code: "CS-102",
      title: "Database Systems",
      instructor: "Prof. Daniel",
      description: "Introduction to database design, implementation, and management.",
      progress: 30,
      color: "bg-purple-500",
      resources: [],
      assignments: [
        { id: 301, title: 'ER Diagram Design', dueDate: '2023-10-12', status: 'submitted', grade: 'A' },
      ],
      grades: {
        assignments: 92,
        project: 0,
        exam: 0,
        overall: 92
      }
    }
  ]);

  // Calculate upcoming deadlines
  useEffect(() => {
    const deadlines = [];
    for (const course of courses) {
      for (const assignment of course.assignments) {
        if (assignment.status !== 'submitted') {
          deadlines.push({
            course: course.code,
            title: assignment.title,
            dueDate: assignment.dueDate,
            status: assignment.status
          });
        }
      }
    }
    // Sort by due date
    deadlines.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    setUpcomingDeadlines(deadlines.slice(0, 3));
  }, [courses]);

  const currentCourse = selectedCourse 
    ? courses.find(course => course.id === selectedCourse)
    : courses[0];
    

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white p-2 rounded-lg mr-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Course Support</h1>
                <p className="text-blue-100">Dire Dawa University - Computer Science Department</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar - Course List */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  My Courses
                </h2>
                <div className="space-y-3">
                  {courses.map(course => (
                    <div 
                      key={course.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        currentCourse?.id === course.id
                          ? 'bg-blue-50 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-700'
                          : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
                      }`}
                      onClick={() => setSelectedCourse(course.id)}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 ${course.color} rounded-lg flex items-center justify-center text-white mr-3`}>
                          {course.code.split('-')[1]}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 dark:text-white">{course.code}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{course.title}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-blue-500" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Course
                </button>
              </div>

              {/* Upcoming Deadlines */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Deadlines
                </h2>
                <div className="space-y-3">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-800 dark:text-white">{deadline.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{deadline.course}</p>
                        </div>
                        <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded-full">
                          Due: {new Date(deadline.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center mt-2 text-xs">
                        <Clock className="w-4 h-4 mr-1 text-yellow-500" />
                        <span>{deadline.status === 'in-progress' ? 'In progress' : 'Not started'}</span>
                      </div>
                    </div>
                  ))}
                  {upcomingDeadlines.length === 0 && (
                    <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                      <CheckCircle className="w-8 h-8 mx-auto text-green-500" />
                      <p className="mt-2">No upcoming deadlines!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Course Header */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {currentCourse?.code}: {currentCourse?.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Instructor: <span className="font-medium">{currentCourse?.instructor}</span>
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {currentCourse?.description}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-2">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-2" />
                      Course Materials
                    </button>
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 flex border-b border-gray-200 dark:border-gray-700">
                  {['overview', 'resources', 'assignments', 'discussions', 'grades'].map(tab => (
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
              </div>

              {/* Tab Content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Course Overview</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl">
                        <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-3 flex items-center">
                          <ClipboardList className="w-5 h-5 mr-2" />
                          Course Syllabus
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          Download the complete course syllabus including schedule, topics, and grading policy.
                        </p>
                        <button className="flex items-center text-blue-600 dark:text-blue-400">
                          <Download className="w-4 h-4 mr-2" />
                          Download Syllabus
                        </button>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl">
                        <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-3 flex items-center">
                          <BarChart2 className="w-5 h-5 mr-2" />
                          Current Progress
                        </h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-gray-800 dark:text-white">{currentCourse?.progress}%</span>
                          <div className="text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                            On track
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-green-500" 
                            style={{ width: `${currentCourse?.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Important Dates
                      </h4>
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                        <table className="min-w-full">
                          <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Event</th>
                              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Date</th>
                              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                              <td className="py-3 px-4 text-sm text-gray-800 dark:text-white">Midterm Exam</td>
                              <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Nov 15, 2023</td>
                              <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs px-2 py-1 rounded-full">Upcoming</span></td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-sm text-gray-800 dark:text-white">Project Proposal Due</td>
                              <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Oct 15, 2023</td>
                              <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded-full">In Progress</span></td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 text-sm text-gray-800 dark:text-white">Add/Drop Deadline</td>
                              <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Sep 20, 2023</td>
                              <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-1 rounded-full">Completed</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Resources Tab */}
                {activeTab === 'resources' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Learning Resources</h3>
                      <div className="flex space-x-2">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search resources..."
                            className="pl-8 pr-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                          />
                          <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
                        </div>
                        <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-1" />
                          Add Resource
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentCourse?.resources.map((resource, index) => {
                        const Icon = resource.icon;
                        return (
                          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-4">
                              <div className="flex items-center mb-3">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-3">
                                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h4 className="font-medium text-gray-800 dark:text-white">{resource.title}</h4>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {resource.type === 'syllabus' 
                                  ? 'Course syllabus and schedule' 
                                  : resource.type === 'lecture' 
                                    ? 'Lecture recording and materials'
                                    : resource.type === 'textbook'
                                      ? 'Required textbook for the course'
                                      : 'Presentation slides'}
                              </p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500 dark:text-gray-400">{resource.date}</span>
                                <div className="flex space-x-2">
                                  <button className="p-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    <Download className="w-4 h-4" />
                                  </button>
                                  <button className="p-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    <Star className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      
                      {(!currentCourse?.resources || currentCourse.resources.length === 0) && (
                        <div className="col-span-3 text-center py-12">
                          <BookOpen className="w-12 h-12 mx-auto text-gray-400" />
                          <h4 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">No resources available</h4>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">
                            The instructor hasn't added any resources yet for this course.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Assignments Tab */}
                {activeTab === 'assignments' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Course Assignments</h3>
                      <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                        <Plus className="w-4 h-4 mr-1" />
                        New Assignment
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                          <tr>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Assignment</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Due Date</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Grade</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          {currentCourse?.assignments.map(assignment => (
                            <tr key={assignment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                              <td className="py-3 px-4">
                                <div className="font-medium text-gray-800 dark:text-white">{assignment.title}</div>
                                {assignment.grade && (
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Feedback available
                                  </div>
                                )}
                              </td>
                              <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                                {new Date(assignment.dueDate).toLocaleDateString()}
                              </td>
                              <td className="py-3 px-4">
                                {assignment.status === 'submitted' ? (
                                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                                    Submitted
                                  </span>
                                ) : assignment.status === 'in-progress' ? (
                                  <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs px-2 py-1 rounded-full">
                                    In Progress
                                  </span>
                                ) : (
                                  <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                                    Not Started
                                  </span>
                                )}
                              </td>
                              <td className="py-3 px-4">
                                {assignment.grade ? (
                                  <span className="font-medium text-gray-800 dark:text-white">{assignment.grade}</span>
                                ) : (
                                  <span className="text-gray-500 dark:text-gray-400">-</span>
                                )}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex space-x-2">
                                  {assignment.status !== 'submitted' && (
                                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                      Submit
                                    </button>
                                  )}
                                  <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                    <MoreVertical className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      
                      {(!currentCourse?.assignments || currentCourse.assignments.length === 0) && (
                        <div className="text-center py-12">
                          <ClipboardList className="w-12 h-12 mx-auto text-gray-400" />
                          <h4 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">No assignments yet</h4>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">
                            The instructor hasn't added any assignments for this course.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Discussions Tab */}
                {activeTab === 'discussions' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Course Discussions</h3>
                      <button className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                        <Plus className="w-4 h-4 mr-1" />
                        New Discussion
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {currentCourse?.discussions?.map(discussion => (
                        <div key={discussion.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start">
                            <div className="mr-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                <span className="text-blue-800 dark:text-blue-200 font-medium">
                                  {discussion.author.charAt(0)}
                                </span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-800 dark:text-white">{discussion.title}</h4>
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                                <span className="font-medium">{discussion.author}</span>
                                <span className="mx-2">•</span>
                                <span>{discussion.date}</span>
                                <span className="mx-2">•</span>
                                <span>{discussion.replies} replies</span>
                              </div>
                              <div className="mt-3 flex space-x-3">
                                <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                                  Join Discussion
                                </button>
                                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
                                  Follow
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {(!currentCourse?.discussions || currentCourse.discussions.length === 0) && (
                        <div className="text-center py-12">
                          <MessageSquare className="w-12 h-12 mx-auto text-gray-400" />
                          <h4 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">No discussions yet</h4>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Be the first to start a discussion for this course.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Grades Tab */}
                {activeTab === 'grades' && currentCourse?.grades && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Grades & Performance</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-5 text-center">
                        <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">
                          {currentCourse.grades.overall}%
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">Overall Grade</div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-5">
                        <h4 className="font-medium text-gray-800 dark:text-white mb-4">Grade Breakdown</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600 dark:text-gray-400">Assignments</span>
                              <span className="font-medium text-gray-800 dark:text-white">{currentCourse.grades.assignments}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-blue-500" 
                                style={{ width: `${currentCourse.grades.assignments}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600 dark:text-gray-400">Project</span>
                              <span className="font-medium text-gray-800 dark:text-white">{currentCourse.grades.project || 0}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-green-500" 
                                style={{ width: `${currentCourse.grades.project || 0}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600 dark:text-gray-400">Final Exam</span>
                              <span className="font-medium text-gray-800 dark:text-white">{currentCourse.grades.exam || 0}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-purple-500" 
                                style={{ width: `${currentCourse.grades.exam || 0}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-5">
                        <h4 className="font-medium text-gray-800 dark:text-white mb-4">Performance</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Class Rank</span>
                            <span className="font-medium text-gray-800 dark:text-white">12/85</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Average Grade</span>
                            <span className="font-medium text-gray-800 dark:text-white">78%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Completion</span>
                            <span className="font-medium text-gray-800 dark:text-white">{currentCourse.progress}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Attendance</span>
                            <span className="font-medium text-gray-800 dark:text-white">92%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white mb-4">Assignment Grades</h4>
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                        <table className="min-w-full">
                          <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Assignment</th>
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Due Date</th>
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Grade</th>
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Feedback</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {currentCourse.assignments
                              .filter(a => a.grade)
                              .map(assignment => (
                                <tr key={assignment.id}>
                                  <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">{assignment.title}</td>
                                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                                    {new Date(assignment.dueDate).toLocaleDateString()}
                                  </td>
                                  <td className="py-3 px-4">
                                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                                      Graded
                                    </span>
                                  </td>
                                  <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">{assignment.grade}</td>
                                  <td className="py-3 px-4">
                                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                                      View Feedback
                                    </button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        
                        {currentCourse.assignments.filter(a => a.grade).length === 0 && (
                          <div className="text-center py-12">
                            <Award className="w-12 h-12 mx-auto text-gray-400" />
                            <h4 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">No grades yet</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                              Your assignments haven't been graded yet.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Support Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Need Help with this Course?</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
              Our support team and course assistants are available to help you with any questions or challenges you're facing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <HelpCircle className="w-5 h-5 mr-2" />
                Contact Instructor
              </button>
              <button className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                <Users className="w-5 h-5 mr-2" />
                Request Tutor
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseSupport;