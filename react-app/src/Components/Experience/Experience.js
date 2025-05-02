import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [filter, setFilter] = useState('Work');

  const sections = [
    { key: 'Work', content: <h1>Work</h1>},
    { key: 'Education', content: <h1>Education</h1> },
  ];

  return (
    <div className="Experience">
      <div className='column'></div>
      <div className='innerExperience column'>
        <div className="experienceButtonContainer">
          {['Work', 'Education'].map((label) => (
            <button
              key={label}
              className={`experienceButton${filter === label ? ' active' : ''}`}
              onClick={() => setFilter(label)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="ExperienceSection">
          {sections
            .filter(section => section.key === filter)
            .map(section => (
              <div key={section.key} className={section.key}>
                {section.content}
              </div>
            ))
          }
        </div>
      </div>
      <div className='column'></div>
    </div>
  );
}

export default Experience;
