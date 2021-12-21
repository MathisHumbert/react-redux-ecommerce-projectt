export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

export const getUniqueValues = (products, type) => {
  let tempProducts = products.map((product) => product[type]);
  if (type === 'colors') {
    tempProducts = tempProducts.flat();
  }
  tempProducts = ['all', ...new Set(tempProducts)];
  return tempProducts;
};
