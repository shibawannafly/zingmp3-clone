import React from 'react'
import Figure from '../../molecules/Figure'
import SongInfo from '../../molecules/SongInfo'
import styles from './SongDetail.module.css'

const SongDetail = ({name, artist, imgUrl, type, status, icon}) => {

  return (
    <div className={styles.songDetail}>
      <Figure
        imgUrl={imgUrl}
        showPlay={true}
        w={40} h={40}
        icon={icon}
        type={type}
      />
      <SongInfo
        name={name}
        artist={artist}
        st={{marginLeft: 10}}
      />
    </div>
  )
}

export default SongDetail