import React, {useState, useRef, useEffect} from 'react'
import styles from './Player.module.scss'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  HeartOutlined,
  MoreOutlined,
  OrderedListOutlined
} from '@ant-design/icons'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { PlayIcon, PauseIcon, LoopIcon, RandomIcon, MicroIcon } from '../../atoms/Icon'
import {Slider} from 'antd'
import { connect } from 'react-redux'
import { PLAY_MUSIC } from '../../../redux/actions/musicAction'
import PlayList from '../PlayList'

import useKeyPress from '../../../hooks/useKeyPress'
import {useDispatch, useSelector} from 'react-redux'

const Player: React.FC = ({listening, isRun, handlePlayMusic, album, changeSong}: any) => {
  const audioRef = useRef(null) 
  const dispatch = useDispatch()
  const [currentTime, setCurrentTime] = useState(0)
  // const [isPlay, setPlay] = useState(false)
  const [durString, setDurString] = useState('--:--')
  const [volumeIcon, setVolumeIcon] = useState(true)
  const [volume, setVolume] = useState(100)
  const [loop, setLoop] = useState(false)
  const [random, setRandom] = useState(false)
  const [openPL, setOpenPL] = useState(false)

  const playListQuantities = useSelector(state => state.musicReducer.playList.length)

  const keyM = useKeyPress('m')
  const KeyL = useKeyPress('l')
  const KeyR = useKeyPress('r')

  useEffect(() => {
    if(keyM){
      if(volumeIcon){
        audioRef.current.volume = 0
      } else {
        audioRef.current.volume = 1
      }
      setVolumeIcon(!volumeIcon)
    }
    if(KeyL){
      handleLoop()
    }
    if(KeyR){
      handleRandom()
    }
  }, [keyM, KeyL, KeyR])


  // const handleLoadedData = () => {
    // console.log(audioRef.current.duration)
    // setDurString(formatDuration(audioRef.current.duration))
    // setDuration(audioRef.current.duration)
    // if(isPlay) audioRef.current.play()
  // }

  const {name, artist, imgUrl, songUrl, duration} = listening

  useEffect(() => {
    if(duration){
      let arr = duration.split(':')
      setDurString(String(Number(arr[0]) * 60 + Number(arr[1])))
    }
    isRun ? audioRef.current.play() : audioRef.current.pause();
  }, [duration, isRun])

  const handleTimeSliderChange = (value) => {
    audioRef.current.currentTime = value
    setCurrentTime(value)
    if(!isRun){
      handlePlayMusic(true)
      audioRef.current.play()
    }
  }

  const handlePausePlayClick = () => {
    handlePlayMusic(!isRun);
  } 

  const handleEnded = () => {
    if(random) {
      let index, newIndex
      album.forEach(item => {
        if(item.name === listening.name){
          index = album.indexOf(item)
          newIndex = index
        }
      })
      while(index === newIndex) {
        newIndex = Math.floor(Math.random() * album.length)
      }

      // dispatch action play random music
      dispatch({type: PLAY_MUSIC, payload: {...album[newIndex]}})
    } else {
      handlePlayMusic(false)
    }
  }


  const formatDuration = (dur:number) => {
    let minute:any = Math.floor(dur / 60)
    let second:any = Math.floor(dur % 60)
    if (minute < 10) minute = '0' + minute
    if (second < 10) second = '0' + second
    return `${minute}:${second}`
  }

  const handleChangeVolume = value => {
    setVolume(value)
    // volume in range 0 - 1
    audioRef.current.volume = value / 100
    if(value === 0){
      setVolumeIcon(false)
    } else {
      setVolumeIcon(true)
    }
  }

  const handleToggleVolume = () => {
    if(volumeIcon){
      audioRef.current.volume = 0
    } else {
      audioRef.current.volume = volume / 100
    }
    setVolumeIcon(prev => !prev)
  }

  const handleLoop = () => {
    audioRef.current.loop = !audioRef.current.loop
    setLoop(audioRef.current.loop)
  }

  const handleRandom = () => {
    setRandom(!random)
  }


  return (
    <section className={styles.playerWrapper}>
      <div className={styles.player}>
        <div className={styles.controls}>
          <div className={styles.controlBtn} onClick={() => changeSong(-1, album)}>
            <StepBackwardOutlined/>
          </div>
          <div className={styles.playPause} onClick={handlePausePlayClick}>
            {
              isRun ? 
                <PauseIcon/>
              : 
                <PlayIcon />
            } 
          </div>
          <div className={styles.controlBtn} onClick={() => changeSong(1, album)}>
            <StepForwardOutlined />
          </div>
          
          <div className={`${styles.controlBtn} ${loop ? styles.active : ''}`} 
            onClick={handleLoop} >
            <LoopIcon />
          </div>

          <div className={`${styles.controlBtn} ${random ? styles.active : ''}`} 
            onClick={handleRandom}
          >
            <RandomIcon />
          </div>

        </div>

        <div className={styles.details}>
          <img src={imgUrl} alt="player-img"/>
          <div className={styles.info}>
            <div className={styles.content}>
              <div className={styles.songName}>{name} - {artist}</div>
              <div className={styles.duration}>{formatDuration(currentTime)} / {formatDuration(Number(durString))}</div>
            </div>
            <div className={styles.playProcess}>
              <Slider
                min={0}
                max={Number(durString)}
                onChange={handleTimeSliderChange}
                value={currentTime}
                step={1} style={{margin: '2px 6px'}}
                tooltipVisible={false}
              />
              </div>
              <audio 
                src={songUrl}
                ref={audioRef}
                // onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onEnded={handleEnded}
              />
          </div>
        </div>
 
        <div className={styles.features}>
          <div className={styles.featuresBtn}>
            <HeartOutlined />
          </div>
          <div className={styles.featuresBtn}>
            {
              volumeIcon ? 
                <VolumeUpIcon style={{color: '#fff', fontSize: 20}} onClick={handleToggleVolume} />
              : <VolumeOffIcon style={{color: '#fff', fontSize: 20}} onClick={handleToggleVolume} />
            }
             
            <div className={styles.volumeSlider}>
              <Slider 
                vertical
                min={0}
                max={100}
                step={1}
                defaultValue={volume}
                onChange={handleChangeVolume}
                style={{height: '100%', margin: 'auto'}}
              />
            </div>
          </div>

          <div className={styles.featuresBtn}>
            <MicroIcon/>
          </div>
          
          <div className={styles.featuresBtn}>
            <MoreOutlined style={{transform: 'rotate(90deg)'}}/>
          </div>
        </div> 

        <div className={styles.divider}></div>

        <div className={styles.playListContainer}>
          <div className={styles.playListBtn} onClick={() => setOpenPL(!openPL)}>
            <div><OrderedListOutlined /></div>
            <div style={{userSelect: 'none'}}>Danh sách phát{`(${playListQuantities})`}</div>
          </div>
          {openPL && <PlayList/>}
        </div>

      </div>
      
    </section>
  )
}

const mapStateToProps = state => {
  return {
    listening: state.musicReducer.listening,
    album: state.musicReducer.songPageData.album
  }
}

export default connect(mapStateToProps, null)(Player)