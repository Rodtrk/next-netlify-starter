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
         <input type="text" name="name" required/>
         <input type="text" name="pass" required/>
        </p>
        <input type="submit" name="name" value="Sava"/>
      </main>

      <Footer />
    </div>
  )
}
