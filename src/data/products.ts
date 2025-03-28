
export type ProductColor = 'white' | 'blue' | 'gray' | 'black' | 'red';

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

export interface Product {
  id: string;
  type: string;
  typeArabic: string;
  name: string;
  description: string;
  colors: ProductColor[];
  sizes: ProductSize[];
  images: {
    white: string;
    colored: string[];
  };
}

export const productTypes = [
  {
    id: 'half-sleeve-khonagi',
    label: 'نصف كم خناقي خرجي',
    description: 'قمصان نصف كم بياقة خناقي مناسبة للاستخدام اليومي والخروج',
  },
  {
    id: 'half-sleeve-round',
    label: 'نصف كم رقبة دائري',
    description: 'قمصان نصف كم برقبة دائرية أنيقة ومريحة',
  },
  {
    id: 'half-sleeve-v-neck',
    label: 'نصف كم رقبة سبعة',
    description: 'قمصان نصف كم برقبة على شكل سبعة (V) أنيقة',
  },
  {
    id: 'half-sleeve-collared',
    label: 'نصف كم ابو رقبة',
    description: 'قمصان نصف كم مع ياقة مميزة للإطلالة الرسمية',
  },
  {
    id: 'sleeveless-undershirt',
    label: 'فنايل علاقي',
    description: 'فنايل بدون أكمام خفيفة ومريحة',
  },
  {
    id: 'tank-top',
    label: 'فنايل كتافي',
    description: 'فنايل بأحزمة كتف عريضة للراحة اليومية',
  },
  {
    id: 'mens-short',
    label: 'شورت رجالي قصير',
    description: 'شورتات رجالية قصيرة مريحة للاستخدام اليومي',
  },
];

export const products: Product[] = [
  {
    id: 'half-sleeve-khonagi-1',
    type: 'half-sleeve-khonagi',
    typeArabic: 'نصف كم خناقي خرجي',
    name: 'قميص نصف كم خناقي كلاسيكي',
    description: 'قميص نصف كم بياقة خناقي مصنوع من القطن المصري الفاخر، مناسب للاستخدام اليومي والخروج',
    colors: ['white', 'blue', 'gray', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      white: '/assets/half-sleeve-khonagi-white.png',
      colored: [
        '/assets/half-sleeve-khonagi-blue.png',
        '/assets/half-sleeve-khonagi-gray.png',
        '/assets/half-sleeve-khonagi-black.png'
      ]
    }
  },
  {
    id: 'half-sleeve-round-1',
    type: 'half-sleeve-round',
    typeArabic: 'نصف كم رقبة دائري',
    name: 'قميص نصف كم رقبة دائرية كلاسيكي',
    description: 'قميص نصف كم برقبة دائرية مصنوع من القطن الناعم، مريح للاستخدام اليومي',
    colors: ['white', 'blue', 'gray', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      white: '/assets/half-sleeve-round-white.png',
      colored: [
        '/assets/half-sleeve-round-blue.png',
        '/assets/half-sleeve-round-gray.png',
        '/assets/half-sleeve-round-black.png'
      ]
    }
  },
  {
    id: 'half-sleeve-v-neck-1',
    type: 'half-sleeve-v-neck',
    typeArabic: 'نصف كم رقبة سبعة',
    name: 'قميص نصف كم رقبة سبعة كلاسيكي',
    description: 'قميص نصف كم برقبة على شكل V مصنوع من القطن الناعم، أنيق ومريح للاستخدام اليومي',
    colors: ['white', 'blue', 'gray', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      white: '/assets/half-sleeve-v-neck-white.png',
      colored: [
        '/assets/half-sleeve-v-neck-blue.png',
        '/assets/half-sleeve-v-neck-gray.png',
        '/assets/half-sleeve-v-neck-black.png'
      ]
    }
  },
  {
    id: 'half-sleeve-collared-1',
    type: 'half-sleeve-collared',
    typeArabic: 'نصف كم ابو رقبة',
    name: 'قميص نصف كم ابو رقبة كلاسيكي',
    description: 'قميص نصف كم مع ياقة مميزة مصنوع من القطن المصري الفاخر، مناسب للإطلالة الرسمية',
    colors: ['white', 'blue', 'gray', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      white: '/assets/half-sleeve-collared-white.png',
      colored: [
        '/assets/half-sleeve-collared-blue.png',
        '/assets/half-sleeve-collared-gray.png',
        '/assets/half-sleeve-collared-black.png'
      ]
    }
  },
  {
    id: 'sleeveless-undershirt-1',
    type: 'sleeveless-undershirt',
    typeArabic: 'فنايل علاقي',
    name: 'فنيلة علاقي كلاسيكية',
    description: 'فنيلة بدون أكمام خفيفة ومريحة مصنوعة من القطن المصري الفاخر',
    colors: ['white', 'blue', 'gray', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      white: '/assets/sleeveless-undershirt-white.png',
      colored: [
        '/assets/sleeveless-undershirt-blue.png',
        '/assets/sleeveless-undershirt-gray.png',
        '/assets/sleeveless-undershirt-black.png'
      ]
    }
  },
  {
    id: 'tank-top-1',
    type: 'tank-top',
    typeArabic: 'فنايل كتافي',
    name: 'فنيلة كتافي كلاسيكية',
    description: 'فنيلة بأحزمة كتف عريضة مصنوعة من القطن المصري الفاخر، مريحة للاستخدام اليومي',
    colors: ['white', 'blue', 'gray', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      white: '/assets/tank-top-white.png',
      colored: [
        '/assets/tank-top-blue.png',
        '/assets/tank-top-gray.png',
        '/assets/tank-top-black.png'
      ]
    }
  },
  {
    id: 'mens-short-1',
    type: 'mens-short',
    typeArabic: 'شورت رجالي قصير',
    name: 'شورت رجالي قصير كلاسيكي',
    description: 'شورت رجالي قصير مصنوع من القطن المصري الفاخر، مريح للاستخدام اليومي',
    colors: ['white', 'blue', 'gray', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      white: '/assets/mens-short-white.png',
      colored: [
        '/assets/mens-short-blue.png',
        '/assets/mens-short-gray.png',
        '/assets/mens-short-black.png'
      ]
    }
  }
];

// Helper function to get products by type
export const getProductsByType = (type: string): Product[] => {
  return products.filter(product => product.type === type);
};

// Helper function to get all types
export const getAllTypes = (): { id: string; label: string; description: string }[] => {
  return productTypes;
};
