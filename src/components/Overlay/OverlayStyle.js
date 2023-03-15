
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  overlay: {
    opacity: '0',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverlay: {
    width: '100%',
    height: '100%',
    opacity: '1',
    zIndex: '10',
    transform: 'scale(50)',
    position: 'fixed',
  },
  text: {
    color: 'white',
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    transform: 'scale(0.1)',
    opacity: '0',
    "& h1": {
      fontWeight: '400',
      textShadow: '1px 2px black',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
    },
    "& p": {
      fontSize: '2rem',
      fontWeight: '100',
    }
  },
  showText: {
    opacity: '1',
    zIndex: '25',
    transform: 'scale(1)',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  }
})
export default styles