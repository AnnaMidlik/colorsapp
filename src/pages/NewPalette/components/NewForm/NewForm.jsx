import React, { useContext, useState, useRef, useReducer } from 'react';
import { ChromePicker } from 'react-color';
import Button from '../../../../components/Button';
import { NewPaletteContext } from '../../../../context/newPaletteContext';
import newPaletteValidationReducer from '../../../../reducers/newPaletteValidationReducer';
import styles from './NewFormStyle';

export function NewForm({ isOpenForm, currentColor, setCurrentColor }) {
  const { newPaletteDispatch, newPaletteState } = useContext(NewPaletteContext);
  const [validationState, validationDispatch] = useReducer(newPaletteValidationReducer, { isError: false, errorMsg: '' })
  const { isError, errorMsg } = validationState;
  const [colorName, setColorName] = useState('');
  const inputRef = useRef(null)
  const {
    newFormContainer,
    formContainer,
    addColor, formBtns,
    chromePicker,
    input,
    error
  } = styles({ isOpenForm, currentColor, validationState });

  const handleChange = (e) => {
    validationDispatch({
      type: 'unique',
      palette: newPaletteState,
      name: e.target.value
    })
    setColorName(e.target.value);
  }
  const handleClick = (e) => {
    validationDispatch({
      type: 'empty',
      name: colorName
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError) {
      newPaletteDispatch({
        type: 'create',
        color: currentColor.hex,
        name: colorName
      })
      setColorName('')
    } else {
      return inputRef.current.focus()
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
            })} />
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
        <p className={error}>{errorMsg}</p>
        <button
          disabled={isError}
          onClick={handleClick}
          className={addColor}
          type='submit'
        >ADD COLOR</button>
      </form >
    </div>
  )
};
