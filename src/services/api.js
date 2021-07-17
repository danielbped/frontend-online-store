export async function getCategories() {
  const linkAPI = 'https://api.mercadolibre.com/sites/MLB/categories';
  const getFetch = fetch(linkAPI).then((response) => response.json());
  return getFetch;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let linkAPI;
  if (categoryId && query) linkAPI = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  else if (query) linkAPI = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  else linkAPI = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const getFetch = fetch(linkAPI).then((response) => response.json());
  return getFetch;
}
