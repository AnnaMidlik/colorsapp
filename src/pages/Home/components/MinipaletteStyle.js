import { createUseStyles } from 'react-jss';
import sizes from '../../../utils/sizes';

const styles = createUseStyles({
  minipalette: {
    width: '30%',
    margin: '0.5rem',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    textDecoration: 'none',
    "&:hover": {
      opacity: 1
    },
    "& button": {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      position: 'absolute',
      bottom: '0.5rem',
      right: '0.5rem',
      transition: 'all 0.3s easy-in-out',
      "&:hover": {
        color: '#023E8A'
      }
    },
    [sizes.down('xs')]: {
      width: '80%'
    }
  },
  colorsContainer: {
    backgroundColor: "#dae1e4",
    height: "120px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
    fontSize: '0'
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    fontSize: "1rem",
    position: "relative",
    textDecoration: "none",
    margin: '0',
    paddingTop: '0.5rem'
  },
  miniColorBox: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    position: 'relative',
  }

});

export default styles