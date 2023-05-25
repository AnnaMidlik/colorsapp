import { createUseStyles } from "react-jss";
import chroma from 'chroma-js';
import sizes from "../../../../utils/sizes";

const styles = createUseStyles({
  boxContainer: {
    width: '20%',
    height: '25%',
    backgroundColor: (box) => box.rgba
      ? `rgba(
      ${box.rgba.r},
      ${box.rgba.g},
      ${box.rgba.b},
      ${box.rgba.a})`
      : box.hex,
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
      transition: 'all 0.3s ease-in-out',
      color: (box) =>
        chroma(box.hex).luminance() >= 0.6
          ? 'black'
          : 'white',
      '&:hover': {
        color: (box) =>
          chroma(box.hex).luminance() >= 0.6
            ? 'white'
            : 'black',
      },
      [sizes.down("sm")]: {
        right: '1rem'
      }
    },
    '& div span': {
      position: 'absolute',
      color: (box) =>
        chroma(box.hex).luminance() >= 0.6
          ? 'black'
          : 'white',
      bottom: '5px',
      left: '5px',
      fontSize: '16px',
      fontWeight: '600',
      [sizes.down("sm")]: {
        left: '1rem'
      }
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: '2rem',
    }
  }
});
export default styles