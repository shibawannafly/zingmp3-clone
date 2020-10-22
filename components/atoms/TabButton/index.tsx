import React from 'react'
import styles from './TabButton.module.scss'

type Props = {
  content: string,
  isActive: boolean
}

const TabButton:React.FC<Props> = ({ content, isActive }: Props) => (
  <div className={`${styles.tabButton} ${isActive && styles.active}`}>
    { content }
  </div>
)

export default TabButton