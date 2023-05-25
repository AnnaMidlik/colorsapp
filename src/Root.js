import React, { useEffect, useReducer } from 'react';
import { PalettesContext } from './context/palettesContext';
import { Outlet } from 'react-router-dom';
import palettesReducer from './reducers/palettesReducer';
import seedsColor from './data/seedsColor'

export default function Root() {
  const [palettesState, palettesDispatch] = useReducer(palettesReducer, JSON.parse(localStorage.getItem('palettes')) || [])
  useEffect(() => {
    if (palettesState.length === 0) {
      localStorage.setItem('palettes', JSON.stringify(seedsColor));
    } else {
      localStorage.setItem('palettes', JSON.stringify(palettesState));
    }
  }, [palettesState])
  return (
    <PalettesContext.Provider
      value={{ palettesState, palettesDispatch }} >
      <Outlet />
    </PalettesContext.Provider>
  )
}