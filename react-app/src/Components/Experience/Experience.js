import React, { useEffect } from 'react';
import './Experience.css';

function Experience() {
  
  useEffect(() => {
    filterSelection('all');
  }, []);

  
  function filterSelection(c) {

    const panels = document.querySelectorAll('.ExperienceSection > div');
    panels.forEach((panel) => {
      if (c === 'all' || panel.classList.contains(c)) {
        panel.classList.add('show');
      } else {
        panel.classList.remove('show');
      }
    });

    // buttons
    const btns = document.getElementsByClassName('experienceButton');
    Array.from(btns).forEach((btn) => {
      const label = btn.textContent.trim().toLowerCase();
      const match = c === 'all' ? 'all' : c.toLowerCase();
      btn.classList.toggle('active', label === match);
    });
  }

  return (
    <div className="Experience">
      <div className="experienceButtonContainer">
        <button
          className="experienceButton"
          onClick={() => filterSelection('Work')}
        >
          Work
        </button>
        <button
          className="experienceButton"
          onClick={() => filterSelection('Education')}
        >
          Education
        </button>
      </div>

      <div className="ExperienceSection">
        <div className="Work">
          <h1>Work</h1>
        </div>
        <div className="Education">
        <h1>Education</h1>
        </div>
      </div>
    </div>
  );
}

export default Experience;
