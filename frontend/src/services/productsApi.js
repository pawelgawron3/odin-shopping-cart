const API_URL = "https://dummyjson.com/products/category/sunglasses";

export async function GetProducts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = response.json();
    return data.products;
  } catch (err) {
    console.log(err);
  }
}
