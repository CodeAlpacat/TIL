import classes from './CartButton.module.css';
import { useDispatch } from "react-redux";
import { showCartActions } from '../../store/show-cart';


const CartButton = (props) => {
  const dispatch = useDispatch()
  
  const showCartButtonHandler = () => {
    dispatch(showCartActions.showCartHandler())
  }

  return (
    <button className={classes.button} onClick={showCartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
