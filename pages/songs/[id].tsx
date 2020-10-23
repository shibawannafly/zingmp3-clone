import React, {useEffect} from 'react'
import Head from 'next/head'
import Layout from '../../components/templates/Layout'
import Listening from '../../components/templates/Listening'
import Current from '../../components/templates/Current'
import Relate from '../../components/templates/Relate'
import Player from '../../components/organisms/Player'

import styles from './songPage.module.css'

import {useSelector, connect, useDispatch} from 'react-redux'
import { FETCH_DATA } from '../../redux/actions/actions'
import { playMusic } from '../../redux/actions/musicAction'

const User:React.FC = ({fetchData}: any) => {

  const dispatch = useDispatch()

  useEffect(() => {
    fetchData()
    dispatch(playMusic(
      'Mine', 
      'Phoebe Ryan', 
      'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/2/d/2d12ca61d3a8f686f4505bc4f9112027_1438958829.jpg',
      'https://firebasestorage.googleapis.com/v0/b/my-cv-1206.appspot.com/o/Phoebe%20Ryan%20%E2%80%93%20Mine.mp3?alt=media&token=f72b7774-a70e-4d2e-a0b4-1bb542d90aed'
    ))
  }, [])

  const phoebe = useSelector(state => state.dataReducer.pageData.phoebe) || {}
  
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
        <Player
          name='All We Know'
          artist='The Chainsmokers, Phobe Ryan'
          imgUrl='https://avatar-nct.nixcdn.com/song/2018/10/16/e/7/6/4/1539671016316.jpg'
          songUrl='https://firebasestorage.googleapis.com/v0/b/my-cv-1206.appspot.com/o/Might%20%2B%20U%20-%20My%20Hero%20Academia%20Heroes%20Rising%20OST.mp3?alt=media&token=4a8007da-7fc5-4203-b849-0338264e1fc7'
        />
      </main>
    </Layout>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch({type: FETCH_DATA})
  }
}
export default connect(null, mapDispatchToProps)(User)