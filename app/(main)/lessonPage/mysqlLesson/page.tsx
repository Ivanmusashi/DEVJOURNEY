'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const MySQLLessonPage = () => {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#0A0F1D' }}>
      <div className="max-w-3xl mx-auto bg-[#0A0F1D] border border-cyan-700 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">MySQL Lesson</h1>
        <p className="text-white mb-6 text-lg">
          Welcome to the MySQL lesson! 🐬<br />
          MySQL is a popular relational database system. In this lesson, you'll learn how to store, retrieve, and manage data efficiently.
        </p>

        <div className="space-y-8 text-white">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">📘 Topics Covered:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>What is SQL & MySQL?</li>
              <li>Creating and Managing Databases</li>
              <li>Basic CRUD Operations (SELECT, INSERT, UPDATE, DELETE)</li>
              <li>Table Joins and Relationships</li>
              <li>Using WHERE, ORDER BY, GROUP BY</li>
              <li>Indexing and Performance Tips</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">💡 Tip:</h2>
            <p>
              Use tools like phpMyAdmin, MySQL Workbench, or even terminal commands to practice writing SQL queries and managing databases.
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

export default MySQLLessonPage
