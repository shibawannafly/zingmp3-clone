import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/templates/Layout'
import Carousel from '../components/organisms/Carousel'
import ForYou from '../components/molecules/ForYou'
import HotTopic from '../components/organisms/HotTopic'
import Tab from '../components/organisms/Tab'
import { weekMusic, weekMV } from '../components/organisms/Tab/tabData'
import TopFiveList from '../components/templates/TopFiveList'
import { topFiveData } from '../components/templates/TopFiveList/topFiveData'
import CardList from '../components/templates/CardList'
import { todayList, videoHot, albumHot } from '../components/templates/CardList/cardData'
import NhacViet from '../components/templates/NhacViet'
import HotArtist from '../components/templates/HotArtist'
import Partner from '../components/templates/Partner'
import News from '../components/templates/News'
import Chart from '../components/templates/Chart'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Zing MP3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <section className={styles.leftSide}>
          <Carousel/>
          <Chart/>
          <TopFiveList list={topFiveData} iconSize={24} />

          {/* vui ve moi ngay */}
          <CardList
            title={todayList.title}
            list={todayList.list}
            imgH={todayList.imgH}
          />

          {/* video hot */}

          <CardList
            title={videoHot.title}
            list={videoHot.list}
            imgH={videoHot.imgH}
          />

          {/* album hot */}

          <CardList
            title={albumHot.title}
            list={albumHot.list}
            imgH={albumHot.imgH}
          />

          {/* nhac viet */}
          <NhacViet/>

          {/* nghe si hot */}
          <HotArtist/>

        </section>

        <aside className={styles.rightSide}>
          <ForYou/>
          <HotTopic/>
          <Tab title={weekMusic.title} content={weekMusic.content} />
          <Tab title={weekMV.title} content={weekMV.content} type='thumb' h={60}/>
          <Tab title={weekMV.title} content={weekMV.content} type='thumb' h={110}/>
          <News/>
        </aside>

        {/* doi tac */}
        <aside className={styles.partnerContainer}>
          <Partner/>
        </aside>

      </main>
    </Layout>
  )
}
