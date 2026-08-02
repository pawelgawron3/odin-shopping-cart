import normalizeProduct from "../helpers/normalizeProduct";

const API_URL = "https://dummyjson.com/products/category/sunglasses";
const API_URL_PRODUCT_ID = "https://dummyjson.com/products/";

export async function getProducts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data.products.map(normalizeProduct);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(API_URL_PRODUCT_ID + id);

    if (!response.ok) {
      throw new Error("Failed to fetch a product");
    }

    const data = await response.json();
    return normalizeProduct(data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
