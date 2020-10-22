import React from 'react'
import styles from './CardList.module.scss'
import CardItem from '../../organisms/CardItem'

interface listItem{
  name: string,
  artist?: string,
  imgUrl: string
}

type Props = {
  title: string,
  list: listItem[],
  imgH: number
}


const CardList:React.FC<Props> = ({title, list, imgH}: Props) => {

  return (
    <section className={styles.cardContainer}>
      <h1 className={styles.title}> {title} </h1>
      <ul className={styles.cardList}>
        {
          list.map(item => (
            <CardItem
              key={item.imgUrl}
              imgUrl={item.imgUrl}
              name={item.name}
              artist={item.artist}
              imgH={imgH}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default CardList