export default function newPaletteValidationReducer(state, { type, name, palette }) {
  switch (type) {
    case 'empty':
      if (name === '') {
        return { isError: true, errorMsg: 'color name is required' }
      } else {
        return { isError: false, errorMsg: '' }
      }
    case 'unique':
      if (palette) {
        let isError = palette.find(color => color.name === name);
        if (isError) {
          return { isError: true, errorMsg: 'color name should be unique' }
        } else {
          return { isError: false, errorMsg: '' }
        }
      } else {
        return { isError: false, errorMsg: '' }
      }
    default:
      return state
  }
}