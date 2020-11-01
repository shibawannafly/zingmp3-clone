import React, {useState, useRef, useEffect} from 'react'
import styles from './Player.module.scss'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  HeartOutlined,
  MoreOutlined
} from '@ant-design/icons'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { PlayIcon, PauseIcon, LoopIcon, RandomIcon, MicroIcon } from '../../atoms/Icon'
import {Slider} from 'antd'
import { connect } from 'react-redux'

import useKeyPress from '../../../hooks/useKeyPress'


const Player: React.FC = ({listening, isRun, handlePlayMusic, album, changeSong}: any) => {
  const audioRef = useRef(null) 

  const [currentTime, setCurrentTime] = useState(0)
  // const [isPlay, setPlay] = useState(false)
  const [durString, setDurString] = useState('--:--')
  const [volumeIcon, setVolumeIcon] = useState(true)
  const [volume, setVolume] = useState(100)
  const [loop, setLoop] = useState(false)

  const keyM = useKeyPress('m')
  const KeyL = useKeyPress('l')
  // const KeyCtrl = useKeyPress('Control')

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
  }, [keyM, KeyL])


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
          
          <div className={`${styles.controlBtn} ${loop ? styles.loop : ''}`} 
            onClick={handleLoop} >
            <LoopIcon />
          </div>

          <div className={styles.controlBtn}>
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
              />
              </div>
              <audio 
                src={songUrl}
                ref={audioRef}
                // onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onEnded={() => handlePlayMusic(false)}
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