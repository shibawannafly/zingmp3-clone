import React, {useState, useRef} from 'react'
import styles from './Player.module.scss'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  CaretRightOutlined,
  PauseOutlined,
  HeartOutlined,
  MoreOutlined
} from '@ant-design/icons'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

import {Slider} from 'antd'

type Props = {
  name: string,
  artist: string,
  imgUrl: string,
  songUrl: string
}

const Player: React.FC<Props> = ({name, artist, imgUrl, songUrl}: Props) => {
  const audioRef = useRef(null) 

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlay, setPlay] = useState(false)
  const [volumn, setVolumn] = useState(1)

  const handleLoadedData = () => {
    console.log(audioRef.current.duration)
    setDuration(audioRef.current.duration)
    if(isPlay) audioRef.current.play()
  }

  const handleTimeSliderChange = (value) => {
    audioRef.current.currentTime = value
    setCurrentTime(value)
    if(!isPlay){
      setPlay(true)
      audioRef.current.play()
    }
  }

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  } 

  const formatDuration = (dur:number) => {
    let minute:any = Math.floor(dur / 60)
    let second:any = Math.floor(dur % 60)
    if (minute < 10) minute = '0' + minute
    if (second < 10) second = '0' + second
    return `${minute}:${second}`
  }

  return (
    <section className={styles.playerWrapper}>
      <div className={styles.player}>
        <div className={styles.controls}>
          <div className={styles.prev}>
            <StepBackwardOutlined/>
          </div>
          <div className={styles.playPause} onClick={handlePausePlayClick}>
            {
              isPlay ? 
                <PauseOutlined />
              : <CaretRightOutlined />
            }
          </div>
          <div className={styles.next}>
            <StepForwardOutlined />
          </div>
        </div>

        <div className={styles.details}>
          <img src={imgUrl} alt="player-img"/>
          <div className={styles.info}>
            <div className={styles.content}>
              <div className={styles.songName}>{name}</div>
              <div className={styles.duration}>{formatDuration(currentTime)} / {formatDuration(duration)}</div>
            </div>
            <div className={styles.playProcess}>
              <Slider
                min={0}
                max={duration}
                onChange={handleTimeSliderChange}
                value={currentTime}
                step={1} style={{margin: '2px 6px'}}
              />
              </div>
              <audio 
                src={songUrl}
                ref={audioRef}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onEnded={() => setPlay(false)}
              />
          </div>
        </div>

        <div className={styles.features}>
          <HeartOutlined />
          <div className={styles.volumnController}>
            <VolumeUpIcon/>
            <Slider 
              vertical
              min={0}
              max={100}
              step={1}
              value={100}
            />
          </div>
          <MoreOutlined style={{transform: 'rotate(90deg)'}}/>
        </div>
      </div>

    </section>
  )
}

export default Player