import React from 'react'
import styles from './Topic.module.css'

const Topic = ({background}) => (
  <div className={styles.topic}>
    <img src={`/images/hot/${background}.jpg`} alt="hot topic"/>
  </div>
)

export default Topic