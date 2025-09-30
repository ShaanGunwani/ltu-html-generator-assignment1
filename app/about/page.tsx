'use client';

import { useState } from 'react';

const STUDENT_NAME = "Shaan Kishore Gunwani"; 
const STUDENT_NUMBER = "22586489"; 

export default function About() {

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About This Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn about the LTU HTML Generator and how to use this application 
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {STUDENT_NAME.split(' ').map(name => name[0]).join('')}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {STUDENT_NAME}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Student Number: {STUDENT_NUMBER}
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Course:</strong> CSE3CWA</p>
                <p><strong>University:</strong> La Trobe University</p>
                <p><strong>Assignment:</strong> Freelance Services Agreement (Assignment 1)</p>
                <p><strong>Semester:</strong> {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
    How to Use This Website - Video Tutorial
  </h2>
  
  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
    <iframe
      src="https://drive.google.com/file/d/1q6_3oYj3gy8nfahpivcEF2be0XCoLlWI/preview"
      className="absolute top-0 left-0 w-full h-full rounded-lg"
      allow="autoplay"
      title="Website Tutorial Video"
    ></iframe>
  </div>
  
  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
    <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
      7-minute walkthrough demonstrating all features and functionality
    </p>
  </div>
</div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
    Project Features
  </h2>

  <div className="grid md:grid-cols-5 gap-8">
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-6">
        User Interface Components
      </h3>


              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-3 h-3 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Navigation Bar with Tab System
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Responsive Header & Footer
                </li>
                <li className="flex items-center">
                  <svg className="w-2 h-2 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hamburger Menu with CSS Transform
                </li>
                <li className="flex items-center">
                  <svg className="w-2 h-2 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  About Page with Student Information
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Advanced Features
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dark/Light/Auto Theme System
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cookie-based Navigation Memory
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  LocalStorage for Tab Management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  HTML5 Code Generation
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Specifications
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Next.js 14.2.5</li>
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Server-Side Rendering</li>
                <li>Responsive Design</li>
                <li>Accessibility Compliant</li>
                <li>Progressive Enhancement</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Output</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Clean HTML5</li>
                <li>Inline CSS Only</li>
                <li>JavaScript Functions</li>
                <li>MOODLE Compatible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}