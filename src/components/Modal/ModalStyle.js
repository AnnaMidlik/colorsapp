import { createUseStyles } from "react-jss";
import sizes from "../../utils/sizes";
const styles = createUseStyles({
  container: {
    display: ({ showModal }) => showModal ? 'block' : 'none',
    zIndex: '2',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    background: ({ showModal }) => showModal ? 'rgba(108, 117, 125, 0.8)' : 'transparent'
  },

  modal: {
    background: 'white',
    borderRadius: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    height: '300px',
    width: '500px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    margin: '-150px 0 0 -250px',
    padding: '1rem',
    transition: 'all ease-in-out 2s',
    '& input': {
      width: '100%',
      appearance: 'none',
      border: 'none',
      fontSize: '1rem',
      borderBottom: ({ errorName }) => errorName ? '3px solid red' : '3px solid #03045e',
      '&:focus': {
        outline: 'none',
      }
    },
    '& label': {
      fontSize: '12px',
      color: ({ errorName }) => errorName ? 'red' : 'black'
    },
    [sizes.down('sm')]: {
      width: '300px',
      height: '300px',
      margin: '-150px 0 0 -150px',
    }
  },
  modalBtns: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem'

  },
  error: {
    marginTop: '0.5rem',
    color: 'red',
    textAlign: 'start',
    fontSize: '12px'
  }
})

export default styles;