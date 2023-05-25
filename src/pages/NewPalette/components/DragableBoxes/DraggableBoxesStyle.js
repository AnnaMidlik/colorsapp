import { createUseStyles } from "react-jss";
import sizes from "../../../../utils/sizes";

const styles = createUseStyles({
  boxesContainer: {
    height: '93%',
  },
  [sizes.down('sm')]: {
    height: '100%'
  },
});
export default styles