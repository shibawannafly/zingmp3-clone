import React from 'react'
import styles from './ForYou.module.scss'
import { PlayCircleOutlined } from '@ant-design/icons'

const ForYou:React.FC = () => (
  <article className={styles.discover}>
    <div className={styles.content}>
      <div className={styles.playList}>
        <img src="/images/foryou.jpg" alt="Playlist"/>
        <div className={styles.playIcon}>
          <PlayCircleOutlined style = {{ color: '#fff', fontSize: '50px' }}/>
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.title}>
          Dành Riêng Cho Bạn
        </div>
        <details className={styles.des}>
          Nghe những ca khúc yêu thích và khám phá âm nhạc dành riêng cho bạn.
        </details>
      </div>
    </div>
  </article>
)

export default ForYou