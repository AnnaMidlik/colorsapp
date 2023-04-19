import { createUseStyles } from "react-jss";
import sizes from "../../utils/sizes";

const styles = createUseStyles({
  button: {
    appearance: 'none',
    color: ({ color }) => color,
    backgroundColor: 'transparent',
    border: ({ color }) => `2px solid ${color}`,
    borderRadius: '0.3rem',
    fontWeight: '600',
    fontSize: '1rem',
    margin: '0 5px',
    padding: '0.4rem',
    cursor: 'pointer',
    backgroundImage: ({ color }) => `linear-gradient(45deg, ${color} 50%, transparent 50%)`,
    background: {
      position: '100%',
      size: ' 400%',
    },
    transition: 'background 300ms ease-in-out',
    '&:hover': {
      color: '#fff',
      backgroundPosition: '0',
    },
    '&:focus': {
      color: '#fff',
      outline: '0',
    },
    [sizes.down('md')]: {
      fontSize: '0.8rem'
    }

  }
}
)
export default styles;