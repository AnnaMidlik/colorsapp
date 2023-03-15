import { createUseStyles } from 'react-jss';
import chroma from 'chroma-js';

const styles = createUseStyles({
  box: {
    width: '20%',
    height: ({ showFullPalette }) => showFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'white',
    marginBottom: '-3.5px',
    textAlign: 'center',
    "&:hover button": {
      opacity: 1,
      transition: "0.5s"
    },
  },
  copyBtn: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: "-50px",
    marginTop: "-15px",
    lineHeight: '20px',
    backgroundColor: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    color: ({ color }) =>
      chroma(color).luminance() >= 0.6
        ? 'black'
        : 'white',
    opacity: '0',
    cursor: 'pointer',
  },
  moreBtn: {
    color: ({ color }) =>
      chroma(color).luminance() >= 0.6
        ? 'black'
        : 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px'
  },
  title: {
    lineHeight: '30px',
    fontWeight: '600',
    position: 'absolute',
    left: '5px',
    bottom: '0',
    textTransform: 'lowercase',
    color: ({ color }) => chroma(color).luminance() >= 0.6 ? 'black' : 'white'
  },

});

export default styles