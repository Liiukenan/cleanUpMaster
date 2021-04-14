import React from 'react'
import '../assets/css/Product.styl'
function Product() {
        return (
            <div className="product">
               <div className="flex-justify-center box">
                    <div className="flex-column content  flex-justify-center">
                        <img src={require("../assets/images/logo1.png")} alt="" width="118" height="118"/>
                        <div className="fs-40 mt-24">
                        金刚清理保卫者
                        </div>
                        <div className="fs-20 mt-24 bold-200">
                        全面扫描应用和系统，深度查杀病毒木马、风险漏洞、恶意广告和恶意窃取应用，时刻保护您的手机安全
                        </div>
                    </div>
                    <div>
                        <img src={require("../assets/images/phone_1.png")} alt="" width="324" height="514"/>
                    </div>

               </div>
               <div className="flex-justify-center box">
               <div>
                        <img src={require("../assets/images/phone_2.png")} alt="" width="324" height="514"/>
                    </div>
                    <div className="flex-column content-right  flex-justify-center">
                        <img src={require("../assets/images/logo2.png")} alt="" width="118" height="118"/>
                        <div className="fs-40 mt-24">
                        天天快清理
                        </div>
                        <div className="fs-20 mt-24 bold-200 ">
                        一键清理手机中的垃圾文件，一键加速，清理手机内存，操作简单。并能扫描和清理常用的聊天软件和短视频软件
                        </div>
                    </div>
                    

               </div>
            </div>
        );
    }
export default Product;