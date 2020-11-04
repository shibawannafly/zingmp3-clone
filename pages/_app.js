import React from 'react'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../styles/custom.css'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import store from '../redux/store'


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
