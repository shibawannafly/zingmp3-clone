import React from 'react'
import { Spin } from 'antd'
import styles from './Loader.module.css'

const Loader:React.FC = () => (
  <div className={styles.loader}>
    <Spin tip="Loading..."/>
  </div>
)

export default Loader