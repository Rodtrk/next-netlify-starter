import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Login page!" />
        <p className="description">
          <p>
            <input type="text" name="name" required/>
          </p>
          <p>
            <input type="text" name="pass" required/>
          </p>
         </p>
        <input type="submit" name="sub" value="Save"/>
      </main>

      <Footer />
    </div>
  )
}
