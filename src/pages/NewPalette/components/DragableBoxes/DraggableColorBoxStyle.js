import { createUseStyles } from "react-jss";
import chroma from 'chroma-js';

const styles = createUseStyles({
  boxContainer: {
    width: '20%',
    height: '25%',
    backgroundColor: (box) => box.color,
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    verticalAlign: 'bottom',
    '& div button': {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      position: 'absolute',
      bottom: '5px',
      right: '5px',
      '& img': {
        height: '20px',
        width: '20px',
      }
    },
    '& div span': {
      position: 'absolute',
      color: (box) =>
        chroma(box.color).luminance() >= 0.6
          ? 'black'
          : 'white',
      bottom: '5px',
      left: '5px',
      fontSize: '16px',
      fontWeight: '600'
    }

  }
});
export default styles