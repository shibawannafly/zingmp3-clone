import React from 'react'
import styles from './TabList.module.scss'
import TabItem from '../../molecules/TabItem'
import TabItemImg from '../../molecules/TabItemImg'

type Props = {
  itemList: any,
  type: string,
  h: number
}

const TabList:React.FC<Props> = ({ itemList, type, h }: Props) => {
  return(
    <ul className={styles.itemList}>
      { 
        itemList.values.map(item => {
          if (type === 'thumb'){
            return (
              <li key={item.name}>
                <TabItemImg
                  rank={item.rank}
                  name={item.name}
                  artist={item.artist}
                  view={item.view}
                  img = {item.img}
                  imgUrl={item.imgUrl}
                  h={h}
                />
              </li>
            )
          } else {
            return (
              <li key={item.name}>
                <TabItem
                  rank={item.rank}
                  name={item.name}
                  artist={item.artist}
                  view={item.view}
                  img = {item.img}
                  // imgUrl={item.imgUrl}
                />
              </li>
            )
          }
        }
        
        )
      }
    </ul>
  )
}

export default TabList

