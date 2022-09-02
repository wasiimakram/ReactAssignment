import { render,screen } from '@testing-library/react';
import React from 'react';
import ImageComponent from './ImageComponent';

describe("ImageComponent",()=>{
    const singleItem={"id": 1,"colour": "Black","name": "Black Sheet Strappy Textured Glitter Bodycon Dress","price": 10,
        "img": "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024"
        }
    it("When a Product Single Item with Name:Black Sheet Strappy Textured Glitter Bodycon Dress is Given component should run",()=>{
        // Act
        render(<ImageComponent itemRecord={singleItem} />)
        // Assertion
        expect(singleItem.name).toEqual('Black Sheet Strappy Textured Glitter Bodycon Dress')

    });
})