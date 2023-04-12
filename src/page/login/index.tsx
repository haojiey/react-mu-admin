import LoginForm from './components/LoginForm'

import './index.less'

import logo from '/@/assets/svg/logo.svg'
export default function Login() {
  return (
    <div className="login-container w-full h-full px-32 py-20 ">
      <div className="login-title  items-center text-gray-800 animate-wiggle hidden lg:block lg:flex">
        <img src={logo} alt="logo" className="logo-img" />
        <div>
          <p className="text-[32px] font-black pt-[10px]">Mu Admin</p>
          <p className="!text-[16px] font-black">木由管理系统</p>
        </div>
      </div>
      <div className="login-box flex">
        <div className="login-left flex-1"></div>
        <div className="login-form flex flex-1 items-center justify-center animate-wiggle">
          <div className="login-form-content">
            <div className="login-logo flex items-center justify-between">
              <img src={logo} alt="logo" className="logo-img" />
              <div>
                <p className="text-gray-800">Mu Admin</p>
              </div>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
