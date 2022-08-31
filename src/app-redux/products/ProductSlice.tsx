import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, IProductItem } from "../../comon/typings/products";

import { RootState } from "../store";
import {getProductsListing} from "./actions/ProductActions";

interface ProductState {
  status: "idle" | "loading" | "failed" ;
  products: IProductItem[];
  allProducts: IProductItem[];
  cart:ICartItem[];
}
const initialState: ProductState = {
  status: 'idle',
  products: [],
  allProducts: [],
  cart:[]
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
    },
    decrementCart: (state: ProductState,action:any) => {
      console.log(action,action.payload)
      const item:any = state.cart.find((item:ICartItem) => item.id === action.payload.id);
      if (item.quantity <= 0) {
        const removeItem = state.cart.filter((item:ICartItem) => item.id !== action.payload.id);
        state.cart = removeItem;
      }else item.quantity--;
      
    },
    removeFromCart: (state:ProductState, action:any) => {
        const removeItem = state.cart.filter((item:ICartItem) => item.id !== action.payload.id);
        state.cart = removeItem;
      },
    filterProducts: (state:ProductState, action:any) => {
        const filterData = state.allProducts.filter((item:IProductItem) => item.colour == action.payload);
        if(filterData.length!==0) state.products = filterData;
        else state.products = state.allProducts;
      },
    
  },
  extraReducers: (builder) => {
    // handle Asynchronous Calls
    // Get getProductsListing methods
    builder.addCase(getProductsListing.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getProductsListing.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(getProductsListing.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.products = payload;
      state.allProducts = payload;
    });
    // ./getProductsListing methods
    
  },
});


export const { addToCart, decrementCart ,removeFromCart,filterProducts} = productSlice.actions; 
export const selectProducts = (state: RootState) => state.products.products;
export const selectCart = (state: RootState) => state.products.cart;

