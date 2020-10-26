import React from 'react'
import styles from './LoginForm.module.scss'
import {useForm, Controller} from 'react-hook-form'
import { Input as AntdInput, Button, Alert } from "antd";

type Props = {
  closeForm: () => void,
  handleLogin: () => void
}

const LoginForm:React.FC<Props> = ({closeForm, handleLogin}: Props) => {

  const { control, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    closeForm()
    handleLogin()
  }

  return (
    <section className={styles.formContainer}>
      <div className={styles.background} onClick={closeForm}></div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <Controller
          as={AntdInput}
          name="username"
          control={control}
          defaultValue=""
          className={styles.inputField}
          rules={{required: true, minLength: 2}}
        />
        {
          (errors.username && errors.username.type === 'required') &&  <Alert message="This field is required" type="error" banner /> }
            
        {  (errors.username && errors.username.type === 'minLength') && <Alert message="This field much be 2 char or more" type="error" banner /> }
        
        <label htmlFor="password">Password</label>
        <Controller
          as={AntdInput.Password}
          name="password"
          control={control}
          defaultValue=""
          className={styles.inputField}
          rules={{required: true, minLength: 6}}
        />
        {
          (errors.password && errors.password.type === 'required') && ( <Alert message="This field is required" type="error" banner /> )}
            
          {(errors.password && errors.password.type === 'minLength') && ( <Alert message="This field much be 6 char or more" type="error" banner /> )
        }
        <div className={styles.btnGroup}>
          <Button type="primary" htmlType="submit" size='large'>Login</Button>
          <Button type="primary" danger onClick={closeForm} size='large'>Cancel</Button>
        </div>
      </form>
    </section>
  )
}

export default LoginForm