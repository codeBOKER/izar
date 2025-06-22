export interface ProductColor {
  id: number;
  name: string;
  color_code: string;
  image: string;
  is_available: boolean;
  product: number;
}

export interface Product {
  id: number;
  header: string;
  description: string;
  category: string;
  colors: ProductColor[];
}

// Helper function to get products by type
export const getProductsByType = (products: Product[], category: string): Product[] => {
  return products.filter(product => product.category === category);
};

