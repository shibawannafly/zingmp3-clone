import React from 'react'
import Figure from '../../molecules/Figure'
import SongInfo from '../../molecules/SongInfo'
import styles from './CardItem.module.scss'

type Props = {
  imgUrl: string,
  name: string,
  artist: string,
  imgH: number
}

const CardItem: React.FC<Props> = ({ imgUrl, name, artist, imgH }: Props) => {

  return (
    <div className={styles.cardItem}>
      <Figure imgUrl={imgUrl} h={imgH} w={150} showPlay={true} iconSize={40} />
      <SongInfo name={name} artist={artist} />
    </div>
  )
}

export default CardItem