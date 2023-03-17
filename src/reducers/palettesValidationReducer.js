export default function palettesValidationReducer(state, { type, name, palettes }) {
  switch (type) {
    case 'empty':
      if (name === '') {
        return { isError: true, errorMsg: 'color name is required' }
      } else {
        return { isError: false, errorMsg: '' }
      }
    case 'unique':
      if (palettes) {
        let isError = palettes.find(color => color.paletteName === name);
        if (isError) {
          return { isError: true, errorMsg: 'color name should be unique' }
        } else {
          return { isError: false, errorMsg: '' }
        }
      } else {
        return { isError: false, errorMsg: '' }
      }
    case 'cancel':
      return { isError: false, errorMsg: '' }
    default:
      return state
  }
}