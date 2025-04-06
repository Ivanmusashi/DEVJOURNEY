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
        title: "JavaScript",
        imageSrc: "/js.png",
      },
      {
        id: 2,
        title: "Java",
        imageSrc: "/java.png",
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
        title: "MYSQL",
        imageSrc: "/mysql.png",
      },
    ]);

    
    // Insert units for courseId: 2
await db.insert(schema.units).values([
  {
    id: 1,
    title: "Variables - Storing and managing data",
        description: " Varibles hold values that can be used and updated in a program. They help store nubers, text and orher type of data",
         courseId: 1, 
    order: 1,
  },
  {
    id: 2,
    title: "Data Types - Different Kinds of Values in Javascript",
    description: "Javascript has different types of values, classified into two main categories",
  courseId: 1, 
    order: 2,
  },
  {
    id: 3,
    title: "Operator - Performing Actions on Values",
    description: " Operators allow us to manipulate and compare values in javascript ",
    courseId: 1,
    order: 3,
  },
  {
    id: 4,
    title: "Functions - Reusable code blocks",
        description: "Funcrions allows us to write reusable code that perform a specific task",
        courseId: 1,
    order: 4,
  },
  {
    id: 5,
    title: "Conditional Statement - Making decision in code",
        description: "Conditional statement allow programs to execute different code based on condition",
       courseId: 1, 
    order: 5,
  },
  {
    id: 6,
    title: "Loops - Repeating code efficiently",
    description: "Loops allow us to repeat actions multiple times without writing a code over and over",
    courseId: 1, 
    order: 6,
  },
  {
    id: 7,
    title: "Events - Hnadling User Interactions ",
        description: "Event allow javascripts to respond to user action like clicking, typing or submitting a form ",
        courseId: 1, 
    order: 7,
  },
  {
    id: 8,
    title: "DOM Manipulation - Changing Webpage content with javascript ",
    description: "DOM (Documentational Object Model) manipulation allows javascript to modify html and css dynamically",
    courseId: 1,
    order: 8,
  },

]);


    // Insert lessons
    await db.insert(schema.lessons).values([
      //lesson 1
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "var, let, const",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "scope",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "hoisting",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "naming rules",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "reassignment",
      },


        //lesson 2
        {
          id: 6,
          unitId: 2,
          order: 1,
          title: "primitive types ",
        },
        {
          id: 7,
          unitId: 2,
          order: 2,
          title: "references type",
        },
        {
          id: 8,
          unitId: 2,
          order: 3,
          title: "type checking",
        },
        {
          id: 9,
          unitId: 2,
          order: 4,
          title: "type conversion",
        },
       
      //lesson 3
      {
        id: 10,
        unitId: 3,
        order: 1,
        title: "arithmetic ",
      },
      {
        id: 11,
        unitId: 3,
        order: 2,
        title: "comparison",
      },
      {
        id: 12,
        unitId: 3,
        order: 3,
        title: "logical",
      },
      {
        id: 13,
        unitId: 3,
        order: 4,
        title: "assignment",
      },
      {
        id: 14,
        unitId: 3,
        order: 5,
        title: "ternary operator",
      },
     

       
      //lesson 4
      {
        id: 15,
        unitId: 4,
        order: 1,
        title: "function declaration ",
      },
      {
        id: 16,
        unitId: 4,
        order: 2,
        title: "function expression",
      },
      {
        id: 17,
        unitId: 4,
        order: 3,
        title: "arrow function",
      },
      {
        id: 18,
        unitId: 4,
        order: 4,
        title: "parameter and return values",
      },
      {
        id: 19,
        unitId: 4,
        order: 5,
        title: "default parameter",
      },
      {
        id: 20,
        unitId: 4,
        order: 6,
        title: "callback function",
      },
      
   //lesson 5
   {
    id: 21,
    unitId: 5,
    order: 1,
    title: "if else ",
  },
  {
    id: 22,
    unitId: 5,
    order: 2,
    title: "switch statement",
  },
  {
    id: 23,
    unitId: 5,
    order: 3,
    title: "truth and false values",
  },
  {
    id: 24,
    unitId: 5,
    order: 4,
    title: "short-circuit evaluation",
  },

  //lesson 6
  {
    id: 25,
    unitId: 6,
    order: 1,
    title: "for loop ",
  },
  {
    id: 26,
    unitId: 6,
    order: 2,
    title: "while loop",
  },
  {
    id: 27,
    unitId: 6,
    order: 3,
    title: "do while loop",
  },
  {
    id: 28,
    unitId: 6,
    order: 4,
    title: "for of",
  },
  {
    id: 29,
    unitId: 6,
    order: 5,
    title: "for in",
  },
  {
    id: 30,
    unitId: 6,
    order: 6,
    title: "break and continue",
  },

  //lesson 7
  {
    id: 31,
    unitId: 7,
    order: 1,
    title: "add event listener",
  },
  {
    id: 32,
    unitId: 7,
    order: 2,
    title: "mouse event",
  },
  {
    id: 33,
    unitId: 7,
    order: 3,
    title: "keyboard event",
  },
  {
    id: 34,
    unitId: 7,
    order: 4,
    title: "form event",
  },

  //lesson 8
  {
    id: 35,
    unitId: 8,
    order: 1,
    title: "add event listener",
  },
  {
    id: 36,
    unitId: 8,
    order: 2,
    title: "mouse event",
  },
  {
    id: 37,
    unitId: 8,
    order: 3,
    title: "keyboard event",
  },
  {
    id: 38,
    unitId: 8,
    order: 4,
    title: "form event",
  },
  {
    id: 39,
    unitId: 8,
    order: 5,
    title: "form event",
  },

    ]);

    // Insert challenges
    await db.insert(schema.challenges).values([
      //varibles
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "Which of the following is true about let?",
      },
      {
        id: 2,
        lessonId: 1,
        type: "SELECT",
        order: 2,
        question: "Which keyword is recomended for declaring variablea that are reassigned frequently?",
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: "what happen if you declare a variable using const without assigning a value?",
      },
      {
        id: 4,
        lessonId: 1,
        type: "SELECT",
        order: 4,
        question: "which keyword should you use for constants that are object but need proper updates?",
      },
      {
        id: 5,
        lessonId: 1,
        type: "SELECT",
        order: 5,
        question: "why is let prefered over var?",
      },
      {
        id: 6,
        lessonId: 1,
        type: "SELECT",
        order: 6,
        question: "which varibles declaration is blocked-scoped and cannot be declared within the same code ?",
      },
      {
        id: 7,
        lessonId: 1,
        type: "SELECT",
        order: 7,
        question: "what happen when you try to reassign a const variable?",
      },
      {
        id: 8,
        lessonId: 1,
        type: "SELECT",
        order: 8,
        question: "which keyword is function scoped and can be declared?",
      },
      {
        id: 9,
        lessonId: 1,
        type: "SELECT",
        order: 9,
        question: "which variable type should be used if you are storing data that wont be modified and prefer strict coding practice?",
      },
//scope

      {
        id: 10,
        lessonId: 2,
        type: "SELECT",
        order: 1,
     question: "which of the following is true regarding block scope",
     },
 {
        id: 11,
        lessonId: 2,
        type: "SELECT",
        order: 2,
        question: "what is the scope varibales declared using let inside a block?",
      },
      {
        id: 12,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: "which statement best descrribe for global scope ",
      },
      {
        id: 13,
        lessonId: 2,
        type: "SELECT",
        order: 4,
        question: "Which variables declaration would be accessible outside of a block ",
      },
      {
        id: 14,
        lessonId: 2,
        type: "SELECT",
        order: 5,
         question: "what is the global scope in javascript ",
       },
      {
        id: 15,
        lessonId: 2,
        type: "SELECT",
        order: 6,
        question: "which scope is created when a function is declared?",
      },
      {
        id: 16,
        lessonId: 2,
        type: "SELECT",
        order: 7,
         question: " what type of scope is does let created within a block of code ",
       },
      {
        id: 17,
        lessonId: 2,
        type: "SELECT",
        order: 8,
        question: "which variables are accessible inside a nested function",
      },
      {
        id: 18,
        lessonId: 2,
        type: "SELECT",
        order: 9,
        question: "what happen when a variable is declared without a var, let, const?",
      },
      {
        id: 19,
        lessonId: 2,
        type: "SELECT",
        order: 10,
       question: " which scope is the most restrictive",
      },


      {
        id: 20,
        lessonId: 2,
        type: "SELECT",
        order: 11,
       question: "can a variables declared inside a block using let be accessed outside of that block ",
      },



     


    ]);

    // Insert challenge options
    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        correct: true,
        text: "it has a blocked code",
      },
      {
        id: 2,
        challengeId: 1,
        correct: false,
        text: "it can be redeclared within the same scope",
      },
      {
        id: 3,
        challengeId: 1,
        correct: false,
        text: "it is not hoisted",
      },
      {
        id: 4,
        challengeId: 1,
        correct: true,
        text: "it is function scoped",
      },



      {
        id: 5,
        challengeId: 2,
        correct: false,
        text: "const",
      },
      {
        id: 6,
        challengeId: 2,
        correct: true,
        text: "let",
      },
      {
        id: 7,
        challengeId: 2,
        correct: false,
        text: "var",
      },
      {
        id: 8,
        challengeId: 2,
        correct: false,
        text: "static",
      },


      {
        id: 9,
        challengeId: 3,
        correct: false,
        text: "it will defalaut to null",
      },
      {
        id: 10,
        challengeId: 3,
        correct: true,
        text: "it will throw an error",
      },
      {
        id: 11,
        challengeId: 3,
        correct: false,
        text: "it will be assigned undefined",
      },
      {
        id: 12,
        challengeId: 3,
        correct: false,
        text: "it will create an empty variable",
      },

      
      {
        id: 13,
        challengeId: 4,
        correct: false,
        text: "let",
      },
      {
        id: 14,
        challengeId: 4,
        correct: true,
        text: "const",
      },
      {
        id: 15,
        challengeId: 4,
        correct: false,
        text: "var",
      },
      {
        id: 16,
        challengeId: 4,
        correct: false,
        text: "final",
      },
     

      
      {
        id: 17,
        challengeId: 5,
        correct: false,
        text: "let is globally scoped",
      },
      {
        id: 18,
        challengeId: 5,
        correct: false,
        text: "let has better readability",
      },
      {
        id: 19,
        challengeId: 5,
        correct: false,
        text: "let support function level scoped",
      },
      {
        id: 20,
        challengeId: 5,
        correct: true,
        text: "let prevent accidental declaration",
      },

      
      {
        id: 21,
        challengeId: 6,
        correct: false,
        text: "var",
      },
      {
        id: 22,
        challengeId: 6,
        correct: false,
        text: "let",
      },
      {
        id: 23,
        challengeId: 6,
        correct: false,
        text: "const",
      },
      {
        id: 24,
        challengeId: 6,
        correct: true,
        text: "both b and c",
      },

      
      {
        id: 25,
        challengeId: 7,
        correct: true,
        text: "it throw an eror",
      },
      {
        id: 26,
        challengeId: 7,
        correct: false,
        text: "it update the value",
      },
      {
        id: 27,
        challengeId: 7,
        correct: false,
        text: "it set the value to undefined",
      },
      {
        id: 28,
        challengeId: 7,
        correct: false,
        text: "it create a new variable",
      },

      
      {
        id: 29,
        challengeId: 8,
        correct: true,
        text: "var",
      },
      {
        id: 30,
        challengeId: 8,
        correct: false,
        text: "let",
      },
      {
        id: 31,
        challengeId: 8,
        correct: false,
        text: "const",
      },
      {
        id: 32,
        challengeId: 8,
        correct: false,
        text: "none of the above",
      },

      
      {
        id: 33,
        challengeId: 9,
        correct: false,
        text: "var",
      },
      {
        id: 34,
        challengeId: 9,
        correct: false,
        text: "let",
      },
      {
        id: 35,
        challengeId: 9,
        correct: true,
        text: "const",
      },
      {
        id: 36,
        challengeId: 9,
        correct: false,
        text: "none of the above",
      },
      //button 2
       {
        id: 37,
        challengeId: 10,
        correct: false,
        text: "var is a blocked scope",
      },
      {
        id: 38,
        challengeId: 10,
        correct: false,
        text: "let and const are function scope",
      },
      {
        id: 39,
        challengeId: 10,
        correct: true,
        text: "const cannot be reassigned but its object properties can be mutated",
      },
      {
        id: 40,
        challengeId: 10,
        correct: false,
        text: "variables declared with letare hoisted and initialized with undefined",
      },

       {
        id: 41,
        challengeId: 11,
        correct: false,
        text: "global scope",
      },
      {
        id: 42,
        challengeId: 11,
        correct: true,
        text: "block scope",
      },
      {
        id: 43,
        challengeId: 11,
        correct: false,
        text: "function scope",
      },
      {
        id: 44,
        challengeId: 11,
        correct: false,
        text: "no scope",
      },

      {
        id: 45,
        challengeId: 12,
        correct: true,
        text: "variable can be accessed from any part of code ",
      },
      {
        id: 46,
        challengeId: 12,
        correct: false,
        text: "variable are accessibles only within a function",
      },
      {
        id: 47,
        challengeId: 12,
        correct: false,
        text: "varibles are limited to a block",
      },
      {
        id: 48,
        challengeId: 12,
        correct: false,
        text: "variables are cleared once a function end ",
      },

      {
        id: 49,
        challengeId: 13,
        correct: true,
        text: "only var",
      },
      {
        id: 50,
        challengeId: 13,
        correct: false,
        text: "only let",
      },
      {
        id: 51,
        challengeId: 13,
        correct: false,
        text: "both var and let",
      },
      {
        id: 52,
        challengeId: 13,
        correct: false,
        text: "neither var nor let",
      },

      {
        id: 53,
        challengeId: 14,
        correct: false,
        text: "the scope within a scope ",
      },
      {
        id: 54,
        challengeId: 14,
        correct: false,
        text: "the scope within a block",
      },
      {
        id: 55,
        challengeId: 14,
        correct: true,
        text: "the outermost scope where variables are accessible throughout the code",
      },
      {
        id: 56,
        challengeId: 14,
        correct: false,
        text: "the scope of variables declared using let ",
      },

      {
        id: 57,
        challengeId: 15,
        correct: false,
        text: "global scope",
      },
      {
        id: 58,
        challengeId: 15,
        correct: false,
        text: "block scope",
      },
      {
        id: 59,
        challengeId: 15,
        correct: true,
        text: "function scope",
      },
      {
        id: 60,
        challengeId: 15,
        correct: false,
        text: "module scope",
      },

      {
        id: 61,
        challengeId: 16,
        correct: false,
        text: "global scope ",
      },
      {
        id: 62,
        challengeId: 16,
        correct: true,
        text: "block scope",
      },
      {
        id: 63,
        challengeId: 16,
        correct: false,
        text: "function scope",
      },
      {
        id: 64,
        challengeId: 16,
        correct: false,
        text: "lexical scope",
      },

      {
        id: 65,
        challengeId: 17,
        correct: false,
        text: "variables declared globally ",
      },
      {
        id: 66,
        challengeId: 17,
        correct: false,
        text: "variable declared in the outer function",
      },
      {
        id: 67,
        challengeId: 17,
        correct: false,
        text: "variables declared using var",
      },
      {
        id: 68,
        challengeId: 17,
        correct: true,
        text: "all of the above",
      },

      {
        id: 69,
        challengeId: 18,
        correct: false,
        text: "it throw an error ",
      },
      {
        id: 70,
        challengeId: 18,
        correct: true,
        text: "it is declared globally",
      },
      {
        id: 71,
        challengeId: 18,
        correct: false,
        text: "it is declared within the current block scope",
      },
      {
        id: 72,
        challengeId: 18,
        correct: false,
        text: "it is ignore",
      },

      {
        id: 73,
        challengeId: 19,
        correct: false,
        text: "global scope ",
      },
      {
        id: 74,
        challengeId: 19,
        correct: false,
        text: "function scope",
      },
      {
        id: 75,
        challengeId: 19,
        correct: true,
        text: "block scope",
      },
      {
        id: 76,
        challengeId: 19,
        correct: false,
        text: "module scope",
      },

      {
        id: 77,
        challengeId: 20,
        correct: false,
        text: "yes ",
      },
      {
        id: 78,
        challengeId: 20,
        correct: true,
        text: "no",
      },
      {
        id: 79,
        challengeId: 20,
        correct: false,
        text: "only if it is a global variables",
      },
      {
        id: 80,
        challengeId: 20,
        correct: false,
        text: "only if it is a function variables",
      },






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
