import React, { useState } from 'react'
import { Overlay } from '../Overlay/Overlay.jsx';
import { Link } from 'react-router-dom';
import styles from './ColorBoxStyle';
export function ColorBox({ color, name, colorId, paletteId, showFullPalette }) {
  const [copied, setCopied] = useState(false);
  const { box, copyBtn, moreBtn, title } = styles({ color, showFullPalette });
  const handleCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(color)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  };
  return (
    <div className={box} style={{ backgroundColor: color }}>
      <Overlay show={copied} color={color} msg='copied' backgroundColor={color} />
      <div>
        <button className={copyBtn} onClick={handleCopy}>copy</button>
        <span className={title}>{name}</span>
        {showFullPalette && (
          <Link to={`/colorsapp/palette/${paletteId}/${colorId}`} >
            <span className={moreBtn} onClick={(e) => e.stopPropagation()}>more</span>
          </Link>
        )}
      </div>
    </div>
  )
}
