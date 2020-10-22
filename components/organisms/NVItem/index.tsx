import React from 'react'
import Figure from '../../molecules/Figure'
import SongInfo from '../../molecules/SongInfo'
import OptionBtn from '../../molecules/OptionBtn'
import styles from './NVItem.module.css'

type Props = {
  imgUrl: string,
  name: string,
  artist: string,
  showOption?: boolean
}

const NVItem:React.FC<Props> = ({imgUrl, name, artist, showOption}: Props) => {

  return (
    <div className={styles.nvItem}>
      <div className={styles.info}>
        <Figure
          imgUrl={imgUrl}
          w={50} h={50}
          showPlay={true}
          iconSize={20}
        />
        <SongInfo
          name={name}
          artist={artist}
          st={{ marginLeft: '10px', maxWidth: '180px' }}
        />
      </div>
      {
        showOption && (
          <div className={styles.tools}>
            <OptionBtn/>
          </div>
        )
      }
    </div>
  )
}

export default NVItem