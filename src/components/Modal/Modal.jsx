import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PalettesContext } from '../../context/palettesContext';
import Button from '../Button';
import styles from './ModalStyle';

export function Modal({ showModal, setShowModal, colors }) {
  const inputRef = useRef(null);
  const { palettesDispatch } = useContext(PalettesContext)
  let navigate = useNavigate();
  const [paletteName, setPaletteName] = useState('');
  const [errorName, setErrorName] = useState('');
  const { container, modal, modalBtns, error } = styles({ showModal, errorName });
  const handleChange = (e) => {
    setErrorName('');
    setPaletteName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (paletteName !== '') {
      palettesDispatch({
        type: 'create',
        setErrorName: setErrorName,
        paletteName: paletteName,
        colors: colors
      })
      if (errorName === '') {
        setShowModal(false);
        navigate('/colorsapp');
      }
    } else {
      inputRef.current.focus()
      return setErrorName('palette name is required')
    }
  }
  const cancel = () => {
    setShowModal(false);
    setPaletteName('');
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
          <p className={error}>{errorName}</p>
          <div className={modalBtns}>
            <Button
              text='CANCEL'
              color='#6c757d'
              onClick={cancel} />
            <Button
              type='submit'
              text='SAVE'
              color='#023E8A' />
          </div>
        </form>
      </div>
    </div>
  )
}