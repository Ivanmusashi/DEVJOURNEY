"use client";

import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import axios from "axios";

const LANGUAGE_VERSIONS: Record<"javascript" | "typescript" | "python" | "java" | "csharp" | "php" | "cpp", string> = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  cpp: "10.2.0",
};

const CODE_SNIPPETS: Record<keyof typeof LANGUAGE_VERSIONS, string> = {
  javascript: `function greet(name) {\n  console.log("Hello, " + name + "!");\n}\n\ngreet("Alex");`,
  typescript: `type Params = { name: string; }\n\nfunction greet(data: Params) {\n  console.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });`,
  python: `def greet(name):\n  print("Hello, " + name + "!")\n\ngreet("Alex")`,
  java: `public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}`,
  csharp: `using System;\n\nnamespace HelloWorld {\n  class Hello {\n    static void Main(string[] args) {\n      Console.WriteLine("Hello World in C#");\n    }\n  }\n}`,
  php: `<?php\n\n$name = 'Alex';\necho $name;`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello, C++!" << endl;\n  return 0;\n}`,
};

const executeCode = async (language: keyof typeof LANGUAGE_VERSIONS, sourceCode: string) => {
  const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
    language,
    version: LANGUAGE_VERSIONS[language],
    files: [{ content: sourceCode }],
  });
  return response.data;
};

const IdePage = () => {
  const editorRef = useRef<any>(null); // Provide an initial value of null
  const [language, setLanguage] = useState<keyof typeof LANGUAGE_VERSIONS>("javascript");
  const [code, setCode] = useState(CODE_SNIPPETS["javascript"]);
  const [output, setOutput] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output?.split("\n"));
      setIsError(!!result.stderr);
    } catch (err: any) {
      setOutput([err.message || "Failed to run code."]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col px-6 py-10 gap-4 bg-gray-900 min-h-[95vh] my-auto text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">CODE EDITOR</h1>

      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="language" className="text-lg font-medium text-white">
          Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => {
            const lang = e.target.value as keyof typeof LANGUAGE_VERSIONS;
            setLanguage(lang);
            setCode(CODE_SNIPPETS[lang]);
          }}
          className="bg-gray-800 border border-gray-600 text-white text-sm px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {Object.entries(LANGUAGE_VERSIONS).map(([lang, version]) => (
            <option key={lang} value={lang}>
              {lang} ({version})
            </option>
          ))}
        </select>
        <button
          onClick={runCode}
          disabled={isLoading}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition disabled:opacity-50"
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 w-full">
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language === "cpp" ? "cpp" : language}
            value={code}
            onMount={(editor) => (editorRef.current = editor)}
            onChange={(value) => setCode(value || "")}
            options={{ minimap: { enabled: false } }}
          />
        </div>
        <div className="lg:w-1/2 w-full border border-gray-700 p-4 rounded-md bg-gray-800 overflow-y-auto h-[75vh]">
          <p className="text-lg font-semibold mb-2 text-white">Output:</p>
          <pre
            className={`text-sm whitespace-pre-wrap ${
              isError ? "text-red-400" : "text-green-200"
            }`}
          >
            {output ? output.map((line, idx) => <div key={idx}>{line}</div>) : "Click Run to execute code"}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default IdePage;