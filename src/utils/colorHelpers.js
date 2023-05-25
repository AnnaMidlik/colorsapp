import chroma from "chroma-js";
let levels = [900, 800, 700, 600, 500, 400, 300, 200, 100, 0]
function getRange(hexColor) {
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
};

function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

function generatePalette(palette) {
  let newPalette = {
    paletteName: palette.paletteName,
    id: palette.id,
    colors: {}
  }
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of palette.colors) {
    let scale = getScale(color.hex, levels.length)
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase(),
        hex: scale[i],
        hsl: chroma(scale[i]).css('hsl'),
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });

    }
  }
  return newPalette
}

export { generatePalette }
