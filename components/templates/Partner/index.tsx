import React from 'react'
import styles from './Partner.module.css'

const partners = [
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/universal.jpeg',
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/sony.png',
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/thuy-nga.png',
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/vcpmc.jpg',
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/riav.jpg',
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/kim-loi.png',
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/phuong-nam.jpg',
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/rang-dong.jpg',
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/vafaco.jpg',
  'https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/ben-thanh.jpg'
]

const Partner:React.FC = () => (
  <section className={styles.partner}>
    <h3 className={styles.title}>ĐỐI TÁC</h3>
    <ul className={styles.partnerList}>
      {
        partners.map(url => (
          <li key={url} className={styles.partnerItem}>
            <img src={url} alt="partner"/>
          </li>
        ))
      }
    </ul>
  </section>
)

export default Partner