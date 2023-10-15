import axios from "axios";

export const GetAllProducts = async () => {
  return axios.get(`https://dummyjson.com/products`)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      throw err;
    });
}

export const GetProductById = async (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      throw err;
    });
}

export const GetAllCategorias = async () => {
  return axios.get(`https://dummyjson.com/products/categories`)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      throw err;
    });
}

export const GetProductsByCategories = async (category) => {
  return axios.get(`https://dummyjson.com/products/category/${category}`)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      throw err;
    });
}

export const GetAllProductImages = async () => {
  const allProductImages = [];

  const productResponse = await GetAllProducts();
  const products = productResponse.data.products;

  for (const product of products) {
    const images = product.images;
    allProductImages.push(...images);
  }

  return allProductImages;
}
