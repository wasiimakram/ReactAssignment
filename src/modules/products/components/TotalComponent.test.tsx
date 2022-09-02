import { render,screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event'
import React from 'react';
import TotalComponent from './TotalComponent';
import { useAppSelector,useAppDispatch } from '../../../app-redux/hooks';
import { selectCartTotal } from '../../../app-redux/products/ProductSlice';


jest.mock('../../../app-redux/hooks');

describe("TotalComponent",()=>{
    const data=[{"id": 1,"colour": "Black","name": "Black Sheet Strappy Textured Glitter Bodycon Dress","price": 10,"img": ""},
        {"id": 2,"colour": "Stone","name": "Stone Ribbed Strappy Cut Out Detail Bodycon Dress","price": 4,"img": ""},]
    const dispatch = jest.fn();
    it("Render Total Compoent",()=>{
        const {debug}= render(<TotalComponent  />)
        // debug();
        // const total= screen.getByTestId("totalId");
        // expect(total).toEqual(0);
    });
    
})