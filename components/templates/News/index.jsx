import React from 'react'
import styles from './News.module.css'
import CustomLink from '../../atoms/CustomLink'
import Figure from '../../molecules/Figure'

const News = () => {

  const news = [
    {
      title: 'Gil Lê tiến bộ rõ rệt trong sản phẩm mới',
      imgUrl: 'https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_17/Gil_2.jpg'
    },
    {
      title: 'Liz Kim Cương tìm được ‘chìa khóa tạo hit’',
      imgUrl: 'https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_16/LKC_THUMB.jpg'
    },
    {
      title: 'Dòng nhạc mang âm hưởng dân gian phủ sóng Vpop',
      imgUrl: 'https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_16/thumb.jpg'
    },
    {
      title: '‘Bông hoa đẹp nhất’ của Quân A.P đạt top 1 #zingchart sau 5 tiếng',
      imgUrl: 'https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_09/QUAN_AP_THUMB.jpg'
    },
    {
      title: 'Rap đang chiếm lĩnh thị trường nhạc Việt?',
      imgUrl: 'https://znews-photo.zadn.vn/w480/Uploaded/izhqv/2020_09_05/vie_channel_photos_rap_viet_7_15949586078351950074304_527_0_1464_1500_crop_15949587089441936445285.jpg'
    },
  ]

  return (
    <section className={styles.news}>
      <h3>
        <CustomLink color='#800080'>TIN TỨC ÂM NHẠC {'>'}</CustomLink>
      </h3>
      <div className={styles.thumbnail}>
        <img src="https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_17/BP_THUMB.jpg" alt="news img"/>
        <div className={styles.detail}>
          <strong>BlackPink tặng quà cho fan Việt trên Zing MP3</strong>
        </div>
      </div>

      <ul className={styles.newsList}>
        {
          news.map(item => (
            <li key={item.title}>
              <Figure
                imgUrl={item.imgUrl}
                w={100} h={66}
                showPlay={false}
              />
              <div className={styles.des}>
                <CustomLink color='#000'>
                  {item.title}  
                </CustomLink>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default News