import  React,{useState,useEffect} from 'react';
import { useAppSelector } from '../../../app-redux/hooks';
import { selectCartTotal } from '../../../app-redux/products/ProductSlice';
export interface ITotalComponentProps {}

export default function TotalComponent (props: ITotalComponentProps) {
    const cartTotal = useAppSelector(selectCartTotal);
    return (
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <h4>Total: $ {cartTotal}</h4>
            </div>      
        </div>
    );
}
