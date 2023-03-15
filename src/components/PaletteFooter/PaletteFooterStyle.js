import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
  footer: {
    width: '100vw',
    height: '5%',
    textAlign: 'end',
    "& p": {
      margin: '0',
    }
  }
})

export default styles