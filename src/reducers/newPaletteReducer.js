import { v4 as uuidv4 } from 'uuid';
export default function newPaletteReducer(state, { type, name, color, currentBox, box, id }) {
  switch (type) {
    case 'create':
      const newItem = { color: color, name: name, id: uuidv4() };
      return [...state, newItem]
    case 'update':
      const dragged = currentBox
      const overed = box
      let newState = state.map(b => {
        if (b.id === dragged.id) {
          return overed
        } else if (b.id === overed.id) {
          return dragged
        }
        return b
      })
      return newState
    case 'remove':
      return state.filter(box => box.id !== id)
    default:
      return state
    case 'clear':
      return []
  }
}