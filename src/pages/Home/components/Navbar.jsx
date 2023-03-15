import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../HomeStyle';

export function Navbar() {
  const { nav } = styles();
  return (
    <nav className={nav}>
      <h1>Colors App</h1>
      <Link to='/colorsapp/palette/new'>Create Palette</Link>
    </nav>
  )
};
