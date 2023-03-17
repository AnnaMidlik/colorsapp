import React from 'react';
import styles from './ButtonStyle';

export function Button({ text, color, onClick, type = 'button', disabled = false }) {
  const { button } = styles({ color })
  return (
    <button
      disabled={disabled}
      type={type}
      className={button}
      onClick={onClick}><span>{text}</span></button>
  )
}