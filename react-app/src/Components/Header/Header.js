import './Header.css';
import React from 'react';

function Header() {
  return (
    <div className="Header">
      <h1>Rein Urmet</h1>
      <p>Software Engineer</p>
      <p>Estonia, Tartu</p>
      <a href="../CV_Rein_Urmet.pdf" download class="download-btn">Download My CV</a>
      <div class="socials">
            <a href="https://www.instagram.com/reinurmet/" target="_blank">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://github.com/ReinUrmet" target="_blank">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" alt="LinkedIn" />
            </a>
          </div>

    </div>
  );
}

export default Header;
