import React, { useContext } from "react";
import styles from './MinipaletteStyle';
import { PalettesContext } from '../../../context/palettesContext.js';

export function Minipalette({ paletteName, id, colors, handleClick }) {
  const { palettesDispatch } = useContext(PalettesContext)
  const { minipalette, colorsContainer, title, miniColorBox } = styles();
  const showMinipalettes = (colors) => {
    return colors.map(color => <div className={miniColorBox}
      style={{ backgroundColor: color.color }}
      key={color.name} />)
  }
  const handleRemoveButtonClick = (e) => {
    e.stopPropagation();
    palettesDispatch({
      type: 'remove',
      paletteId: id
    })
  }
  return (
    <div className={minipalette} onClick={() => handleClick(id)}>
      <div className={colorsContainer}>{showMinipalettes(colors)}</div>
      <h3 className={title}>{paletteName}</h3>
      <button
        type="button"
        onClick={handleRemoveButtonClick}
      >
        <i className="fa-solid fa-trash"></i>
      </button>

    </div>
  )
}