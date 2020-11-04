import React, {useState, useEffect} from 'react'
import styles from './Layout.module.scss'
import MenuHeader from '../../organisms/Header'
import Nav from '../../organisms/Nav'
import Footer from '../Footer'
import ToTop from '../../atoms/ToTop'
import Loader from '../../molecules/Loader'

type Props = {
  children: any,
  marginB?: number,
  searchData?: any
}

const Layout:React.FC<Props> = (props: Props) => {
  const [showIcon, setShowIcon] = useState(false)
  const [loading, setLoading] = useState(true)
  const [searchList, setSearchList] = useState([])
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  useEffect(() => {
    let data = props.searchData
    if(data && data.albumHot) {
      let list = []
      data.albumHot.list.forEach(item => {
        list.push({name: item.name, imgUrl: item.imgUrl})
      })

      data.videoHot.list.forEach(item => {
        list.push({name: item.name, imgUrl: item.imgUrl})
      })

      data.todayList.list.forEach(item => {
        list.push({name: item.name, imgUrl: item.imgUrl})
      })

      data.topFiveData.forEach(item => {
        list.push({name: item.name, imgUrl: item.imgUrl})
      })

      let newList:any = new Set([...list])
      setSearchList([...newList])
    }
  }, [props.searchData])

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
      <MenuHeader searchList={searchList}/>
      <Nav/>
      <main className={ styles.container }>
        {props.children}
      </main>
      {
        showIcon && (
          <div id='to-top'><ToTop/></div>
        )
      }
      <Footer st={{marginBottom: props.marginB}}/>
      
    </>
  )
}

export default Layout