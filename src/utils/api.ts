
export const API_BASE_URL = 'http://localhost:8000';

export const apiEndpoints = {
  products: `${API_BASE_URL}/api/products/`,
  productDetail: (id: string) => `${API_BASE_URL}/api/products/${id}/`,
  categories: `${API_BASE_URL}/api/categories/`,
  categoryDetail: (id: string) => `${API_BASE_URL}/api/categories/${id}/`,
  categoryProducts: (id: string) => `${API_BASE_URL}/api/categories/${id}/products/`,
};
