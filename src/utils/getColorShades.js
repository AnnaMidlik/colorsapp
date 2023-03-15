export default function getColorShades(allColorsShades, colorId) {
  let shades = [];
  for (let key in allColorsShades) {
    shades = shades.concat(
      allColorsShades[key].filter(color => color.id === colorId))
  }
  // console.log(result);
  return shades.slice(1)
};