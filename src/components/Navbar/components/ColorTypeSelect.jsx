import React, { useState } from 'react';
import { Overlay } from '../../Overlay/Overlay.jsx';
import styles from './ColorTypeSelectStyle';

export function ColorTypeSelect({ colorType, setColorType }) {
  const [changetype, setChangeType] = useState(false)
  const { mySelect } = styles();
  const handleChange = (e) => {
    setChangeType(true)
    setColorType(e.target.value)
    setTimeout(() => {
      setChangeType(false)
    }, 1500)
  }
  return (
    <div className={mySelect}>
      <Overlay msg='changed color type' backgroundColor='#0077B6' show={changetype} />
      <select defaultValue={colorType} onChange={handleChange}>
        <option value='hex'>Hex - #008080</option>
        <option value='hsl'>HSL - (180,100%,25%)</option>
        <option value='rgb'>RGB - (0,127,128)</option>
        <option value='rgba'>RGBA - (0,127,128,1.0)</option>
      </select>
    </div>
  )
};