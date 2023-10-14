import Image from 'next/image'
import styles from './page.module.css'
import SoldTable from './components/SoldTable/SoldTable'

export default function Home() {
  return (
    <main className={styles.main}>
      <SoldTable />
    </main>
  )
}
