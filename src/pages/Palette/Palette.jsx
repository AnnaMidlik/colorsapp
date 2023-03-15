import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import ColorBox from '../../components/ColorBox';
import PaletteFooter from '../../components/PaletteFooter';
import findPalette from '../../utils/findPalette';
import { generatePalette } from '../../utils/colorHelpers';
import styles from './PaletteStyle';

export function Palette() {
  const params = useParams();
  const { colors, id, paletteName, emoji } = generatePalette(findPalette(params.id));
  const [level, setLevel] = useState(500);
  const [colorType, setColorType] = useState('hex');
  const { onePalette, boxes } = styles();
  const showBoxes = () => {
    return colors[level].map(color =>
      <ColorBox
        key={color.hex}
        color={color[colorType]}
        name={color.name}
        paletteId={id}
        colorId={color.id}
        showFullPalette />)
  };
  return (
    <div className={onePalette}>
      <Navbar
        level={level}
        setLevel={setLevel}
        colorType={colorType}
        setColorType={setColorType}
        showSlider={true}
      />
      <div className={boxes}>
        {showBoxes()}
      </div>
      <PaletteFooter
        paletteName={paletteName}
        emoji={emoji} />
    </div>
  )
}