import React from 'react'
import Figure from '../Figure'
import SongInfo from '../SongInfo'
import styles from './SongDetail.module.scss'

type Props = {
  name: string,
  artist: string,
  imgUrl: string,
  type: any,
  icon: string,
  songUrl: string,
  music?: boolean,
  duration?:string
}

const SongDetail:React.FC<Props> = ({name, artist, imgUrl, type, icon, songUrl, music, duration}: Props) => {

  return (
    <div className={styles.songDetail}>
      <Figure
        imgUrl={imgUrl} name={name} artist={artist}
        showPlay={true}
        w={40} h={40}
        icon={icon}
        type={type}
        songUrl={songUrl}
        iconSize={20}
        music={music}
        duration={duration}
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