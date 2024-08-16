import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function App() {
  const [code, setCode] = useState('');
  const [theme, setTheme] = useState('vs-dark');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Copied');

    });
  };

  const toggleTheme = () => {
    setTheme(theme === 'vs-dark' ? 'vs-light' : 'vs-dark');
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Editor</h1>
        <div>
          <button
            onClick={copyToClipboard}
            className="p-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 transition mr-2"
          >
            Copy Snippet
          </button>
          <button
            onClick={toggleTheme}
            className="p-2  px-4 bg-gray-700 text-white rounded hover:bg-gray-600  transition"
          >
            Theme
          </button>
        </div>
      </header>
      <div className="flex-grow">
        <Editor
          height="calc(100vh - 80px)"
          defaultLanguage="javascript"
          value={code}
          onChange={handleEditorChange}
          theme={theme}
          options={{
            fontSize: 16,
            wordWrap: 'on',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}

export default App;
