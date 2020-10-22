import React from 'react'
import Topic from '../../molecules/Topic'
import styles from './HotTopic.module.scss'
import CustomLink from '../../atoms/CustomLink'
import {ArrowRightOutlined} from '@ant-design/icons'

const topics = [
  'trending', 'coffee', 'music-for-love', 'korea', 'today'
]

const HotTopic:React.FC = () => (
  <div className={styles.hotTopic}>
    <h2 className={styles.title}>CHỦ ĐỀ HOT</h2>
    <div className={styles.topicList}>
      {
        topics.map(topic => (
          <Topic background={topic} key={topic} />
        ))
      }
    </div>
    <CustomLink
      size={14}
      color='#707070'
      url='/'
    >
      Xem thêm chủ đề khác <ArrowRightOutlined />
    </CustomLink>
  </div>
)

export default HotTopic