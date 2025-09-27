'use client';

const STUDENT_NAME = "Shaan Kishore Gunwani"; 
const STUDENT_NUMBER = "22586489"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} LTU HTML Generator. All rights reserved.
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right">
            <div>Student: {STUDENT_NAME}</div>
            <div>ID: {STUDENT_NUMBER}</div>
            <div>Date: {currentDate}</div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-500 text-center">
            Built with Next.js for CSE3CWA/CSE5006 | La Trobe University
          </div>
        </div>
      </div>
    </footer>
  );
}