import React from 'react';
import { DraggableColorBox } from './DraggableColorBox';
import styles from './DraggableBoxesStyle';

export function DraggableBoxes({ boxes }) {
  const { boxesContainer } = styles();
  return (
    <div className={boxesContainer}>
      {boxes.map((box, index) => {
        return <DraggableColorBox
          key={index}
          box={box} />
      })}
    </div>
  )
}