import { 
  ProductButtons, 
  ProductCard, 
  ProductImage, 
  ProductTitle 
} from "../components"

import '../styles/custom-styles.css'

import { useShoppingCart } from "../hooks"
import { products } from "../data/products"

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart()
  return (
    <main>
      <h1>Shopping Store</h1>
      <hr />
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {
          products.map(product => (
            <ProductCard 
                  key={product.id}
                  product={product}
                  className='bg-dark text-white'
                  onChange={(event) => onProductCountChange(event) }
                  value={ shoppingCart[product.id]?.count || 0 }
                >
                  <ProductImage 
                    className='custom-image'
                  />
                  <ProductTitle 
                    className='text-bold'
                  />
                  <ProductButtons 
                    className='custom-buttons'
                  />
            </ProductCard>
          ))
        }
      </section>
      <aside className = "shopping-cart">
        {
          Object.entries(shoppingCart).map(([ key, product ]) => (
            <ProductCard
              key={ key }
              product={ product }
              className='bg-dark text-white'
              style={{ width: '100px' }}
              onChange={ ({ count, product }) => onProductCountChange({ count, product }) }
              value={ product.count }
            >
              <ProductImage 
                  className='custom-image'
                  />
              <ProductButtons 
                  className='custom-buttons'
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
              />
            </ProductCard>
          ))
        }
      </aside>
    </main>
  )
}
