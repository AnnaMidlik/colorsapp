import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import findPalette from '../../utils/findPalette';
import { generatePalette } from '../../utils/colorHelpers';
import getColorShades from '../../utils/getColorShades';
import ColorBox from '../../components/ColorBox';
import Navbar from '../../components/Navbar';
import { PaletteFooter } from '../../components/PaletteFooter/PaletteFooter.jsx';
import styles from '../Palette/PaletteStyle';

export function ShadesPalette() {
  const [colorType, setColorType] = useState('hex');
  const { paletteId, colorId } = useParams();
  const { colors, paletteName, emoji } = generatePalette(findPalette(paletteId));
  const { onePalette, boxes, goBack } = styles();

  const showColorShadesBox = () => {
    let shades = getColorShades(colors, colorId);
    return shades.map(shade => <ColorBox
      key={shade.hex}
      color={shade[colorType]}
      name={shade.name}
      showFullPalette={false} />)
  }
  return (<div className={onePalette}>
    <Navbar
      showSlider={false}
      colorType={colorType}
      setColorType={setColorType} />
    <div className={boxes}>
      {showColorShadesBox()}
      <div className={goBack}>
        <Link to={`/colorsapp/palette/${paletteId}`}>GO BACK</Link>
      </div>
    </div>
    <PaletteFooter
      emoji={emoji}
      paletteName={paletteName}
    />
  </div>
  )
}