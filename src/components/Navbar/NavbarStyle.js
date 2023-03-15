import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  navbar: {
    width: '100vw',
    height: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  logo: {
    margin: '0 15px',
    fontSize: '1.5rem',
    fontWeight: '600',
    textDecoration: 'none',
    color: '#0077B6'
  }
})
export default styles
