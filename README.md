# LTU HTML Generator

A Next.js web application for creating the HTML5 components with the inline CSS for the MOODLE LMS. It is made for the CSE3CWA Assignment 1 at the La Trobe University.

## Project Overview

This web application lets the users to make interactive HTML5 tabs with a visual editor and give a clean and dependency-free HTML code for the MOODLE LMS. The application has a modern and an accessible interface with the dark/light themes, responsive design, and the localStorage endurance.

## Features

### Core Functionality
- Make up to 15 interactive tabs with the custom content
- Real-time presentation of the tab configurations
- LocalStorage perservance for the tab configurations
- Export the clean HTML with the inline CSS

### User Interface
- Light, Dark, and Auto theme modes
- Responsive Design - Mobile-first approach with the hamburger menu
- CSS Transform-based hamburger menu animation
- Cookie-based page remembrance

### Technical Features
- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks
- Zero Dependencies (the generated HTML needs no external libraries)

## Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ShaanGunwani/ltu-html-generator-assignment1.git
cd ltu-html-generator

# Install the dependencies
npm install

# Run the development server
npm run dev

# Open the browser
# Navigate to http://localhost:3000
```

### Build for the Production

```bash
npm run build
npm start
```

## Usage Guide

### Creating the Tabs
- Go to the Tabs page
- Click the + Add Tab to make the new tabs (up to 15 tabs can make)
- Select a tab to edit and change its heading and content
- Preview changes in real-time in the Live Preview section
- Click the Generate Advanced HTML Output to make the code
- Click the Copy Code to copy to the clipboard (can also download directly by clicking the download button)
- Paste into a .html file

### Theme Switching
- Click the theme toggle button in the header
- It cycles through Light - Dark - Auto
- The theme preference is then saved automatically

## Generated HTML Features

**The exported HTML has:**
- Valid HTML5 markup
- Inline CSS styling
- JavaScript for the functionality
- Responsive design with the media queries
- No external dependencies
- MOODLE LMS compatible

## Technologies Used
- Framework: Next.js
- Language: TypeScript
- UI Library: React
- Styling: Tailwind CSS
- State Management: React Hooks (useState, useEffect, useContext)
- Storage: LocalStorage API, Cookies API
- Build Tool: Next.js with the Turbopack

## Contributing
This is an academic project for educational purposes only.

## Author
**Student Name:** Shaan Kishore Gunwani  
**Student Number:** 22586489  
**Course:** CSE3CWA  
**Institution:** La Trobe University

## License
This project is created for academic purposes as part of Assignment 1 for CSE3CWA at La Trobe University.

## Acknowledgments
- La Trobe University Computer Science Department
- CSE3CWA Teaching Staff
- Next.js Documentation
- React Documentation

---

**Note:** This README gives a detailed and complete documentation for the LTU HTML Generator assignment. The application fully meets all the assignment needs and shows the professional web development practices by utilizing the modern technologies.
