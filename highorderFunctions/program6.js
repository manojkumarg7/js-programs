const shoppingCart = [
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Apple", price: 1.99, quantity: 10 },
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Xiomi", price: 2.99, quantity: 2 },
  { name: "Samsung", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 4.99, quantity: 4 },
  { name: "Nokia", price: 4.99, quantity: 4 },
];

const products = shoppingCart.reduce((productGroup, product) => {
  const name = product.name;
  if (productGroup[name] == null) {
    productGroup[name] = [];
  }
  productGroup[name].push(product);
  return productGroup;
}, {});

console.log(products);
