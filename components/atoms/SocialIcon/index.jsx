import React from 'react'
import { YoutubeFilled } from "@ant-design/icons";
import styles from './SocialIcon.module.css'

const SocialIcon = () => (
  <div className={styles.icon}>
    <a href="/">
      <YoutubeFilled style={{fontSize: '20px'}}/>
    </a>
  </div> 
)

export default SocialIcon