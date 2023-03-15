import React, { useContext } from 'react';
import { Context } from '../../../../context/context';
import styles from './DraggableColorBoxStyle';
import removeColor from '../../../../assets/icons/removeColor.png'

export function DraggableColorBox({ box }) {
  const { dispatch, currentBox, setCurrentBox } = useContext(Context)
  const { boxContainer } = styles(box);
  const handleDragStart = (e, box) => {
    setCurrentBox(box)
  }
  const handleDragOver = (e, box) => {
    e.preventDefault();
    setCurrentBox(currentBox)
    dispatch({
      type: 'update',
      box: box,
      currentBox: currentBox,
    })
  }
  const handleDrop = (e, box) => {
    dispatch({
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
        <button onClick={() => dispatch({
          type: 'remove',
          id: box.id
        })
        }>
          <img src={removeColor} alt="remove" />
        </button>

      </div>
    </div>
  )

}

// const dragEnterOrOver = (e) => {
  //   console.log(el.position)
  //   e.preventDefault();
  // }
      // onDragEnter={dragEnterOrOver}
    // onDragOver={dragEnterOrOver}