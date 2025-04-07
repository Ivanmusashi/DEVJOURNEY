'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CppLessonPage = () => {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#0A0F1D' }}>
      <div className="max-w-3xl mx-auto bg-[#0A0F1D] border border-cyan-700 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">C++ Lesson</h1>
        <p className="text-white mb-6 text-lg">
          Welcome to the C++ lesson! 🚀 <br />
          This course will walk you through the fundamentals of C++ programming, including memory management, OOP, and standard libraries.
        </p>

        <div className="space-y-8 text-white">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">📘 Topics Covered:</h2>
            <ul className="list-disc list-inside space-y-1 text-white">
              <li>Basic Syntax & Structure</li>
              <li>Variables & Data Types</li>
              <li>Control Statements</li>
              <li>Functions & Scope</li>
              <li>Object-Oriented Programming</li>
              <li>Pointers and Memory Management</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">💡 Tip:</h2>
            <p>
              Master C++ by practicing small projects like calculators, games, and using competitive programming platforms like LeetCode or Codeforces.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/lessonPage">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white transition">
              Back to Lessons
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CppLessonPage
