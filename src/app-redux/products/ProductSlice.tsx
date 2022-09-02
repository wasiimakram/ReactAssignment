import { createSlice } from "@reduxjs/toolkit";
import { ICartItem, IProductItem } from "../../comon/typings/products";

import { RootState } from "../store";
import {getProductsListing} from "./actions/ProductActions";

interface ProductState {
  status: "idle" | "loading" | "failed" ;
  products: IProductItem[];
  allProducts: IProductItem[];
  cart:ICartItem[];
  cartTotal:number;
}
const initialState: ProductState = {
  status: 'idle',
  products: [],
  allProducts: [],
  cart:[],
  cartTotal:0,
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addToCart: (state:ProductState,action:any) => {
        const itemInCart:any = state.cart.find((item:any) => item.id === action.payload.id);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            state.cart.push({ ...action.payload, quantity: 1 });
        }
        let total=0;
        state.cart.map((item:any) => {
          total+=item.price*item.quantity;
        });
        state.cartTotal=total;
    },
    decrementCart: (state: ProductState,action:any) => {
      console.log(action,action.payload)
      const item:any = state.cart.find((item:ICartItem) => item.id === action.payload.id);
      if (item.quantity <= 0) {
        const removeItem = state.cart.filter((item:ICartItem) => item.id !== action.payload.id);
        state.cart = removeItem;
      }else item.quantity--;
      let total=0;
      state.cart.map((item:any) => {
        total+=item.price*item.quantity;
      });
      state.cartTotal=total;
      
    },
    removeFromCart: (state:ProductState, action:any) => {
        const removeItem = state.cart.filter((item:ICartItem) => item.id !== action.payload.id);
        state.cart = removeItem;
        let total=0;
        state.cart.map((item:any) => {
          total+=item.price*item.quantity;
        });
        state.cartTotal=total;
    },
    filterProducts: (state:ProductState, action:any) => {
        const filterData = state.allProducts.filter((item:IProductItem) => item.colour === action.payload);
        if(filterData.length!==0) state.products = filterData;
        else state.products = state.allProducts;
    }
    
  },
  extraReducers: (builder:any) => {
    // handle Asynchronous Calls
    // Get getProductsListing methods
    builder.addCase(getProductsListing.pending, (state:ProductState) => {
      state.status = 'loading';
    });
    builder.addCase(getProductsListing.rejected, (state:ProductState) => {
      state.status = 'failed';
    });
    builder.addCase(getProductsListing.fulfilled, (state:ProductState, action:any) => {
      state.status = 'idle';
      state.products = action.payload;
      state.allProducts = action.payload;
    });
    // ./getProductsListing methods
    
  },
});


export const { addToCart, decrementCart ,removeFromCart,filterProducts} = productSlice.actions; 
export const selectProducts = (state: RootState) => state.products.products;
export const selectCart = (state: RootState) => state.products.cart;
export const selectCartTotal = (state: RootState) => state.products.cartTotal;

