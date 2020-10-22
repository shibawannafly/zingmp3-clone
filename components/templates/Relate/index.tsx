import React, {useState, useRef} from 'react'
import Figure from '../../molecules/Figure'
import SongInfo from '../../molecules/SongInfo'
import styles from './Relate.module.scss'
import Slider from 'react-slick'
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons'

interface listItem{
  name: string,
  artist: string,
  imgUrl: string
}

type Props = {
  title: string,
  list: listItem[]
}

const Relate:React.FC<Props> = ({title, list}: Props) => {
  const ref = useRef(null)

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    dot: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <section className={styles.relate}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <div className={styles.slideBtn}>
          <div onClick={previous}><CaretLeftOutlined style={{fontSize: 30}}/></div>
          <div onClick={next}><CaretRightOutlined  style={{fontSize: 30}}/></div>
        </div>
      </div>
      <div className={styles.list}>
        <Slider className={styles.carousel1} ref={ref} {...settings}>
          {
            typeof(list) !== 'undefined' && list.map(item => (
              <div key={item.name} className={styles.carouselItem}>
                <Figure
                  imgUrl={item.imgUrl}
                  showPlay={true}
                  type={list.indexOf(item) === 0 ? 'circle' : 'round'}
                  w={160} h={160}
                  iconSize={40}
                />
                <SongInfo
                  name={item.name}
                  artist={item.artist}
                  st={{width: '100%'}}
                />
              </div>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}

export default Relate