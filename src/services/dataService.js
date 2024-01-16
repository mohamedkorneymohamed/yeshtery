import productsData from "../data/products-data.json";

const ProductService = {
  getAllProducts: () => {
    return productsData.products;
  },
  getCart: () => {
    return productsData.numberOfCart;
  },
};

export default ProductService;
