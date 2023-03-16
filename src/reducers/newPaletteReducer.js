import { v4 as uuidv4 } from 'uuid';
export default function newPaletteReducer(state, action) {
  switch (action.type) {
    case 'create':
      console.log(state)
      let validate = state.find(color => color.name === action.name)
      if (!validate) {
        const newItem = { color: action.color, name: action.name, id: uuidv4() }
        return [...state, newItem]
      }
      else {
        action.setErrorName('color name should be unique')
        return state
      }
    case 'update':
      const dragged = action.currentBox
      const overed = action.box
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
      return state.filter(box => box.id !== action.id)
    default:
      return state
    case 'clear':
      return []
  }
}