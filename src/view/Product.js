import React from 'react'
import '../assets/css/Product.styl'
function Product() {
  return (
    <div className="product">
      <div className="flex-justify-center box">
        <div className="flex-column content  flex-justify-center">
          <img
            src={require('../assets/images/logo1.png')}
            alt=""
            width="118"
            height="118"
          />
          <div className="fs-40 mt-24">雷神清理管家</div>
          <div className="fs-20 mt-24 bold-200">
          一款专业的手机清理优化工具，是清除内存垃圾的好助手，你身边最贴心的内存清理大师！
          </div>
        </div>
        <div>
          <img
            src={require('../assets/images/phone_1.png')}
            alt=""
            width="324"
            height="514"
          />
        </div>
      </div>
      <div className="flex-justify-center box">
        <div>
          <img
            src={require('../assets/images/phone_2.png')}
            alt=""
            width="324"
            height="514"
          />
        </div>
        <div className="flex-column content-right  flex-justify-center">
          <img
            src={require('../assets/images/logo2.png')}
            alt=""
            width="118"
            height="118"
          />
          <div className="fs-40 mt-24">天眼大师手机清理</div>
          <div className="fs-20 mt-24 bold-200 ">
          一键清理手机中的垃圾文件，释放超乎你想像的储存空间；内存，解决手机卡慢问题。是您手机垃圾清理必备神器！
          </div>
        </div>
      </div>
      <div className="flex-justify-center box">
        <div className="flex-column content  flex-justify-center">
          <img
            src={require('../assets/images/logo3.png')}
            alt=""
            width="118"
            height="118"
          />
          <div className="fs-40 mt-24">樱桃超炫来电秀</div>
          <div className="fs-20 mt-24 bold-200">
          全网火热来电视频主题动画显示，爱上来电的感觉 个性、潮流、酷炫的来电秀视频主题动画显示
          </div>
        </div>
        <div>
          <img
            src={require('../assets/images/phone_3.png')}
            alt=""
            width="324"
            height="514"
          />
        </div>
      </div>

    </div>
  )
}
export default Product
