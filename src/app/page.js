import Image from 'next/image'
import styles from './page.module.css'
import { Suspense } from 'react'
import Products from './products/page'
import Loading from './loading'

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback = {<Loading/>}>
      <Products/>
      </Suspense>
    </main>
  )
}
