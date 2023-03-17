export default function palettesReducer(state, action) {
  switch (action.type) {
    case 'create':
      let newPalette = {
        paletteName: action.paletteName,
        id: action.paletteName.toLowerCase().replace(/ /g, '-'),
        colors: action.colors
      }
      return [...state, newPalette]
    case 'remove':
      return state.filter(palette => palette.id !== action.paletteId)
    default:
      return state
  }
};