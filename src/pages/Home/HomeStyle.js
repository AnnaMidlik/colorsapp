import { createUseStyles } from "react-jss";

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
  },
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    "& a": {
      color: 'white'
    }
  },
  minipalettes: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  }
});
export default styles