import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <div>
          <h1>ToDo</h1>
        </div>
      </section>
      <section>
      <div>
          <h1>Bugs</h1>
        </div>
      </section>
      <section>
      <div>
          <h1>InProgress</h1>
        </div>
      </section>
      <section>
      <div>
          <h1>Complete</h1>
        </div>
      </section>
    </main>
  )
}
