import React, { useState, useRef, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { PalettesContext } from '../../context/palettesContext';
import palettesValidationReducer from '../../reducers/palettesValidationReducer';
import Button from '../Button';
import styles from './ModalStyle';

export function Modal({ showModal, setShowModal, colors }) {
  const inputRef = useRef(null);
  const [validationState, validationDispatch] = useReducer(palettesValidationReducer, { isError: false, errorMsg: '' })
  const { isError, errorMsg } = validationState
  const { palettesState, palettesDispatch } = useContext(PalettesContext)
  let navigate = useNavigate();
  const [paletteName, setPaletteName] = useState('');
  const { container, modal, modalBtns, error } = styles({ showModal, isError });
  const handleChange = (e) => {
    validationDispatch({
      type: 'unique',
      palettes: palettesState,
      name: e.target.value
    })
    setPaletteName(e.target.value)
  }
  const handleClick = (e) => {
    validationDispatch({
      type: 'empty',
      name: paletteName
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError) {
      palettesDispatch({
        type: 'create',
        colors: colors,
        paletteName: paletteName
      })
      setPaletteName('');
      setShowModal(false);
      navigate('/colorsapp');
    } else {
      return inputRef.current.focus()
    }
  }
  const cancel = () => {
    setShowModal(false);
    setPaletteName('');
    validationDispatch({
      type: 'cancel'
    })
  }
  return (
    <div className={container}>
      <div className={modal}>
        <form onSubmit={handleSubmit}>
          <h2>CHOOSE A PALETTE NAME 🎨</h2>
          <p>Please enter a name for your new palette</p>
          <label htmlFor="paletteName">Palette Name</label>
          <input
            type="text"
            id='paletteName'
            value={paletteName}
            ref={inputRef}
            onChange={handleChange} />
          <p className={error}>{errorMsg}</p>
          <div className={modalBtns}>
            <Button
              text='CANCEL'
              color='#6c757d'
              onClick={cancel} />
            <Button
              disabled={isError}
              onClick={handleClick}
              type='submit'
              text='SAVE'
              color='#023E8A' />
          </div>
        </form>
      </div>
    </div>
  )
}