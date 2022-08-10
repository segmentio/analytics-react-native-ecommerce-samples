import {Product} from './types';
import {shippingPrice} from './data/productInfo';

const taxRate = 0.07;

type CalculatedPrices = {
  estimatedTax: string;
  totalPrice: string;
};

export const calculatePrice = (product: Product): CalculatedPrices => {
  let productPrice = (product.price + product.grip.price) * product.quantity;
  let tax = productPrice * taxRate;
  let purchasePrice = productPrice + tax + shippingPrice;
  let estimatedTax = tax.toFixed(2);
  let totalPrice = purchasePrice.toFixed(2);
  return {
    estimatedTax: estimatedTax,
    totalPrice: totalPrice,
  };
};
