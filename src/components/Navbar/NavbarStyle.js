import { createUseStyles } from 'react-jss';
import sizes from '../../utils/sizes';

const styles = createUseStyles({
  navbar: {
    height: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: '0 1rem ',
    [sizes.down('xs')]: {
      height: 'auto',
      display: 'grid',
      justifyItems: 'start',
      gridTemplateAreas: (showSlider) => showSlider ? '"logo logo" "slider select"' : '"logo logo" "select select"',
      marginBottom: '1rem'
    }
  },
  logo: {
    margin: '0 15px',
    fontSize: '1.5rem',
    fontWeight: '600',
    textDecoration: 'none',
    color: '#0077B6',
    [sizes.down("xs")]: {
      margin: '0 0',
      gridArea: 'logo',
      marginBottom: '1rem'
    }
  }
})
export default styles
