export default function palettesReducer(state, action) {
  switch (action.type) {
    case 'create':
      console.log('create');
      let validate = state.find(palette => palette.paletteName === action.paletteName)
      console.log(Boolean(validate));
      console.log(action.setErrorName);
      // if (validate) {
      //   action.setErrorName('palette name should be unique')
      // } else {
      //   let newPalette = {
      //     paletteName: action.paletteName,
      //     id: action.paletteName.toLowerCase().replace(/ /g, '-'),
      //     colors: action.colors
      //   }
      //   return [...state, newPalette]
      // }
      return { ...state, isValid: false }
    case 'remove':
      return state.filter(palette => palette.id !== action.paletteId)
    default:
      return state
  }
};