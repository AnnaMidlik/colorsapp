import React, { useContext } from 'react';
import { NewPaletteContext } from '../../../../context/newPaletteContext';
import styles from './DraggableColorBoxStyle';

export function DraggableColorBox({ box }) {
  const { newPaletteDispatch, currentBox, setCurrentBox } = useContext(NewPaletteContext)
  const { boxContainer } = styles(box);
  const handleDragStart = (e, box) => {
    setCurrentBox(box)
  }
  const handleDragOver = (e, box) => {
    e.preventDefault();
    setCurrentBox(currentBox)
    newPaletteDispatch({
      type: 'update',
      box: box,
      currentBox: currentBox,
    })
  }
  const handleDrop = (e, box) => {
    newPaletteDispatch({
      type: 'update',
      box: box,
      currentBox: currentBox
    })
    setCurrentBox(null)
  }
  return (
    <div
      className={boxContainer}
      draggable
      onDragStart={(e) => handleDragStart(e, box)}
      onDragEnter={(e) => handleDragOver(e, box)}
      onDragOver={(e) => handleDragOver(e, box)}
      onDrop={(e) => handleDrop(e, box)}
    ><div>
        <span>{box.name}</span>
        <button onClick={() => newPaletteDispatch({
          type: 'remove',
          id: box.id
        })
        }>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div >
  )

}

// const dragEnterOrOver = (e) => {
  //   console.log(el.position)
  //   e.preventDefault();
  // }
      // onDragEnter={dragEnterOrOver}
    // onDragOver={dragEnterOrOver}