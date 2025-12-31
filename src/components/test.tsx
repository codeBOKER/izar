// src/supabaseClient.js
import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { Url } from 'url'

const SupabaseTest: React.FC = () => {
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});

  useEffect(() => {
      async function loadData() {
        const { data, error } = await supabase.from('core_category').select('*')
        if (error) console.error(error)
        else {
          setCategories(data)
          // Fetch last 2 products for each category
          const productsMap = {}
          for (const category of data) {
            const { data: products, error: productError } = await supabase
              .from('core_product')
              .select('*')
              .eq('category_id', category.id)
              .order('created_at', { ascending: false })
              .limit(2)
            
            if (!productError) {
              // For each fetched product, also fetch its colors and attach them
              const productsWithColors = []
              for (const product of products) {
                // Assumption: product colors are stored in `core_product_color` with a `product_id` column.
                // If your DB table has a different name or column, adjust the query accordingly.
                const { data: colors, error: colorsError } = await supabase
                  .from('core_productcolor')
                  .select('*')
                  .eq('product_id', product.id)

                if (!colorsError) {
                  productsWithColors.push({ ...product, colors })
                } else {
                  // If colors query failed, still include the product with an empty colors array.
                  productsWithColors.push({ ...product, colors: [] })
                }
              }

              productsMap[category.id] = productsWithColors
            }
          }
          setCategoryProducts(productsMap)
          
          
        }
      }
      loadData()
    }, [])

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map(
          (category) => (
            <li key={category.id}>
              {category.id}: {category.header}
            </li>
        ))}
      </ul>
      <h1>Products</h1>
      <ul>
        {Object.entries(categoryProducts).map(
          ( [categoryId, products]) => (
            <li key={categoryId}>
              <h2>Category ID: {categoryId}</h2>
              <ul>
                {products.map((product) => (
                  <li key={product.id}>
                    {product.id}: {product.header} : {product.description} : {product.category_id}
                    {product.colors && product.colors.length > 0 && (
                      <ul>
                        {product.colors.map((color: any) => (
                          <li key={color.id ?? color.code ?? color.name}>
                            {color.name ?? color.color ?? color.code ?? JSON.stringify(color)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  )
}


export default SupabaseTest;