export const findProductInCart = (cart: any[], product: any) => {
  return cart.find((cartProduct) => cartProduct.id === product.id);
};
