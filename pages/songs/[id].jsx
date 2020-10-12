import Head from 'next/head'
import Layout from '../../components/templates/Layout'
import styles from './songPage.module.css'
import Listening from '../../components/templates/Listening'
import Current from '../../components/templates/Current'
import Relate from '../../components/templates/Relate'
import {phoebe} from '../../components/templates/Relate/data'

export default function User(){
  return(
    <Layout >
      <Head>
        <title>Songs</title>
      </Head>

      <main className={styles.songPage}>
        <section className={styles.leftSide}>
          <Current/>
        </section>

        <section className={styles.rightSide}>
          <Listening/>
          <Relate title={phoebe.title} list={phoebe.list} />
          <Relate title={phoebe.title} list={phoebe.list} />
          <Relate title={phoebe.title} list={phoebe.list} />
          <Relate title={phoebe.title} list={phoebe.list} />
        </section>
      </main>
    </Layout>
  )
}