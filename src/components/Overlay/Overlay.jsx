import React from 'react';
import styles from './OverlayStyle';

export function Overlay({ show, color, backgroundColor, msg }) {
  const { overlay, showOverlay, text, showText } = styles(backgroundColor)
  return (
    <div className='Overlay'>
      <div className={`${overlay} ${show && showOverlay}`} style={{ backgroundColor }} />
      <div className={`${text} ${show && showText}`}>
        <h1>{msg}</h1>
        <p>{color}</p>
      </div>
    </div>

  )
}