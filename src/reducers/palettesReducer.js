export default function palettesReducer(state, action) {
  switch (action.type) {
    case 'create':
      console.log(state);
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
    case 'update':
      return state
    case 'remove':
      return state
    case 'clear':
      return []
    default:
      return state
  }
};