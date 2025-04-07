'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const JavaLessonPage = () => {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#0A0F1D' }}>
      <div className="max-w-3xl mx-auto bg-[#0A0F1D] border border-cyan-700 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">Java Lesson</h1>
        <p className="text-white mb-6 text-lg">
          Welcome to the Java lesson! 🚀 <br />
          Here you'll learn the basics of Java programming, from variables and data types to OOP concepts and building real-world applications.
        </p>

        <div className="space-y-8 text-white">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">📘 Topics Covered:</h2>
            <ul className="list-disc list-inside space-y-1 text-white">
              <li>Introduction to Java</li>
              <li>Data Types and Variables</li>
              <li>Control Flow (if/else, loops)</li>
              <li>Object-Oriented Programming</li>
              <li>Java Collections</li>
              <li>Basic File I/O</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">💡 Tip:</h2>
            <p>
              Practice writing small Java programs daily to build a strong foundation. Use an IDE like IntelliJ or VSCode with the Java extension.
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

export default JavaLessonPage
