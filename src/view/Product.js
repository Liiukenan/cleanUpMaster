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
          <div className="fs-40 mt-24">随心连WiFi</div>
          <div className="fs-20 mt-24 bold-200">
          帮助用户便捷的管理WiFi，解决WiFi使用中卡顿、速度低的问题，提升用户在手机使用中的体验
          </div>
        </div>
        <div>
          <img
            // @ts-ignore
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
            // @ts-ignore
            src={require('../assets/images/phone_2.png')}
            alt=""
            width="324"
            height="514"
          />
        </div>
        <div className="flex-column content-right  flex-justify-center">
          <img
            // @ts-ignore
            src={require('../assets/images/logo2.png')}
            alt=""
            width="118"
            height="118"
          />
          <div className="fs-40 mt-24">手机微清理大师SD</div>
          <div className="fs-20 mt-24 bold-200 ">
          便捷的手机清理软件，有效地解决手机使用过程中卡顿、发热、内存不足的问题
          </div>
        </div>
      </div>
      <div className="flex-justify-center box">
        <div className="flex-column content  flex-justify-center">
          <img
            // @ts-ignore
            src={require('../assets/images/logo3.png')}
            alt=""
            width="118"
            height="118"
          />
          <div className="fs-40 mt-24">SD卡清理专家</div>
          <div className="fs-20 mt-24 bold-200">
          一款专业的手机清理优化工具，是清除内存垃圾的好助手，你身边最贴心的内存清理大师！
          </div>
        </div>
        <div>
          <img
            // @ts-ignore
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
