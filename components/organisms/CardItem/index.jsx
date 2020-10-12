import React from 'react'
import Figure from '../../molecules/Figure'
import SongInfo from '../../molecules/SongInfo'
import styles from './CardItem.module.css'

const CardItem = ({ imgUrl, name, artist, imgH }) => {

  return (
    <div className={styles.cardItem}>
      <Figure imgUrl={imgUrl} h={imgH} w={150} showPlay={true} iconSize={40} />
      <SongInfo name={name} artist={artist} showPlay={true} />
    </div>
  )
}

export default CardItem