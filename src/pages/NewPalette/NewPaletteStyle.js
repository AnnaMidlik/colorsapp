import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  newPalette: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    fontFamily: 'Inter, sans-serif',
    position: 'relative',
  },
  main: {
    position: 'fixed',
    right: '0',
    top: '0',
    height: '100%',
    width: ({ isOpenForm }) => isOpenForm ? "70%" : "100%",
    transition: '0.2s ease-out'
  }
});

export default styles;
