import React from "react";
import styles from "./PaletteFooterStyle";

export function PaletteFooter({ paletteName }) {
  const { footer } = styles();
  return (
    <div className={footer}>
      <p>{paletteName}</p>
    </div>
  )
}