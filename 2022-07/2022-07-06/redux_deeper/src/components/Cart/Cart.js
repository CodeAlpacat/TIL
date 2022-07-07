import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const isShowCart = useSelector(state => state.showCart.showCart)
  const quantity = useSelector(state => state.counter.counter)

  return  (
    isShowCart && <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity, total: 18, price: 6 }}
        />
      </ul>
    </Card>
    
  );
};


export default Cart;
