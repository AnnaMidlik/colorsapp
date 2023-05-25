import { v4 as uuidv4 } from 'uuid';
export default function newPaletteReducer(state, { type, name, color, rgba, currentBox, box, id }) {
  switch (type) {
    case 'create':
      const newItem = { hex: color, rgba: rgba, name: name, id: uuidv4() };
      return [...state, newItem]
    case 'update':
      let currentBoxindex = state.indexOf(currentBox)
      let overedBoxIndex = state.indexOf(box)
      let newState = [...state]
      newState.splice(currentBoxindex, 1)
      newState.splice(overedBoxIndex, 0, currentBox)
      return newState
    case 'remove':
      return state.filter(box => box.id !== id)
    default:
      return state
    case 'clear':
      return []
  }
}