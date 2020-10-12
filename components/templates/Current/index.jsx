import React, {useState} from 'react'
import Figure from '../../molecules/Figure'
import ToolBtn from '../../molecules/ToolBtn'
import styles from './Current.module.css'
import {PauseOutlined, CaretRightFilled} from '@ant-design/icons'

const Current = () => {
  const [isRun, setIsRun] = useState(false)

  return (
    <section className={styles.current}>
      <Figure
        imgUrl='https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/covers/2/d/2d12ca61d3a8f686f4505bc4f9112027_1438958829.jpg'
        type='circle'
        icon='pause'
        showPlay={true}
        w={280} h={280}
        iconSize={45}
      />
      <div className={styles.name}>Mine</div>
      <div className={styles.artist}>Phoebe Ryan</div>
      
      <a className={styles.playBtn} onClick={() => setIsRun(isRun => !isRun)}>
        {
          isRun ? 
          <><PauseOutlined style={{fontSize: 16}}/> Tạm dừng</> : 
          <><CaretRightFilled style={{fontSize: 16}}/> Tiếp tục phát</>
        }
      </a>
      
      <div className={styles.info}>
        <span>5 bài hát</span>
        <span className={styles.dot}>.</span>
        <span>18 phút</span>
      </div>

      <div className={styles.tools}>
        <ToolBtn
          name='Mine'
          artist='Phoebe Ryan'
          imgUrl='https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/covers/2/d/2d12ca61d3a8f686f4505bc4f9112027_1438958829.jpg'
          size='medium'
        />
      </div>
    </section>
  )
}

export default Current