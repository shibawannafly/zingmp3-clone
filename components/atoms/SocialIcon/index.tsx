import React from 'react'
import { YoutubeFilled } from "@ant-design/icons";
import styles from './SocialIcon.module.scss'

const SocialIcon:React.FC = () => (
  <div className={styles.icon}>
    <a href="/">
      <YoutubeFilled style={{fontSize: '20px'}}/>
    </a>
  </div> 
)

export default SocialIcon