export default function mainReduser(state, action) {
  switch (action.type) {
    case 'create':
      console.log('create')
      let newPalette = {
        paletteName: action.paletteName,
        id: action.paletteName.toLowerCase().replace(/ /g, '-'),
        colors: action.colors
      }
      return [...state, newPalette]
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