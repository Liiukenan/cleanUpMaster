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
          <div className="fs-40 mt-24">流星清理卫士</div>
          <div className="fs-20 mt-24 bold-200">
            便捷的手机清理软件，有效地解决手机使用过程中卡顿、发热、内存不足的问题
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
          <div className="fs-40 mt-24">星秀酷炫来电秀</div>
          <div className="fs-20 mt-24 bold-200 ">
          让你的来电秀不限于单调的系统默认，热门潮流主题，轻松设置个性有趣的来电视频
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
          <div className="fs-40 mt-24">简变P图</div>
          <div className="fs-20 mt-24 bold-200">
          一键换背景，艺术滤镜，瞬间P掉路人！ 海量模板，让你一键生成证件照、节日贺卡、头像、表情包、海报、Vlog封面
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
