import React from 'react'
import styles from './TabButton.module.css'

const TabButton = ({ content, isActive }) => (
  <div className={`${styles.tabButton} ${isActive && styles.active}`}>
    { content }
  </div>
)

export default TabButton