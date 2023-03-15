import seedsColor from "../data/seedsColor";

export default function findPalette(id) {
  return seedsColor.find((palette) => palette.id === id)
}