import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
        <meta
          name="google-site-verification"
          content="OXeGN1_nXQnlNCENwciQK7-rJoU5ufVOvO3h2PJxLjo"
        />
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch(
    'https://fakestoreapi.com/products',
  ).then((res) => res.json())

  return { props: { products } }
}

//
