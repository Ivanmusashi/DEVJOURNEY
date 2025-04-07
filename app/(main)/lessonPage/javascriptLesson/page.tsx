'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const JavaScriptLessonPage = () => {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#0A0F1D' }}>
      <div className="max-w-3xl mx-auto bg-[#0A0F1D] border border-cyan-700 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">JavaScript Lesson</h1>
        <p className="text-white mb-6 text-lg">
          Welcome to the JavaScript lesson! ✨<br />
          JavaScript is a powerful scripting language used to create dynamic web experiences. Let's explore the core concepts together!
        </p>

        <div className="space-y-8 text-white">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">📘 Topics Covered:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Variables & Data Types</li>
              <li>Functions and Scope</li>
              <li>Arrays & Objects</li>
              <li>DOM Manipulation</li>
              <li>Events and Listeners</li>
              <li>Asynchronous JavaScript (Promises, async/await)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">💡 Tip:</h2>
            <p>
              Practice by building small interactive web apps — like to-do lists or calculators — and play around in the browser console!
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

export default JavaScriptLessonPage
