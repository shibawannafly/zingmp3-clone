import React from 'react'
import Figure from '../../molecules/Figure'
import SongInfo from '../../molecules/SongInfo'
import styles from './Relate.module.css'

const Relate = ({title, list}) => {

  return (
    <section className={styles.relate}>
      <div className={styles.title}>
        <h2>{title}</h2>
        {'>'}
      </div>
      <div className={styles.list}>
        <ul>
          {
            list.map(item => (
              <li>
                <Figure
                  imgUrl={item.imgUrl}
                  showPlay={true}
                  type={list.indexOf(item) === 0 ? 'circle' : 'round'}
                  w={160} h={160}
                  iconSize={40}
                />
                <SongInfo
                  name={item.name}
                  artist={item.artist}
                  st={{width: '100%'}}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Relate