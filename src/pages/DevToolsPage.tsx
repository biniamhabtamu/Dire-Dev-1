import React, { useState } from 'react';
import { Code, Terminal, FileText, Play, Download, Share2, Save, Settings } from 'lucide-react';

const DevToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('editor');
  const [code, setCode] = useState(`// Welcome to Dire-Dev Code Editor
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');

  const languages = [
    { id: 'javascript', name: 'JavaScript', ext: '.js' },
    { id: 'python', name: 'Python', ext: '.py' },
    { id: 'java', name: 'Java', ext: '.java' },
    { id: 'cpp', name: 'C++', ext: '.cpp' },
    { id: 'html', name: 'HTML', ext: '.html' },
    { id: 'css', name: 'CSS', ext: '.css' }
  ];

  const tools = [
    {
      id: 'editor',
      name: 'Code Editor',
      icon: Code,
      description: 'Write and edit code with syntax highlighting'
    },
    {
      id: 'terminal',
      name: 'Terminal',
      icon: Terminal,
      description: 'Execute commands and scripts'
    },
    {
      id: 'api',
      name: 'API Tester',
      icon: FileText,
      description: 'Test REST APIs and webhooks'
    }
  ];

  const runCode = () => {
    if (language === 'javascript') {
      try {
        // Create a safe evaluation environment
        const logs: string[] = [];
        const console = {
          log: (...args: any[]) => logs.push(args.join(' '))
        };
        
        const func = new Function('console', code);
        func(console);
        setOutput(logs.join('\n') || 'Code executed successfully');
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    } else {
      setOutput('Code execution is currently supported for JavaScript only.');
    }
  };

  const renderEditor = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
          >
            {languages.map(lang => (
              <option key={lang.id} value={lang.id}>{lang.name}</option>
            ))}
          </select>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {languages.find(l => l.id === language)?.ext}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={runCode}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
          >
            <Play className="w-4 h-4" />
            <span>Run</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 bg-gray-900 text-green-400 font-mono text-sm resize-none focus:outline-none"
            placeholder="Write your code here..."
            style={{ fontFamily: 'Monaco, Consolas, "Lucida Console", monospace' }}
          />
        </div>
        
        <div className="w-1/3 border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white">Output</h3>
          </div>
          <div className="p-4">
            <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">
              {output || 'Run your code to see the output here...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTerminal = () => (
    <div className="h-full bg-gray-900 text-green-400 p-4 font-mono">
      <div className="mb-4">
        <p>Dire-Dev Terminal v1.0</p>
        <p>Type 'help' for available commands</p>
      </div>
      <div className="flex items-center">
        <span className="text-blue-400">dire-dev@terminal:~$</span>
        <input
          type="text"
          className="flex-1 bg-transparent ml-2 focus:outline-none text-green-400"
          placeholder="Enter command..."
        />
      </div>
    </div>
  );

  const renderAPITester = () => (
    <div className="h-full flex flex-col">
      <div className="p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-medium text-gray-900 dark:text-white">API Testing Tool</h3>
      </div>
      <div className="flex-1 p-4">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <select className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
            <input
              type="text"
              placeholder="Enter API endpoint URL..."
              className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
              Send
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Headers</h4>
              <textarea
                placeholder="Content-Type: application/json"
                className="w-full h-32 p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Request Body</h4>
              <textarea
                placeholder='{"key": "value"}'
                className="w-full h-32 p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Response</h4>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 h-40 overflow-y-auto">
              <p className="text-gray-500 dark:text-gray-400">Response will appear here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Dev Tools</h2>
        </div>
        
        <div className="p-4">
          <div className="space-y-2">
            {tools.map(tool => (
              <button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  activeTab === tool.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <tool.icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">{tool.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{tool.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center space-x-2 w-full p-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {activeTab === 'editor' && renderEditor()}
        {activeTab === 'terminal' && renderTerminal()}
        {activeTab === 'api' && renderAPITester()}
      </div>
    </div>
  );
};

export default DevToolsPage;