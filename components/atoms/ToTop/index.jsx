import styles from './ToTop.module.css'
import {ArrowUpOutlined} from '@ant-design/icons'

const ToTop = () => {

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