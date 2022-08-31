export interface IProductItem {
    id?: number;
    colour: string;
    name: string;
    price: float;
    img: string;
  }
export interface ICartItem extends IProductItem {
    quantity:number
}