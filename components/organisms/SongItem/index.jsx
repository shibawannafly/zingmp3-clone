import React from 'react'
import styles from './SongItem.module.css'
import SongDetail from '../../molecules/SongDetail'
import ToolBtn from '../../molecules/ToolBtn'

const SongItem = ({name, artist, imgUrl, type, status, icon, time, stt}) => {

  return (
    <div className={styles.songItem}>
      <div className={styles.left}>
        <div className={styles.stt}>{stt}</div>
        <SongDetail
          name={name}
          artist={artist}
          imgUrl={imgUrl}
          type={type}
          status={status}
          icon={icon}
        />
      </div>
      <div className={styles.time}> {time} </div>
      <ToolBtn 
        name={name}
        artist={artist}
        imgUrl={imgUrl}
        size='small'
      />
    </div>
  )
}

export default SongItem
