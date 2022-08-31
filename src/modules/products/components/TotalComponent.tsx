import  React,{useState,useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../../app-redux/hooks';
import { selectCart } from '../../../app-redux/products/ProductSlice';
export interface ITotalComponentProps {}

export default function TotalComponent (props: ITotalComponentProps) {
    const [totalPrice,setTotalPrice]=useState<number>(0);
    const cart = useAppSelector(selectCart);
    useEffect(() => {
        let total=0;
        cart.map((item:any) => {
            total+=item.price*item.quantity;
        });
        setTotalPrice(total);
    }, [cart]);
    return (
    <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
        <h4>Total: $ {totalPrice}</h4>
        </div>      
    </div>
    );
}
