import React, { useEffect, useReducer } from 'react';
import { PalettesContext } from './context/palettesContext';
import { Outlet } from 'react-router-dom';
import palettesReducer from './reducers/palettesReducer';

export default function Root() {
  const [palettesState, palettesDispatch] = useReducer(palettesReducer, JSON.parse(localStorage.getItem('palettes')) || [])
  useEffect(() => {
    localStorage.setItem('palettes', JSON.stringify(palettesState));
  }, [palettesState])
  return (
    <PalettesContext.Provider
      value={{ palettesState, palettesDispatch }} >
      <Outlet />
    </PalettesContext.Provider>
  )
}