import React from 'react'
import TopFiveItem from '../../organisms/TopFiveItem'
import styles from './TopFiveList.module.scss'

interface listItem{
  rank: number,
  name: string,
  artist: string,
  imgUrl: string,
  view: string,
}

type Props = {
  list: listItem[],
  iconSize: number
}

const TopFiveList:React.FC<Props> = ({list, iconSize}: Props) => (
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