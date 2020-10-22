import React, {useState, useRef, useEffect} from 'react'
import Figure from '../../molecules/Figure'
import ToolBtn from '../../molecules/ToolBtn'
import styles from './Current.module.scss'
import {PauseOutlined, CaretRightFilled} from '@ant-design/icons'
import { connect, useSelector } from 'react-redux'

const Current:React.FC = () => {
  const [isRun, setIsRun] = useState(false)
  const audioRef = useRef(null)
  const listening = useSelector(state => state.musicReducer.listening)

  const handlePlayMusic = () => {
    setIsRun(isRun => !isRun)
  }

  useEffect(() => {
    isRun ? audioRef.current.play() : audioRef.current.pause()
  }, [isRun, listening])

  const {name, artist, imgUrl, songUrl} = listening

  return (
    <section className={styles.current}>
      <div className={styles.stickyContainer}>
        <div onClick={handlePlayMusic}>
          <Figure
            imgUrl={imgUrl}
            type={isRun ? 'circle' : 'round'}
            icon={isRun ? 'pause' : 'play'}
            showPlay={true}
            w={280} h={280}
            iconSize={45} name={name} artist={artist}
          />
          <audio ref={audioRef} style={{display: 'none'}} src={songUrl}>
          </audio>
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.artist}>{artist}</div>
        
        <a className={styles.playBtn} onClick={handlePlayMusic}>
          {
            isRun ? 
            <><PauseOutlined style={{fontSize: 16}}/> Tạm dừng</> : 
            <><CaretRightFilled style={{fontSize: 16}}/> Tiếp tục phát</>
          }
        </a>
        
        <div className={styles.info}>
          <span>5 bài hát</span>
          <span className={styles.dot}>.</span>
          <span>18 phút</span>
        </div>

        <div className={styles.tools}>
          <ToolBtn
            name={name}
            artist={artist}
            imgUrl={imgUrl}
            size='medium'
          />
        </div>
      </div>
    </section>
  )
}

export default connect()(Current)