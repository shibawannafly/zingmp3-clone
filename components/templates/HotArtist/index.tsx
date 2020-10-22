import React from 'react'
import Figure from '../../molecules/Figure'
import styles from './HotArtist.module.css'

const data = [
  {
    name: 'Bùi Anh Tuấn',
    imgUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/1/41f229e867c3787ed1ddee90a4bd2bbb_1506073807.jpg#home_hotartist_01'
  },
  {
    name: 'Hương Tràm',
    imgUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/b/f/b/9/bfb9522fe78758e81dfcb4b70d3f8f52.jpg#home_hotartist_02'
  },
  {
    name: 'Chi Dân',
    imgUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/6/8/7/e687a5d265bd19b32da2fc5084e4314c.jpg#home_hotartist_03'
  },
  {
    name: 'Justatee',
    imgUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/a/6/d/3a6de9f068f10fcee2c50cdf9772ebaa.jpg#home_hotartist_04'
  },
  {
    name: 'Lê Hiếu',
    imgUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/f/f/ffa425bab7750ca9a25eb1dd98ce4e25_1511411017.jpg#home_hotartist_05'
  },
  {
    name: 'Đan Nguyên',
    imgUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/d/7d108db512f6a6a929cd0d0ad3b593e8_1511431730.jpg#home_hotartist_06'
  },
  {
    name: 'Quang Lê',
    imgUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/9/6/96c7f8568cdc943997aace39708bf7b6_1376539870.jpg#home_hotartist_07'
  },
  {
    name: 'Soobin Hoàng Sơn',
    imgUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/b/4/c/8b4c040a3f0a64672e8dad7078aff3d1.jpg#home_hotartist_08'
  },
  {
    name: 'Lou Hoàng',
    imgUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/1/d/0/31d0f0e35548bd22f2f0e962eabf3c48.jpg#home_hotartist_09'
  }
]

const HotArtist:React.FC = () => (
  <div className={styles.hotArtist}>
    <ul className={styles.artistList}>
      {
        data.map(item => {
          if (data.indexOf(item) === 0){
            return (
              <li key={item.name} className={styles.bigOne}>
                <Figure
                  imgUrl={item.imgUrl}
                  w={210}
                  h={210}
                  text={item.name}
                />
              </li>  
            )
          } else {
            return (
              <li key={item.name}>
                <Figure
                  imgUrl={item.imgUrl}
                  w={100}
                  h={100}
                  text={item.name}
                />
              </li>  
            )
          }
        })
      }
    </ul>
  </div>
)

export default HotArtist