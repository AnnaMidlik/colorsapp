import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  navbar: {
    height: '7%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h1': {
      marginLeft: '50px',
      color: '#0077B6'
    }
  },

  openFormBtn: {
    position: 'absolute',
    backgroundColor: 'transparent',
    border: 'none',
    '& img': {
      height: '40px',
      width: '40px'
    }
  }
})
export default styles