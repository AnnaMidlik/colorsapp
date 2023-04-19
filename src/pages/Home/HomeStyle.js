import { createUseStyles } from "react-jss";
import sizes from "../../utils/sizes";

const styles = createUseStyles({
  root: {
    backgroundColor: '#0096C7',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '60%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('md')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '90%'
    },
  },
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    "& a": {
      color: 'white'
    },
    [sizes.down('xs')]: {
      justifyContent: 'space-around'
    }
  },
  minipalettes: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    [sizes.down('xs')]: {
      justifyContent: 'center'
    }
  }
});
export default styles