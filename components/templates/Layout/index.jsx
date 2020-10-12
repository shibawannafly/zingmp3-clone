import React, {useState, useEffect} from 'react'
import styles from './Layout.module.css'
import CustomHeader from '../CustomHeader'
import Footer from '../Footer'
import ToTop from '../../atoms/ToTop'


const Layout = (props) => {
  const [showIcon, setShowIcon] = useState(false)
  
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