import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles}>
  <!-- style.footer-->
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
        <a href="{Vis.js}" >click </a>
      </footer>
    </>
  )
}
