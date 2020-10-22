import React, {useState, useEffect} from 'react'
import styles from './Carousel.module.css'

const imgUrl = [1, 2, 3, 4, 5]

const Carousel:React.FC = () => {
  const [current, setCurrent] = useState(1)
  
  const handleHover = (number) => {
    setCurrent(number)
  }

  useEffect(() => {
    let auto = setInterval(() => {
      current === 5 ? setCurrent(1) : setCurrent(current + 1)
    }, 3000)
    return () => clearInterval(auto)
  }, [current])

  return (
    <>
      <div className={styles.bigImage}>
      <img src={`/images/carousel/carousel${current}.jpg`} alt="anh"/>
      </div>
      <div className={styles.smallContainer}>
        <ul className={styles.imgList}>
          {
            imgUrl.map(img => (
              <li 
                className={styles.smallImage} 
                key={img}
                onMouseOver = {() => handleHover(img)}
              >
                <img src={`/images/carousel/carousel${img}.jpg`} alt="anh"/>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default Carousel