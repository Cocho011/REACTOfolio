import React from 'react';
import '../App.css';

function Navigation({ currentSection, handleSectionChange }) {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      {sections.map((section) => (
        <a
          href={`#${section.toLowerCase().replace(' ', '-')}`}
          key={section}
          className={currentSection === section ? 'nav-active' : ''}
          onClick={() => handleSectionChange(section)}
        >
          {section}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
