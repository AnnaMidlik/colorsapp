import React from 'react';
import styles from './HomeStyle';
import { Navbar } from './components/Navbar';
import { PaletteList } from './components/PaletteList';

export function Home() {
  const { root, container } = styles();
  return (
    <div className={root}>
      <div className={container}>
        <Navbar />
        <PaletteList />
      </div>

    </div>
  )
};