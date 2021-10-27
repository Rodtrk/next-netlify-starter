import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Vis from '@components/Vis'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="LOGIN!" />
        <p className="description">
          <p>
            <input type="text" name="name" placeholder="Username" required/>
          </p>
          <p>
            <input type="password" name="pass" placeholder="Password" required/>
          </p>
         </p>
        <input type="submit" name="sub" value="Save"/>
      </main>
     
    </div>
  )
}
