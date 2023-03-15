import React from "react";
import styles from './MinipaletteStyle'

export function Minipalette({ paletteName, id, colors, handleClick }) {
  const { minipalette, colorsContainer, title, miniColorBox } = styles();
  const showMinipalettes = (colors) => {
    return colors.map(color => <div className={miniColorBox}
      style={{ backgroundColor: color.color }}
      key={color.name} />)
  }
  return (
    <div className={minipalette} onClick={() => handleClick(id)}>
      <div className={colorsContainer}>{showMinipalettes(colors)}</div>
      <h3 className={title}>{paletteName}
      </h3>
    </div>
  )
}