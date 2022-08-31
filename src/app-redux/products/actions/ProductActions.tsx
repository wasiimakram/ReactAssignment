import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getProductsListing = createAsyncThunk(
  "products/getProductsListing", 
  async () => {
    try {
      const res = await axios.get("https://my-json-server.typicode.com/benirvingplt/products/products");
      if (res.data) return res.data;
      else throw new Error('API Error');
    } catch (error) {
      throw error;
    }
  }
);
