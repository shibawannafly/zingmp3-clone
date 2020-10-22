import React from 'react'
import styles from './ToTop.module.scss'
import {ArrowUpOutlined} from '@ant-design/icons'

const ToTop:React.FC = () => {

  const goToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div className={styles.toTop} onClick={goToTop}>
      <ArrowUpOutlined style={{fontSize: 30, color: '#fff'}}/>
    </div>
  )
}

export default ToTop