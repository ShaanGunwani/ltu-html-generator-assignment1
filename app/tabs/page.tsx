'use client';

import { useState, useEffect } from 'react';

interface Tab {
  id: string;
  heading: string;
  content: string;
}

export default function TabsPage() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', heading: 'Tab 1', content: 'Content for tab 1' },
    { id: '2', heading: 'Tab 2', content: 'Content for tab 2' },
    { id: '3', heading: 'Tab 3', content: 'Content for tab 3' }
  ]);
  const [activeTab, setActiveTab] = useState('1');
  const [output, setOutput] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  // Load tabs from localStorage on component mount
  useEffect(() => {
    const savedTabs = localStorage.getItem('htmlGeneratorTabs');
    if (savedTabs) {
      try {
        const parsedTabs = JSON.parse(savedTabs);
        if (Array.isArray(parsedTabs) && parsedTabs.length > 0) {
          setTabs(parsedTabs);
          setActiveTab(parsedTabs[0].id);
        }
      } catch (error) {
        console.error('Error loading tabs from localStorage:', error);
      }
    }
  }, []);

  // Save tabs to localStorage whenever tabs change
  useEffect(() => {
    if (tabs.length > 0) {
      localStorage.setItem('htmlGeneratorTabs', JSON.stringify(tabs));
    }
  }, [tabs]);

  const addTab = () => {
    if (tabs.length >= 15) {
      alert('Maximum of 15 tabs allowed');
      return;
    }
    
    const newId = Date.now().toString();
    const newTab: Tab = {
      id: newId,
      heading: `Tab ${tabs.length + 1}`,
      content: `Content for tab ${tabs.length + 1}`
    };
    
    setTabs([...tabs, newTab]);
    setActiveTab(newId);
  };

  const removeTab = (tabId: string) => {
    if (tabs.length <= 1) {
      alert('At least one tab is required');
      return;
    }
    
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  const updateTabHeading = (tabId: string, newHeading: string) => {
    setTabs(tabs.map(tab => 
      tab.id === tabId ? { ...tab, heading: newHeading } : tab
    ));
  };

  const updateTabContent = (tabId: string, newContent: string) => {
    setTabs(tabs.map(tab => 
      tab.id === tabId ? { ...tab, content: newContent } : tab
    ));
  };

  const generateHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Tabs</title>
    <style>
        .tab-container {
            width: 100%;
            max-width: 800px;
            margin: 20px auto;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        .tab-header {
            background: #f5f5f5;
            border-bottom: 1px solid #ccc;
            display: flex;
            flex-wrap: wrap;
        }
        .tab-button {
            padding: 12px 20px;
            border: none;
            background: transparent;
            cursor: pointer;
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
            font-size: 14px;
            font-weight: 500;
        }
        .tab-button:hover {
            background: rgba(0, 123, 255, 0.05);
        }
        .tab-button.active {
            border-bottom-color: #007bff;
            background: rgba(0, 123, 255, 0.1);
            color: #007bff;
        }
        .tab-content {
            padding: 20px;
            min-height: 150px;
            background: white;
            line-height: 1.6;
        }
        .tab-panel {
            display: none;
        }
        .tab-panel.active {
            display: block;
        }
        @media (max-width: 600px) {
            .tab-button {
                padding: 10px 16px;
                font-size: 13px;
            }
            .tab-content {
                padding: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="tab-container">
        <div class="tab-header">
${tabs.map((tab, index) => `            <button class="tab-button${index === 0 ? ' active' : ''}" onclick="openTab(event, '${tab.id}')">${tab.heading}</button>`).join('\n')}
        </div>
        <div class="tab-content">
${tabs.map((tab, index) => `            <div id="${tab.id}" class="tab-panel${index === 0 ? ' active' : ''}">${tab.content}</div>`).join('\n')}
        </div>
    </div>

    <script>
        function openTab(evt, tabId) {
            var i, tabcontent, tablinks;
            
            // Hide all tab panels
            tabcontent = document.getElementsByClassName("tab-panel");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }
            
            // Remove active class from all buttons
            tablinks = document.getElementsByClassName("tab-button");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            
            // Show selected tab and mark button as active
            document.getElementById(tabId).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
    </script>
</body>
</html>`;

    setOutput(html);
    setShowOutput(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      alert('HTML code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = output;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('HTML code copied to clipboard!');
    }
  };

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            HTML5 Tabs Generator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Create up to 15 interactive tabs with customizable content
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tab Editor */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Tab Configuration
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={addTab}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors duration-200 disabled:opacity-50"
                    disabled={tabs.length >= 15}
                    aria-label="Add new tab"
                  >
                    + Add Tab
                  </button>
                  <span className="text-sm text-gray-500 dark:text-gray-400 px-2 py-1">
                    {tabs.length}/15
                  </span>
                </div>
              </div>

              {/* Tab Headers */}
              <div className="flex flex-wrap gap-2 mb-6 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                {tabs.map((tab) => (
                  <div key={tab.id} className="flex items-center">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500'
                      }`}
                    >
                      {tab.heading}
                    </button>
                    {tabs.length > 1 && (
                      <button
                        onClick={() => removeTab(tab.id)}
                        className="ml-1 text-red-500 hover:text-red-700 text-sm"
                        aria-label={`Remove ${tab.heading}`}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Tab Editor Form */}
              {currentTab && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tab Heading
                    </label>
                    <input
                      type="text"
                      value={currentTab.heading}
                      onChange={(e) => updateTabHeading(currentTab.id, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter tab heading"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tab Content
                    </label>
                    <textarea
                      value={currentTab.content}
                      onChange={(e) => updateTabContent(currentTab.id, e.target.value)}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter tab content"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={generateHTML}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Generate HTML Output
              </button>
            </div>
          </div>

          {/* Preview and Output */}
          <div className="space-y-6">
            {/* Live Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Live Preview
              </h2>
              
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
                <div className="flex bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 text-sm font-medium border-b-3 transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      {tab.heading}
                    </button>
                  ))}
                </div>
                
                <div className="p-4 bg-white dark:bg-gray-800 min-h-[150px]">
                  {currentTab && (
                    <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                      {currentTab.content}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* HTML Output */}
            {showOutput && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Generated HTML Code
                  </h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={copyToClipboard}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
                    >
                      Copy Code
                    </button>
                    <button
                      onClick={() => setShowOutput(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
                    >
                      Hide
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-auto max-h-96">
                  <pre className="text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-all">
                    {output}
                  </pre>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Instructions:</strong> Copy the code above and paste it into a new file with a .html extension 
                    (e.g., tabs.html). The file will open in any web browser and work perfectly in MOODLE LMS.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            How to Use
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Configure Tabs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Add, remove, and edit tabs using the controls above. Change headings and content as needed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Generate Code</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Click "Generate HTML Output" to create clean HTML5 code with inline CSS.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Use in MOODLE</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Copy the generated code and paste it directly into MOODLE LMS or save as an HTML file.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Features:</h3>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• Up to 15 tabs supported</li>
              <li>• Tabs automatically saved to localStorage</li>
              <li>• Responsive design works on all devices</li>
              <li>• Clean HTML5 output with inline CSS only</li>
              <li>• No external dependencies required</li>
              <li>• Fully compatible with MOODLE LMS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}