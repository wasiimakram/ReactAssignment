import  React,{useEffect,useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../app-redux/hooks';
import { addToCart, decrementCart, removeFromCart, selectCart } from '../../../app-redux/products/ProductSlice';
import { IProductItem } from '../../../comon/typings/products';

export interface IQuantityProps {
  itemRecord:IProductItem
}

export default function QuantityComponent (props: IQuantityProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const [quantity, setQuantity] = useState<number>(0);
  

  useEffect(() => {
    let quantity=0;
    if(cart) 
    {
        cart.map((item:any)=>{if(item.id==props.itemRecord.id ) quantity=item.quantity;})
    }
    setQuantity(quantity);
  }, [cart]);

  return (
      <div className="col">
          <button type="button" className="btn btn-primary btn-sm" onClick={()=>{dispatch(decrementCart(props.itemRecord))}}>-</button>
          
          <h6 className="quantity-field"> {quantity} </h6>
          
          <button type="button" className="btn btn-primary btn-sm" onClick={()=>{dispatch(addToCart(props.itemRecord))}}>+</button>
          
          <button type="button" className="btn btn-primary btn-sm remove-item" onClick={()=>{dispatch(removeFromCart(props.itemRecord)) }}>Remove</button>
      </div>
  );
}
