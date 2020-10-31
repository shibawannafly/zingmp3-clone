import React, {useState, useEffect, useCallback} from 'react'
import Head from 'next/head'
import Layout from '../../components/templates/Layout'
import Listening from '../../components/templates/Listening'
import Current from '../../components/templates/Current'
import Relate from '../../components/templates/Relate'
import Player from '../../components/organisms/Player'

import styles from './songPage.module.css'

import { connect, useDispatch} from 'react-redux'
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
  const KeyCtrl = useKeyPress('Control')

  const changeSong = (option, album) => {
    let index = findIndexOfListening(listening, album)
    let newIndex = null
    if(option === -1){
      newIndex = (index - 1 < 0) ? album.length - 1 : index - 1
    } else {
      newIndex = (index + 1 > album.length - 1) ? 0 : index + 1
    }
    
    dispatch({type: PLAY_MUSIC, payload: {...album[newIndex]}})
  } 

  useEffect(() => {
    if(KeyCtrl && ArrowLeft){
      changeSong(-1, album)
    }
    if(KeyCtrl && ArrowRight) {
      changeSong(1, album)
    }

    // if(KeyL) {

    // }

    // if(KeyP) {
    //   setIsRun(!isRun)
    // }
  }, [ArrowLeft, ArrowRight, KeyCtrl])

  const handleUserKeyPress = useCallback(e => {
    if(e.keyCode === 32){
      e.preventDefault()
      setIsRun(!isRun)
    }
  }, [isRun])

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  })

  // const handleKeyPress = e => {
  //   if(e.keyCode === 32){
  //     e.preventDefault()
  //     setIsRun(!isRun)
  //   }
  // }

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
    <Layout marginB={70}>
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
            changeSong={changeSong}
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