export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/categories=${categoryId}&q=${query}`;

  const productsByCategoryAndQuery = await fetch(url)
    .then((response) => response.json());
  return productsByCategoryAndQuery;
}
