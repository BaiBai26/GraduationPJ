import * as React from 'react'
import {
  Icon, Input, Button, message
} from 'antd';
import { userLogin } from '@utils/api'
import Context from '@component/context'
import './index.scss'
class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      remember: false
    }
  }
  handleLogin() {
    const { username, password } = this.state
    // if(!username) {
    //   message.error('请输入用户名')
    //   return
    // }
    // if(!password) {
    //   message.error('请输入密码')
    //   return
    // }
    // userLogin(username, password).then(res => {
    //   console.log(res)
    //   message.success(res.status_msg)
    //   this.context.modify({token: res.data.token})
      this.props.history.push('/fudan')
    // }).catch(rej => {
    //   message.error(rej.status_msg)
    // })
  }
  handleNameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  handlePswdChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <div className="login-wrapper">
        <div className="logo"></div>
        <div className="title">可定制的虚拟机初始化系统</div>
        <div className="form-wrapper">
          <div className="user-name">
            <Input 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              onChange={this.handleNameChange.bind(this)} 
              placeholder="Username" 
              value={this.state.username}
            />
          </div>
          <div className="password">
          <Input 
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password" 
            placeholder="Password" 
            onChange={this.handlePswdChange.bind(this)} 
            value={this.state.password}
          />
          </div>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleLogin.bind(this)}>Log in</Button>
        </div>
      </div>
    )
  }
}
LoginPage.contextType = Context
export default LoginPage