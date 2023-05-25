import React, { useState, useReducer } from 'react';
import Navbar from './components/Navbar'
import NewForm from './components/NewForm';
import DragableBoxes from './components/DragableBoxes';
import Modal from '../../components/Modal';
import { NewPaletteContext } from '../../context/newPaletteContext';
import newPaletteReduser from '../../reducers/newPaletteReducer';
import styles from './NewPaletteStyle';

export function NewPalette() {
  const [newPaletteState, newPaletteDispatch] = useReducer(newPaletteReduser, []);
  const [isOpenForm, setIsOpenForm] = useState(true);
  const [currentColor, setCurrentColor] = useState({ hex: '#0077B6', rgb: { r: 0, g: 119, b: 182, a: 1 } });
  const [currentBox, setCurrentBox] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { newPalette, main } = styles({ isOpenForm, showModal });
  return (<NewPaletteContext.Provider value={
    {
      newPaletteDispatch,
      newPaletteState,
      currentBox,
      setCurrentBox
    }
  }>
    <div className={newPalette}>
      <NewForm
        isOpenForm={isOpenForm}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor} />
      <div className={main}>
        <Navbar
          isOpenForm={isOpenForm}
          setIsOpenForm={setIsOpenForm}
          setShowModal={setShowModal}
          isEnabled={newPaletteState.length} />
        <DragableBoxes
          boxes={newPaletteState} />
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        colors={newPaletteState} />
    </div>
  </NewPaletteContext.Provider>
  )
}