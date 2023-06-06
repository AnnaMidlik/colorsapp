import React from 'react';
import { Link } from 'react-router-dom';
import { ColorSlider } from './components/ColorSlider.jsx';
import { ColorTypeSelect } from './components/ColorTypeSelect.jsx';
import styles from './NavbarStyle';

export function Navbar({ level, setLevel, colorType, setColorType, showSlider }) {
  const { navbar, logo } = styles(showSlider);
  return (
    <header className={navbar}>
      <Link className={logo} to='/colorsapp'>Colors App</Link>
      {showSlider && (
        <ColorSlider level={level} setLevel={setLevel} />
      )}
      <ColorTypeSelect colorType={colorType} setColorType={setColorType} />
    </header>
  )
} 