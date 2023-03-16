import React, { useContext, useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import Button from '../../../../components/Button';
import { NewPaletteContext } from '../../../../context/newPaletteContext';
import styles from './NewFormStyle';


export function NewForm({ isOpenForm, currentColor, setCurrentColor }) {
  const { newPaletteDispatch } = useContext(NewPaletteContext)
  const [colorName, setColorName] = useState('');
  const [errorName, setErrorName] = useState('');
  const inputRef = useRef(null)
  const { newFormContainer, formContainer, addColor, formBtns, chromePicker, input, error } = styles({ isOpenForm, currentColor, errorName })
  const handleChange = (e) => {
    setErrorName('');
    setColorName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (colorName !== '') {
      newPaletteDispatch({
        setErrorName: setErrorName,
        type: 'create',
        color: currentColor.hex,
        name: colorName
      })
      setColorName('')
    } else {
      inputRef.current.focus()
      return setErrorName('color name is required')
    }

  }
  const randomColor = () => {
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let newColor = '#'
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValues.length)
      newColor += hexValues[index];
    }
    return newPaletteDispatch({
      setErrorName: setErrorName,
      type: 'create',
      color: `${newColor}`,
      name: newColor
    })
  }
  return (
    <div className={newFormContainer}>
      <h2>Design your palette</h2>
      <div className={formBtns}>
        <Button
          color={'#e74c3c'}
          text='CLEAR PALETTE'
          width={'50%'}
          onClick={() =>
            newPaletteDispatch({
              type: 'clear'
            })
          } />
        <Button
          onClick={randomColor}
          color={'#023E8A'}
          text='RANDOM COLOR'
          width={'50%'} />
      </div>
      <form onSubmit={handleSubmit} className={formContainer}>
        <ChromePicker
          className={chromePicker}
          color={currentColor}
          onChangeComplete={(newColor) => setCurrentColor(newColor)} />
        <input
          className={input}
          type="text"
          id='input'
          placeholder='color name'
          value={colorName}
          ref={inputRef}
          onChange={handleChange} />
        <p className={error}>{errorName}</p>
        <button
          className={addColor}
          type='submit'
        >ADD COLOR</button>
      </form >
    </div>

  )
};
