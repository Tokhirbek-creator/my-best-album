import React, { useEffect } from 'react';
import './scroll.scss';

function ScrollUp() {
  useEffect(() => {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'bx-sun';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
    const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun');

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
    }

    themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
  }, []);

  return (
    <a href="#" className="scrollup" id="scroll-up">
      <i className="bx bx-up-arrow-alt scrollup__icon" />
    </a>
  );
}

export default ScrollUp;
