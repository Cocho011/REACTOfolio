import React from 'react';
import Navigation from './Navigation';
import profilePic from '../assets/profile.jpg';
import '../App.css'; // Ensure the path is correct

function Header({ currentSection, handleSectionChange }) {
  return (
    <header className="header">
      <div className="header-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <Navigation currentSection={currentSection} handleSectionChange={handleSectionChange} />
      </div>
    </header>
  );
}

export default Header;
