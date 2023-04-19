import React, { useState } from 'react'
import { Overlay } from '../Overlay/Overlay.jsx';
import { useNavigate } from 'react-router-dom';
import styles from './ColorBoxStyle';
export function ColorBox({ color, name, colorId, paletteId, showFullPalette = false }) {
  const [copied, setCopied] = useState(false);
  let navigate = useNavigate();
  const { box, copyBtn, moreBtn, title } = styles({ color, showFullPalette });
  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/colorsapp/${paletteId}/${colorId}`);
  }
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
        {showFullPalette && (<span className={moreBtn} onClick={handleClick}>more</span>)}
      </div>
    </div>
  )
}
