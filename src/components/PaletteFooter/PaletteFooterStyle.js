import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  footer: {
    height: '5%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    "& p": {
      margin: '0 1rem 0 0',

    }
  }
})

export default styles