"use server";

import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    // Insert courses
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Java",
        imageSrc: "/java.png",
      },
      {
        id: 2,
        title: "JavaScript",
        imageSrc: "/js.png",
      },
      {
        id: 3,
        title: "Python",
        imageSrc: "/python.png",
      },
      {
        id: 4,
        title: "C++",
        imageSrc: "/c++.png",
      },
      {
        id: 5,
        title: "Css",
        imageSrc: "/css.png",
      },
    ]);

    // Insert units
    await db.insert(schema.units).values([
      {
        id: 1,
        title: "Introduction to Java",
        description: "Learn the basics of Java programming",
        courseId: 1,
        order: 1,
      },
      {
        id: 2,
        title: "Basics of JavaScript programming",
        description: "Variables, data types, operators, type conversion and coercion, control flow, and functions",
        courseId: 2,
        order: 2,
      },
    ]);

    // Insert lessons
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "First Java Program",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Second Java Program",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "Third Java Program",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "Fourth Java Program",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "Fifth Java Program",
      },
      {
        id: 6,
        unitId: 2,
        order: 1,
        title: "First JavaScript Program",
      },
      {
        id: 7,
        unitId: 2,
        order: 2,
        title: "Second JavaScript Program",
      },
      {
        id: 8,
        unitId: 2,
        order: 3,
        title: "Third JavaScript Program",
      },
      {
        id: 9,
        unitId: 2,
        order: 4,
        title: "Fourth JavaScript Program",
      },
      {
        id: 10,
        unitId: 2,
        order: 5,
        title: "Fifth JavaScript Program",
      },
    ]);

    // Insert challenges
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "What is the output of the following code?",
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: "What is the output of the following code?",
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: "What is the output of the following code?",
      },
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: "What is the output of the following code?",
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: "What is the output of the following code?",
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: "What is the output of the following code?",
      },
    ]);

    // Insert challenge options
    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/logo.jpg",
        correct: true,
        text: "hello world",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/logo.jpg",
        correct: false,
        text: "hello world!",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/logo.jpg",
        correct: false,
        text: "Hello world",
      },
      {
        id: 4,
        challengeId: 2,
        correct: true,
        text: "hello world",
      },
      {
        id: 5,
        challengeId: 2,
        correct: false,
        text: "hello world!",
      },
      {
        id: 6,
        challengeId: 2,
        correct: false,
        text: "Hello world",
      },
      {
        id: 7,
        challengeId: 3,
        imageSrc: "/logo.jpg",
        correct: true,
        text: "hello world",
      },
      {
        id: 8,
        challengeId: 3,
        imageSrc: "/logo.jpg",
        correct: false,
        text: "hello world!",
      },
      {id: 9, challengeId: 3, imageSrc: "/logo.jpg", correct: false, text: "Hello world",},
    ]);

    console.log("seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

// Call the main function to execute the seeding
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
