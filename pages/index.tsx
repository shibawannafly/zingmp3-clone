import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/templates/Layout'
import Carousel from '../components/organisms/Carousel'
import ForYou from '../components/molecules/ForYou'
import HotTopic from '../components/organisms/HotTopic'
import Tab from '../components/organisms/Tab'
import TopFiveList from '../components/templates/TopFiveList'
import CardList from '../components/templates/CardList'
import NhacViet from '../components/templates/NhacViet'
import HotArtist from '../components/templates/HotArtist'
import Partner from '../components/templates/Partner'
import News from '../components/templates/News'
import Chart from '../components/templates/Chart'
import {connect} from 'react-redux'
import { FETCH_DATA } from '../redux/actions/actions'



const Home:React.FC = ({pageData, fetchData}: any) => {

  useEffect(() => {
    fetchData()
  }, [])

  
  const {
    weekMusic, weekMV, todayList, videoHot,
    albumHot, topFiveData
  } = pageData

  return (
    <>
      <Layout searchData={pageData}>
        <Head>
          <title>Zing MP3</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {
          (typeof(pageData.navData) !== 'undefined') 
          ? 
          (<main className={styles.main}>

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
          </main>) 
          : null

        }

      </Layout>
    </>
  )
}

const mapStateToProps = state => {
  return {
    pageData: state.dataReducer.pageData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch({type: FETCH_DATA})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
