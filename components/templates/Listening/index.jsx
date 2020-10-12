import React from 'react'
import SongItem from '../../organisms/SongItem'
import styles from './Listening.module.css'
import {data} from './data'

const Listening = () => (
  <div className={styles.listening}>
    <ul>
      {
        data.map(item => (
          <li key={item.name} className={data.indexOf(item) === 0 ? styles.active : ''}>
            <SongItem
              name={item.name}
              artist={item.artist}
              imgUrl={item.imgUrl}
              type='round'
              icon='running'
              time={item.time}
              stt={item.stt}
            />
          </li>
        ))
      }
    </ul>
  </div>
)

export default Listening