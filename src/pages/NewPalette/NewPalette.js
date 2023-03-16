import React, { useState, useReducer, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import NewForm from './components/NewForm';
import DragableBoxes from './components/DragableBoxes';
import Modal from '../../components/Modal';
import { PalettesContext } from '../../context/palettesContext';
import { NewPaletteContext } from '../../context/newPaletteContext';
import newPaletteReduser from '../../reducers/newPaletteReducer';
import styles from './NewPaletteStyle';

export function NewPalette() {
  const [newPaletteState, newPaletteDispatch] = useReducer(newPaletteReduser, []);
  const { palettesDispatch } = useContext(PalettesContext)
  let navigate = useNavigate();
  const [isOpenForm, setIsOpenForm] = useState(true);
  const [currentColor, setCurrentColor] = useState({ hex: '#0077B6' });
  const [currentBox, setCurrentBox] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { newPalette, main } = styles({ isOpenForm, showModal });

  const savePalette = (paletteName) => {
    palettesDispatch({
      type: 'create',
      paletteName: paletteName,
      colors: newPaletteState
    })
    navigate('/colorsapp');
  }
  return (<NewPaletteContext.Provider value={
    { newPaletteDispatch, currentBox, setCurrentBox }
  }>
    <div className={newPalette}>
      <NewForm
        isOpenForm={isOpenForm}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <div className={main}>
        <Navbar
          isOpenForm={isOpenForm}
          setIsOpenForm={setIsOpenForm}
          setShowModal={setShowModal}
          isEnabled={newPaletteState.length}
        />
        <DragableBoxes
          boxes={newPaletteState} />
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        savePalette={savePalette} />
    </div>
  </NewPaletteContext.Provider>
  )
}