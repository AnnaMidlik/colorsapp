export default function findPalette(palettes, id) {
  return palettes.find((palette) => palette.id === id)
}