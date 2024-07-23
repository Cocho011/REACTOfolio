import React from 'react';
import '../App.css';
import resume1 from '../assets/resumepage1.png';
import resume2 from '../assets/resumepage2.png';

function Resume() {
  return (
    <section className="section">
      <h2>Carolina Ochoa, MBA, LSSGB</h2>
      <p>
        (786) 409-1470 • cocho011@fiu.edu • 2825 Main St, Apt 326, Buda, TX 78610 • 
        <a href="https://www.linkedin.com/in/carolina-ochoa-mba-lssgb-213bb032">LinkedIn</a>
      </p>
      <div className="resume-images">
        <img src={resume1} alt="Resume page 1" />
        <img src={resume2} alt="Resume page 2" />
      </div>
    </section>
  );
}

export default Resume;
