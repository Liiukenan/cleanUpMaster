import React from 'react'
import '../assets/css/Product.styl'
function Product() {
        return (
            <div className="product">
               <div className="flex-justify-center box">
                    <div className="flex-column content  flex-justify-center">
                        <img src={require("../assets/images/logo2.png")} alt="" width="118" height="118"/>
                        <div className="fs-40 mt-24">
                        七星清理
                        </div>
                        <div className="fs-20 mt-24 bold-200 fc-hui8">
                        一款完全免费的手机加速与空间清理软件，强力加速使手机运行更流畅，一键清理快速解决空间不足问题。
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
                        <img src={require("../assets/images/logo3.png")} alt="" width="118" height="118"/>
                        <div className="fs-40 mt-24">
                        秀我P图
                        </div>
                        <div className="fs-20 mt-24 bold-200 fc-hui8">
                        一键智能抠图，轻松更换背景！无须任何P图技巧，简单几步，手机也能抠出完美效果
                        </div>
                    </div>
                    
                    
               </div>
               <div className="flex-justify-center box">
                    <div className="flex-column content  flex-justify-center">
                        <img src={require("../assets/images/logo1.png")} alt="" width="118" height="118"/>
                        <div className="fs-40 mt-24">
                        5G快连伴侣
                        </div>
                        <div className="fs-20 mt-24 bold-200 fc-hui8">
                        5G快连伴侣是一款专注的增强Wi-Fi网络信号、网络，管理Wi-Fi密码的实用工具。
                        </div>
                    </div>
                    <div>
                        <img src={require("../assets/images/phone_3.png")} alt="" width="324" height="514"/>
                    </div>

               </div>
            </div>
        );
    }
export default Product;