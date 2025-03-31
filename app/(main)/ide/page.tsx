"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { Loader2 } from "lucide-react";

// Dynamically import Monaco Editor to prevent SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

const IDE = () => {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-dark");
  const [code, setCode] = useState("// Start coding here\n\nconsole.log('Hello World!');");
  const [consoleOutput, setConsoleOutput] = useState<{ text: string; error: boolean }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };

  const runCode = async () => {
    setLoading(true);
    setConsoleOutput([]);

    if (language === "javascript") {
      try {
        const logs: { text: string; error: boolean }[] = [];
        const originalConsoleLog = console.log;

        console.log = (...args) => {
          logs.push({ text: args.join(" "), error: false });
          originalConsoleLog(...args);
        };

        eval(code);

        console.log = originalConsoleLog;
        setConsoleOutput(logs);
      } catch (error: any) {
        setConsoleOutput([{ text: `Error: ${error.message}`, error: true }]);
      }
    } else {
      try {
        const response = await axios.post("/api/run", { language, code });
        setConsoleOutput([{ text: response.data.output, error: false }]);
      } catch (error: any) {
        setConsoleOutput([{ text: `Error: ${error.response?.data?.error || error.message}`, error: true }]);
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Toolbar */}
      <div className="flex p-4 bg-gray-800 gap-4 border-b border-gray-700">
        <select value={language} onChange={handleLanguageChange} className="bg-gray-700 p-2 rounded">
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="php">PHP</option>
        </select>

        <select value={theme} onChange={handleThemeChange} className="bg-gray-700 p-2 rounded">
          <option value="vs-dark">Dark</option>
          <option value="vs-light">Light</option>
        </select>

        <button
          onClick={runCode}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 flex items-center"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : "Run Code"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow flex-col md:flex-row">
        {/* Code Editor */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-gray-700">
          <MonacoEditor
            height="100%"
            language={language}
            theme={theme}
            value={code}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: true },
              fontSize: 16,
              wordWrap: "on",
              automaticLayout: true,
            }}
          />
        </div>

        {/* Console Output */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black p-4 overflow-y-auto">
          <div className="font-bold text-gray-300">Console Output:</div>
          {consoleOutput.length > 0 ? (
            consoleOutput.map((log, index) => (
              <div key={index} className={`text-sm ${log.error ? "text-red-400" : "text-green-400"}`}>
                {log.text}
              </div>
            ))
          ) : (
            <div className="text-gray-500">Run your code to see output here</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IDE;