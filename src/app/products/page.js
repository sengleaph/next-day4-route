import Link from 'next/link'
import styles from './../page.module.css'

export const metadata = {
  title : 'ISTAD - Products'
}

async function fetchProducts(){
  //similar serverside
  const resp = await fetch("https://api.escuelajs.co/api/v1/products")
  cache: "no-store"
  return resp.json()
}


export default async function Products() {
  const products = await fetchProducts()
  return (
    <main className={styles.main}>
      {
        products.map(product => (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/products/${product.id}`}>
            <h1>{product.title}</h1>
          </Link>

        
        ))
      }
    </main>
  )
}

