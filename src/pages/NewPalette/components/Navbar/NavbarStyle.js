import { createUseStyles } from "react-jss";
import sizes from "../../../../utils/sizes";

const styles = createUseStyles({
  navbar: {
    height: '7%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h1': {
      margin: '0',
      marginLeft: '50px',
      color: '#0077B6',
      [sizes.down('md')]: {
        fontSize: '1.2rem'
      }
    },
    [sizes.down('sm')]: {
      marginBottom: '1rem'
    },
  },

  openFormBtn: {
    position: 'absolute',
    backgroundColor: 'transparent',
    border: 'none',
    '& img': {
      height: '40px',
      width: '40px',
      [sizes.down('md')]: {
        width: '30px',
        height: '30px'
      }
    }
  }
})
export default styles