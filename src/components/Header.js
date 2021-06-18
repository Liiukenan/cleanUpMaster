// @ts-nocheck
import React, { useState } from 'react'
import '../assets/css/Header.styl'
import { Link, withRouter } from 'react-router-dom'

function Header(props) {
  let linkArr = [
    {
      path: '/',
      label: '首页'
    },
    {
      path: '/product',
      label: '产品中心'
    },
    {
      path: '/about',
      label: '关于我们'
    }
  ]
  let n = 0;
  linkArr.forEach((item, index) => {
    if (props.history.location.pathname === item.path) {
      n = index
    }
  })
  let [currentIndex, setCurrentIndex] = useState(n)
  function changeCurrentIndex(index) {
    setCurrentIndex(index)
  }
  return (
    <div className="header flex-between">
      <div className="flex-items-center">
        <img
          src={require('../assets/images/logo-1.png')}
          alt=""
          width="48"
        />
        <span className="ml-10 fs-30 bold fc-hui8">北京微蜜友网络科技有限公司</span>
      </div>
      <div className="flex-items-center nav">
        {linkArr.map((item, index) => {
          let line = ''
          if (index < 2) {
            line = <i className="ml-20 mr-20"></i>
          }
          console.log(props.location.pathname, item.path)
          return (
            <li
              className="flex-items-center fc-white"
              onClick={(e) => changeCurrentIndex(index, e)}
              key={index}
            >
              <Link
                to={item.path}
                className={`${index === currentIndex ? 'active' : ''}`}
                // className="active"
              >
                {item.label}
              </Link>
              {line}
            </li>
          )
        })}
      </div>
    </div>
  )
}
export default withRouter(Header)
