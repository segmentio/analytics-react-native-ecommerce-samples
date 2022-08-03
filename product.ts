import {Grip} from './types';
import {shippingPrice} from './data/productInfo';
const taxRate = 0.07;
export class Product {
  public name: string = '';
  public price: number = 0;
  public category: string = '';
  public size: number = 0;
  public grip: Grip = {name: '', price: 0};
  public quantity: number = 0;

  public constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }

  totalPrice() {
    let productPrice = (this.price + this.grip.price) * this.quantity;
    let tax = productPrice * taxRate;
    let purchasePrice = productPrice + tax + shippingPrice;
    return purchasePrice.toFixed(2);
  }
}
