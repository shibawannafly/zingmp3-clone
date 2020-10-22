import React from 'react'
import styles from './Topic.module.css'

type Props = {
  background: string
}

const Topic:React.FC<Props> = ({background}: Props) => (
  <div className={styles.topic}>
    <img src={`/images/hot/${background}.jpg`} alt="hot-topic"/>
  </div>
)

export default Topic