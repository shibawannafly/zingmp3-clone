import React, {useState, useEffect} from 'react'
import styles from './Layout.module.css'
import CustomHeader from '../CustomHeader'
import Footer from '../Footer'
import ToTop from '../../atoms/ToTop'
import Loader from '../../molecules/Loader'

type Props = {
  children: any
}

const Layout:React.FC<Props> = (props: Props) => {
  const [showIcon, setShowIcon] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // setLoading(false)
    setTimeout(() => setLoading(false), 500)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  const handleScroll = () => {
    if(window.pageYOffset > 500){  
      setShowIcon(true)
    } else{
      setShowIcon(false)
    }
  }

  return (
    <>
      {
        loading && <Loader/>
      }
      <CustomHeader/>
      <main className={ styles.container }>
        {props.children}
      </main>
      {
        showIcon && (
          <div id='to-top'><ToTop/></div>
        )
      }
      <Footer/>
      
    </>
  )
}

export default Layout