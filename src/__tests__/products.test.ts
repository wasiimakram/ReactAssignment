import { render, screen } from '@testing-library/react';
import { useAppSelector } from '../app-redux/hooks';
import { selectProducts } from '../app-redux/products/ProductSlice';
import { Products } from '../modules/products';

test('should render Products',()=>{
    const allProducts=useAppSelector(selectProducts);
    // render(<Products />);
    // expect(true).toBe(true);
})

export{}