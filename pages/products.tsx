import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Products.module.css'

import productData from '../fixtures/productsData.js';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Products Grid</title>
        <meta name="description" content="A demonstration of the image component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <div className={styles.layout}> 
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Example Product Grid
                </h1>
        </div>
            <div className={styles.contentArea}>
                <div className={styles.leftNav} ></div>
                <div className={styles.gridContainer}>
                    {productData.map(({url, description, price, stock}, i) => <ProductTile url={url} description={description} price={price} stock={stock} gridPosition={i} />)}
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

type ProductTileProps = {
    url: string,
    description: string,
    price: string,
    stock: string,
    gridPosition: number
}

const ProductTile = (props: ProductTileProps) => {
    return <div className={styles.productTile}>
        <div className={styles.imgContainer}>
            <Image layout="fill" src={props.url} objectFit="cover"
            priority={props.gridPosition <=2}
            sizes="(max-width: 1000px) 50vw,
                   (max-width: 1500px) 33vw,
                   28vw"/>
        </div>
        <div className={styles.productDescription}>{props.description}</div>
        <div className={styles.productPrice}>{props.price}</div>
        <div className={styles.productStock}>{props.stock}</div>

    </div>
}

export default Home
