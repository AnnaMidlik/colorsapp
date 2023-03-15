import React from "react";
import styles from './MinipaletteStyle'

export function Minipalette({ paletteName, id, emoji, colors, handleClick }) {
  const { minipalette, colorsContainer, title, miniColorBox, emojiSpan } = styles();
  const showMinipalettes = (colors) => {
    return colors.map(color => <div className={miniColorBox}
      style={{ backgroundColor: color.color }}
      key={color.name} />)
  }
  return (
    <div className={minipalette} onClick={() => handleClick(id)}>
      <div className={colorsContainer}>{showMinipalettes(colors)}</div>
      <h3 className={title}>{paletteName}
        <span className={emojiSpan}>{emoji}</span>
      </h3>
    </div>
  )
}