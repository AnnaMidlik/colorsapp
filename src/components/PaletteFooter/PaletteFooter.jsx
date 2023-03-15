import React from "react";
import styles from "./PaletteFooterStyle";

export function PaletteFooter({ paletteName, emoji }) {
  const { footer } = styles();
  return (
    <div className={footer}>
      <p>{paletteName} {emoji}</p>
    </div>
  )
}