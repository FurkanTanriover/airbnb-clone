import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Furki Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      <main>
        <section className=' pt-6'>
          <h2 className='text-4xl font-semibold pb-5'> Explore Nearby</h2>
        </section>
      </main>
     </div>
  )
}

export default Home
