import React from 'react'
import Figure from '../../molecules/Figure'
import styles from './HotArtist.module.scss'
import {useSelector} from 'react-redux'


const HotArtist:React.FC = () => {
  const data = useSelector(state => state.dataReducer.pageData.hotArtist)
  
  return (
    <div className={styles.hotArtist}>
      <ul className={styles.artistList}>
        {
          data.map(item => {
            if (data.indexOf(item) === 0){
              return (
                <li key={item.name} className={styles.bigOne}>
                  <Figure
                    imgUrl={item.imgUrl}
                    w={210}
                    h={210}
                    text={item.name}
                  />
                </li>  
              )
            } else {
              return (
                <li key={item.name}>
                  <Figure
                    imgUrl={item.imgUrl}
                    w={100}
                    h={100}
                    text={item.name}
                  />
                </li>  
              )
            }
          })
        }
      </ul>
    </div>
  )

}

export default HotArtist