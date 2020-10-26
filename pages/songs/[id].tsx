import React, {useState, useEffect, useCallback} from 'react'
import Head from 'next/head'
import Layout from '../../components/templates/Layout'
import Listening from '../../components/templates/Listening'
import Current from '../../components/templates/Current'
import Relate from '../../components/templates/Relate'
import Player from '../../components/organisms/Player'

import styles from './songPage.module.css'

import {useSelector, connect, useDispatch} from 'react-redux'
import { FETCH_SONG_PAGE_DATA } from '../../redux/actions/musicAction'
import { PLAY_MUSIC } from '../../redux/actions/musicAction'

import useKeyPress from '../../hooks/useKeyPress'

const User:React.FC = ({fetchSongPageData, songPageData, listening}: any) => {
  const [isRun, setIsRun] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetchSongPageData()
  }, [])

  const handlePlayMusic = () => {
    setIsRun(isRun => !isRun)
  }

  const findIndexOfListening = (listening, album) => {
    let index = 0
    album.forEach(item => {
      if(item.name === listening.name)
        index = album.indexOf(item)
    })
    return index
  }

  const ArrowLeft = useKeyPress('ArrowLeft')
  const ArrowRight = useKeyPress('ArrowRight')
  const KeyP = useKeyPress('p')

  useEffect(() => {
    if(ArrowLeft){
      let index = findIndexOfListening(listening, album)
      let prev = (index - 1 < 0) ? album.length - 1 : index - 1
      dispatch({type: PLAY_MUSIC, payload: {...album[prev]}})
    }
    if(ArrowRight) {
      let index = findIndexOfListening(listening, album)
      let next = (index + 1 > album.length - 1) ? 0 : index + 1
      dispatch({type: PLAY_MUSIC, payload: {...album[next]}})
    }
    if(KeyP) {
      setIsRun(!isRun)
    }
  }, [ArrowLeft, ArrowRight, KeyP])

  // const handleKeyPress = e => {
  //   let index = findIndexOfListening(listening, album)
  //   switch(e.keyCode){
  //     case 80: // space, play/pause
  //       setIsRun(!isRun)
  //       return

  //     case 37: // left arrow, prev song
  //       let prev = (index - 1 < 0) ? album.length - 1 : index - 1
  //       dispatch({type: PLAY_MUSIC, payload: {...album[prev]}})
  //       return

  //     case 39: // right arrow, next song
  //       let next = (index + 1 > album.length - 1) ? 0 : index + 1
  //       dispatch({type: PLAY_MUSIC, payload: {...album[next]}})

  //     default: return
  //   }
  // }


  const {album, phoebe} = songPageData

  return(
    <Layout >
      <Head>
        <title>Songs</title>
      </Head>
      
      {
        typeof album !== 'undefined' ?
        (<main className={styles.songPage} /*onKeyDown={handleKeyPress} tabIndex={0}*/>

          <section className={styles.leftSide}>
            <Current
              isRun={isRun}
              handlePlayMusic={handlePlayMusic}
            />
          </section>
  
          <section className={styles.rightSide}>
            <Listening/>
            <Relate title={phoebe.title} list={phoebe.list} />
            <Relate title={phoebe.title} list={phoebe.list} />
            <Relate title={phoebe.title} list={phoebe.list} />
            <Relate title={phoebe.title} list={phoebe.list} />
          </section>

          <Player
            isRun={isRun}
            handlePlayMusic={handlePlayMusic}
          />

        </main>) : null
      }
      
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    songPageData: state.musicReducer.songPageData,
    listening: state.musicReducer.listening
  }; 
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSongPageData: () => dispatch({type: FETCH_SONG_PAGE_DATA})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User) 