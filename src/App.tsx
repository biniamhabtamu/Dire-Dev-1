import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Layout/Navbar';
import AuthPage from './components/Auth/AuthPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import DevToolsPage from './pages/DevToolsPage';
import Dashboard from './pages/Dashboard';
import TaskManagement from './pages/TaskManagement';
import ProjectCollaboration from './pages/ProjectCollaboration';
import CodeRepository from './pages/CodeRepository';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/auth" />;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {user && <Navbar />}
      <Routes>
        
        <Route path="/auth" element={user ? <Navigate to="/" /> : <AuthPage />} />
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />

          </ProtectedRoute>
        } />
        <Route path="/chat" element={
          <ProtectedRoute>
            <ChatPage />
          
          </ProtectedRoute>
        } />
        <Route path="/dev-tools" element={
          <ProtectedRoute>
            <DevToolsPage />
          </ProtectedRoute>
        } />

         <Route path="/Dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
         <Route path="/TaskManagement" element={
          <ProtectedRoute>
            <TaskManagement />
          </ProtectedRoute>
        } />
         <Route path="/ProjectCollaboration" element={
          <ProtectedRoute>
            <ProjectCollaboration />
          </ProtectedRoute>
        } />

<Route path="/CodeRepository" element={
          <ProtectedRoute>
            <CodeRepository />
          </ProtectedRoute>
        } />

        <Route path="/pages" element={
          <ProtectedRoute>
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dev Resources & Materials</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Programming Books</h3>
                  <p className="text-gray-600 dark:text-gray-400">Access our collection of programming books and tutorials.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code Snippets</h3>
                  <p className="text-gray-600 dark:text-gray-400">Browse and share useful code snippets with the community.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Learning Resources</h3>
                  <p className="text-gray-600 dark:text-gray-400">Find curated learning materials for different topics.</p>
                </div>
              </div>
            </div>
          </ProtectedRoute>
        } />
        <Route path="/discussion" element={
          <ProtectedRoute>
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Discussion Forums</h1>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">General Discussion</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Open discussions about university life and academics.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>45 topics</span>
                    <span>•</span>
                    <span>Last post 2 hours ago</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Study Groups</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Form study groups and collaborate on projects.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>23 topics</span>
                    <span>•</span>
                    <span>Last post 1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;