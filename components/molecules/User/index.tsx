import React from 'react'
import styles from './User.module.css'
import {Dropdown, Button, Menu} from 'antd'

const User:React.FC = ({logoutUser}: any) => {

  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img src="https://avatars3.githubusercontent.com/u/33999836?s=460&u=8a21424d88493c93c59a8bfc9ed972e26835c0be&v=4" alt="avatar"/>
      </div>
      
      <Dropdown overlay={(
        <Menu>
          <Menu.Item> 
              <div onClick={logoutUser}>Logout</div>
          </Menu.Item>
        </Menu>
        )} placement="bottomCenter">
        <Button className={styles.userName}>Hei</Button>
      </Dropdown>
    </div>
  )
}


export default User