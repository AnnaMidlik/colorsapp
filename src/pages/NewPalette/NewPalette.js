import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import NewForm from './components/NewForm';
import DragableBoxes from './components/DragableBoxes';
import Modal from '../../components/Modal';
import { Context } from '../../context/context';
import reducer from '../../reducer';
import seedsColor from '../../data/seedsColor';
import styles from './NewPaletteStyle';

export function NewPalette() {
  const [state, dispatch] = useReducer(reducer, [
    // { id: 45637, name: 'red', color: 'red', },
    // { id: 26474, name: 'pink', color: 'pink', },
    // { id: 355, name: 'black', color: 'black', },
    // { id: 1836, name: 'green', color: 'green', },
    // { id: 5132, name: 'teal', color: 'teal', },
    // { id: 600, name: 'magenta', color: 'magenta', },
    // { id: 7674, name: 'blue', color: 'blue', }
  ]);
  let navigate = useNavigate();
  const [isOpenForm, setIsOpenForm] = useState(true);
  const [currentColor, setCurrentColor] = useState({ hex: '#0077B6' });
  const [currentBox, setCurrentBox] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { newPalette, main } = styles({ isOpenForm, showModal });

  const savePalette = (paletteName) => {
    let newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
      emoji: "🎨",
      colors: state
    }
    seedsColor.push(newPalette);
    navigate('/colorsapp');

  }
  return (<Context.Provider value={
    { dispatch, currentBox, setCurrentBox }
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
          isEnabled={state.length}
        />
        <DragableBoxes
          boxes={state} />
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        savePalette={savePalette} />
    </div>
  </Context.Provider>
  )
}