import { createUseStyles } from 'react-jss';
import sizes from '../../utils/sizes';

const styles = createUseStyles({
  newPalette: {
    width: '100vw',
    display: 'flex',
    fontFamily: 'Inter, sans-serif',
    position: 'relative',
    [sizes.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
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
    },
    [sizes.down('sm')]: {
      width: ({ isOpenForm }) => "100%",
      position: 'static',
      order: '1',
      marginTop: '1rem'
    }
  }
});

export default styles;
