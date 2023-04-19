import { createUseStyles } from 'react-jss';
import sizes from '../../utils/sizes';

const styles = createUseStyles({
  newPalette: {
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
    transition: '0.2s ease-out',
    [sizes.down('md')]: {
      width: ({ isOpenForm }) => isOpenForm ? "50%" : "100%",
    }
  }
});

export default styles;
