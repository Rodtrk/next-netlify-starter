import styles from './Footer.module.css'
import js from './Vis.js'

export default function Footer() {
  return (
    <>
      <footer className={styles}>
  <!-- style.footer-->
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
        <a href={js} >click </a>
      </footer>
    </>
  )
}
