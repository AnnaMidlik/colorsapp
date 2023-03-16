export default function palettesReducer(state, action) {
  switch (action.type) {
    case 'create':
      let validate = state.find(palette => palette.paletteName === action.paletteName)
      if (!validate) {
        let newPalette = {
          paletteName: action.paletteName,
          id: action.paletteName.toLowerCase().replace(/ /g, '-'),
          colors: action.colors
        }
        return [...state, newPalette]
      } else {
        action.setErrorName('palette name should be unique')
        return state
      }
    case 'remove':
      return state.filter(palette => palette.id !== action.paletteId)
    default:
      return state
  }
};