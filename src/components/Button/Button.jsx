import React from 'react';
import styles from './ButtonStyle';

export function Button({ text, color, onClick, type = 'button' }) {
  const { button } = styles({ color })
  return (
    <button
      type={type}
      className={button}
      onClick={onClick}><span>{text}</span></button>
  )
}