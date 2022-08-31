import  React,{useEffect,useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../app-redux/hooks';
import {  filterProducts } from '../../../app-redux/products/ProductSlice';

export interface IColorComponentProps {}

export default function ColorComponent (props: IColorComponentProps) {
    const dispatch = useAppDispatch();
return (
    <div className="col-md-2 color-filter">
        <select className="form-select" onChange={(e)=>{dispatch(filterProducts(e.target.value))}}>
        <option selected >Select Color</option>
        <option value="Black">Black</option>
        <option value="Stone">Stone</option>
        <option value="Red">Red</option>
        </select>
    </div>
  );
}
