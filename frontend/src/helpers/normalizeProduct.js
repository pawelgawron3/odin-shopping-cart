export default function normalizeProduct(product) {
  return {
    id: product.id,
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.images[0],
  };
}
