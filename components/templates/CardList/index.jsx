import React from 'react'
import styles from './CardList.module.css'
import CardItem from '../../organisms/CardItem'

const CardList = ({title, list, imgH}) => {

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