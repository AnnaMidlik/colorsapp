import React, { useState, useRef } from 'react';
import Button from '../Button';
import styles from './ModalStyle';

export function Modal({ showModal, setShowModal, savePalette }) {
  const inputRef = useRef(null);
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
      setShowModal(false);
      return savePalette(paletteName)
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