import React from 'react'
import CustomLink from '../../atoms/CustomLink'
import {DownloadOutlined, PlusOutlined, ShareAltOutlined} from '@ant-design/icons'
import styles from './OptionBtn.module.css'

const OptionBtn:React.FC = () => (
  <div className={styles.optionBtn }>
    <CustomLink color='#888' size={20}>
      <DownloadOutlined />
    </CustomLink>
    <CustomLink color='#888' size={20}>
      <PlusOutlined />
    </CustomLink>
    <CustomLink color='#888' size={20}>
      <ShareAltOutlined />
    </CustomLink>
  </div> 
)

export default OptionBtn