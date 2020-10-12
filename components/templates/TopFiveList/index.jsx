import React from 'react'
import TopFiveItem from '../../organisms/TopFiveItem'
import styles from './TopFiveList.module.css'

const TopFiveList = ({list, iconSize}) => (
  <section className={styles.topFiveList}>
    {
      list.map(item => (
        <TopFiveItem
          rank={item.rank}
          imgUrl={item.imgUrl} 
          name={item.name} 
          artist={item.artist} 
          view={item.view}
          key={item.name}
          iconSize={iconSize}
        />
      ))
    }
  </section>
)

export default TopFiveList