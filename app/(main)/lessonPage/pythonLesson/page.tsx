'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const PythonLessonPage = () => {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#0A0F1D' }}>
      <div className="max-w-3xl mx-auto bg-[#0A0F1D] border border-cyan-700 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">Python Lesson</h1>
        <p className="text-white mb-6 text-lg">
          Welcome to the Python lesson! 🐍<br />
          Python is a powerful and easy-to-learn language, perfect for beginners and pros alike. Let’s dive into its clean syntax and versatility.
        </p>

        <div className="space-y-8 text-white">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">📘 Topics Covered:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Introduction & Syntax</li>
              <li>Variables, Data Types, and Operators</li>
              <li>Control Flow (if/else, loops)</li>
              <li>Functions and Modules</li>
              <li>Lists, Dictionaries, and Sets</li>
              <li>Working with Files</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">💡 Tip:</h2>
            <p>
              Python is beginner-friendly. Practice by building small apps like a calculator, to-do list, or number guessing game using only the console.
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

export default PythonLessonPage
