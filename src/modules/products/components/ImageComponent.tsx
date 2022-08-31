import * as React from 'react';
import { IProductItem } from './../../../comon/typings/products.d';

export interface IImageComponentProps {
    itemRecord:IProductItem
}

export default function ImageComponent (props: IImageComponentProps) {
  return (
    <div className="col">
        <div className="row">
            <div className='col-md-6'>
                <img src={props.itemRecord.img} 
                className="img-thumbnail product-image" alt="ImageName" />
            </div>
            <div className='col-md-6'>
                <h5>{props.itemRecord.name}</h5>
                <p>$ {props.itemRecord.price}</p>
            </div>
        </div> 
    </div>
  );
}
