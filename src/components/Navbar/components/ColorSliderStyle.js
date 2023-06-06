import { createUseStyles } from 'react-jss';
import sizes from '../../../utils/sizes';

const styles = createUseStyles({
  slider: {
    width: '450px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    "& span": {
      fontSize: '1rem',
      fontWeight: '600',
      marginRight: '20px'
    },
    "& input[type='range']": {
      appearance: 'none',
      width: '340px',
      height: '15px',
      background: 'linear-gradient(90deg, rgba(144,224,239,1) 0%, rgba(0,119,182,1) 64%, rgba(3,4,94,1) 100%)',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      "&:focus": {
        outline: 'none',
      },
      "&::-webkit-slider-thumb": {
        appearance: 'none',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid #03045e',
        background: 'white',
        transition: '150ms all ease-in-out',
        "&:hover": {
          boxShadow: '2px 2px 10px #012a5c, -2px -2px 10px #012a5c'
        }
      }
    },
    [sizes.down("md")]: {
      width: "230px"
    },
    [sizes.down('xs')]: {
      gridArea: 'slider',
    }
  }
})
export default styles

