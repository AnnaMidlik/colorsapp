import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Minipalette } from './Minipalette.jsx';
import styles from '../HomeStyle';
import seedsColor from '../../../data/seedsColor.js';

export function PaletteList() {
  const palettes = seedsColor;
  const { minipalettes } = styles();
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/colorsapp/palette/${id}`);
  }
  const showPalettes = (pal) => {
    return pal.map(palette => {
      return <Minipalette
        handleClick={handleClick}
        key={palette.id}
        {...palette} />
    })
  }
  return (
    <div className={minipalettes}>
      {showPalettes(palettes)}
    </div>
  )
};
