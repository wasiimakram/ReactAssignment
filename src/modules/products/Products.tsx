import  React,{useEffect,useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../app-redux/hooks';
import { getProductsListing } from '../../app-redux/products/actions/ProductActions';
import { selectProducts } from '../../app-redux/products/ProductSlice';
import { IProductItem } from '../../comon/typings/products';
import ColorComponent from './components/ColorComponent';
import ImageComponent from './components/ImageComponent';
import QuantityComponent from './components/QuantityComponent';
import TotalComponent from './components/TotalComponent';


export interface IProductsProps {}

export default function Products (props: IProductsProps) {
  const dispatch = useAppDispatch();
  const allProducts=useAppSelector(selectProducts)
  useEffect(() => {
    if(allProducts.length===0) dispatch(getProductsListing());
  }, [allProducts]);
  return (
    
      <div className="container">
            <ColorComponent />
            {/* Item Start */}
            {allProducts.map((item:IProductItem)=>(
                <div className="row item-content">
                    <ImageComponent itemRecord={item} />
                    <QuantityComponent itemRecord={item}/>
                </div>
            ))}
            {/* Item End */}
            <TotalComponent />
        </div>
    
  );
}
