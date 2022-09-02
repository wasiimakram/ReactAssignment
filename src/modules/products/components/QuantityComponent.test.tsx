import { render,screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event'
import React from 'react';
import QuantityComponent from './QuantityComponent';
import { useAppSelector,useAppDispatch } from '../../../app-redux/hooks';


jest.mock('../../../app-redux/hooks');

describe("QuantityComponent",()=>{
    const dispatch = jest.fn();
    const singleItem={"id": 1,"colour": "Black","name": "Black Sheet Strappy Textured Glitter Bodycon Dress","price": 10,"img": "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024"}
    it("Render Quantity Compoent",()=>{
        const {debug}= render(<QuantityComponent itemRecord={singleItem} />)
        // debug();
    });
    it("On Clicking Add Button, Item Add to Cart",()=>{
        render(<QuantityComponent itemRecord={singleItem}/>)
        const btn= screen.getByTestId("addToCartBtn");
        useEvent.click(btn);
        expect(useAppDispatch).toHaveBeenCalled();
        // expect(dispatch).toHaveBeenCalledWith({singleItem});
    });
    it("On Clicking Remove Button, Item Remove From Cart",()=>{
        render(<QuantityComponent itemRecord={singleItem}/>)
        const btn= screen.getByTestId("removeFromCartBtn");
        useEvent.click(btn);
        expect(useAppDispatch).toHaveBeenCalled(); 
    });
})