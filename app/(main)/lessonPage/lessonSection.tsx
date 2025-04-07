'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const lessons = [
  { name: 'JavaScript', path: '/lessonPage/javascriptLesson', image: '/js.png' },
  { name: 'Java', path: '/lessonPage/javaLesson', image: '/java.png' },
  { name: 'Python', path: '/lessonPage/pythonLesson', image: '/python.png' },
  { name: 'C++', path: '/lessonPage/cppLesson', image: '/c++.png' },
  { name: 'MySQL', path: '/lessonPage/mysqlLesson', image: '/mysql.png' },
]

const LessonSection = () => {
  const [selectedLesson, setSelectedLesson] = useState<{ name: string; path: string } | null>(null)

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-cyan-700 mb-6">Choose Your Lesson</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <Dialog key={lesson.name}>
            <DialogTrigger asChild>
              <div
                onClick={() => setSelectedLesson(lesson)}
                className="cursor-pointer p-6 rounded-2xl shadow-md border border-cyan-200 bg-white hover:bg-cyan-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 ease-in-out flex flex-col items-center text-center"
              >
                <Image
                  src={lesson.image}
                  alt={lesson.name}
                  width={80}
                  height={80}
                  className="mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold text-cyan-700">{lesson.name}</h3>
              </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-cyan-700 text-2xl">
                  {selectedLesson?.name} Lesson
                </DialogTitle>
              </DialogHeader>
              <p className="mb-4 text-sm text-gray-600">
                Ready to dive into {selectedLesson?.name}? Click below to begin your journey!
              </p>
              <Button
                className="bg-cyan-600 hover:bg-cyan-700 text-white transition"
                onClick={() => (window.location.href = selectedLesson?.path || '#')}
              >
                Go to {selectedLesson?.name} Lesson
              </Button>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

export default LessonSection
