'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const STUDENT_NUMBER = "22586489"; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTab = document.cookie
      .split('; ')
      .find(row => row.startsWith('activeTab='))
      ?.split('=')[1] || '/';
    
    setActiveTab(pathname || savedTab);
  }, [pathname]);

  useEffect(() => {
    document.cookie = `activeTab=${pathname}; path=/; max-age=31536000`;
  }, [pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Tabs', href: '/tabs' },
    { name: 'Escape Room', href: '/escape-room' },
    { name: 'Coding Races', href: '/coding-races' },
    { name: 'Court Room', href: '/court-room' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('auto');
    } else {
      setTheme('light');
    }
  };

  return (
    <header style={{ 
      backgroundColor: theme === 'dark' ? '#111827' : '#ffffff', 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      borderBottom: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`
    }}>
      <div style={{ 
        maxWidth: '80rem', 
        margin: '0 auto', 
        padding: '0 1rem' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: '4rem' 
        }}>
          {/* Student Number */}
          <div style={{ flexShrink: 0 }}>
            <span style={{ 
              fontSize: '0.875rem', 
              fontFamily: 'monospace', 
              color: theme === 'dark' ? '#d1d5db' : '#6b7280' 
            }}>
              {STUDENT_NUMBER}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div style={{ display: 'flex', gap: '2rem' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'color 0.2s',
                    color: pathname === item.href 
                      ? (theme === 'dark' ? '#60a5fa' : '#2563eb')
                      : (theme === 'dark' ? '#d1d5db' : '#374151'),
                    borderBottom: pathname === item.href ? '2px solid #2563eb' : 'none',
                    textDecoration: 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Theme Toggle & Hamburger Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                padding: '0.5rem',
                color: theme === 'dark' ? '#d1d5db' : '#374151',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'auto' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : theme === 'dark' ? (
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              style={{
                display: 'block',
                padding: '0.5rem',
                color: theme === 'dark' ? '#d1d5db' : '#374151',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              title="Toggle navigation menu"
            >
              <div style={{
                width: '25px',
                height: '3px',
                backgroundColor: 'currentColor',
                margin: '3px 0',
                transition: '0.3s',
                transform: isMenuOpen ? 'rotate(-45deg) translate(-6px, 6px)' : 'none'
              }}></div>
              <div style={{
                width: '25px',
                height: '3px',
                backgroundColor: 'currentColor',
                margin: '3px 0',
                transition: '0.3s',
                opacity: isMenuOpen ? '0' : '1'
              }}></div>
              <div style={{
                width: '25px',
                height: '3px',
                backgroundColor: 'currentColor',
                margin: '3px 0',
                transition: '0.3s',
                transform: isMenuOpen ? 'rotate(45deg) translate(-6px, -6px)' : 'none'
              }}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div style={{
        display: isMenuOpen ? 'block' : 'none',
        backgroundColor: theme === 'dark' ? '#111827' : '#ffffff',
        borderTop: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ padding: '0.5rem 1rem 0.75rem' }}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                display: 'block',
                padding: '0.5rem 0.75rem',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                borderRadius: '0.375rem',
                color: pathname === item.href 
                  ? (theme === 'dark' ? '#60a5fa' : '#2563eb')
                  : (theme === 'dark' ? '#d1d5db' : '#374151'),
                backgroundColor: pathname === item.href 
                  ? (theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)')
                  : 'transparent',
                textDecoration: 'none',
                margin: '0.125rem 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}