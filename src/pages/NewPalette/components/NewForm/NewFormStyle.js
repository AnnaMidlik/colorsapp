import { createUseStyles } from "react-jss";
import chroma from "chroma-js";
import sizes from "../../../../utils/sizes";

const styles = createUseStyles({
  newFormContainer: {
    // background: "#CAF0F8",
    display: 'flex',
    width: '30%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    fontFamily: 'Inter, sans-serif',
    position: 'fixed',
    top: '0',
    left: '0',
    transform: ({ isOpenForm }) => isOpenForm ? 'translateX(0%)' : 'translateX(-200%)',
    transition: '0.2s ease-out',
    [sizes.down('md')]: {
      width: '50%',
      position: 'inherit'
    },
    [sizes.down('sm')]: {
      width: '50%',
      position: 'static',
      order: '2'
    },
    '& h2': {
      [sizes.down('md')]: {
        fontSize: '1.2rem'
      },
    }
  },
  formBtns: {
    width: '100%',
    margin: '0 0 1rem 0',
    display: 'flex',
    justifyContent: 'center'

  },
  formContainer: {
    width: '100%',
  },
  addColor: {
    backgroundColor: ({ currentColor }) => `rgba(
      ${currentColor.rgb.r},
      ${currentColor.rgb.g},
      ${currentColor.rgb.b},
      ${currentColor.rgb.a})`,
    marginTop: '1rem',
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    fontWeight: '600',
    color: ({ currentColor }) =>
      chroma(currentColor.hex).luminance() >= 0.6
        ? 'black'
        : 'white',
  },
  chromePicker: {
    width: '100% !important'
  },
  input: {
    width: '100%',
    marginTop: '1.5rem',
    fontSize: '1rem',
    border: 'none',
    borderBottom: '2px solid black',
    background: 'transparent',
    '&:focus': {
      outline: 'none',
      borderBottom: ({ validationState }) => !validationState.isError ? '2px solid black' : 'red solid 2px',

    }
  },
  error: {
    margin: '0.5rem 0 0',
    color: 'red',
    textAlign: 'start',
    fontSize: '12px'
  }
});

export default styles;