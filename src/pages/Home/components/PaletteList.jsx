import React, { useContext } from 'react';
import { PalettesContext } from '../../../context/palettesContext.js';
import { useNavigate } from 'react-router-dom';
import { Minipalette } from './Minipalette.jsx';
import styles from '../HomeStyle';

export function PaletteList() {
  const { palettesState } = useContext(PalettesContext)
  const { minipalettes } = styles();
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/colorsapp/${id}`);
  }
  const showPalettes = (pal) => {
    if (pal) {
      return pal.map(palette => {
        return <Minipalette
          handleClick={handleClick}
          key={palette.id}
          {...palette} />
      })
    }
  }
  return (
    <div className={minipalettes}>
      {showPalettes(palettesState)}
    </div>
  )
};
