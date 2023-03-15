import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  mySelect: {
    width: '200px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    "&:after": {
      content: '▾',
      backgroundColor: 'red',
      fontSize: '30px',
      position: 'absolute',
      top: '10px',
      right: '15px',
      color: '#03045e'
    },
    "& select": {
      MozAppearance: 'none',
      WebkitAppearance: 'none',
      appearance: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      width: '200px',
      height: '20px',
      padding: '0 5px',
      border: 'none',
      borderBottom: '3px solid #03045e',
      transition: '150ms all ease-in-out',
      "&:focus": {
        outline: 'none',
      },
      "&:hover": {
        borderBottom: '3px solid #0096C7'
      },
      "& option": {
        margin: '5px'
      },
    },
    "&::-ms-expand": {
      display: 'none'
      /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
    },
  },

})

export default styles

// .ColorTypeSelect::after {
//   content: '\25BC';
//   position: absolute;
//   top: 10px;
//   right: 15px;
//   color: #800f2f;
//   cursor: pointer;
//   pointer-events: none;
//   transition: 150ms all ease-in-out;
// }

// select:focus {
//   outline: none;
// }

// select:hover {
//   border-bottom: 3px solid #C9184A;
// }

// .ColorTypeSelect:hover::after {
//   color: #C9184A;
// }