import React from 'react';
import styles from './ColorSliderStyle';

export function ColorSlider({ level, setLevel }) {
  const { slider } = styles()
  return (
    <div className={slider}>
      <span>Level {level}</span>
      <input type='range' value={level} min={100} max={900} step={100} onChange={(e) => setLevel(e.target.value)} />
    </div>
  )
};