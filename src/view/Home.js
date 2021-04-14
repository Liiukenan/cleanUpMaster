import React from 'react'
import '../assets/css/Home.styl'
function Home() {
        return (
            <div className="home">
               <div className="banner">

               </div>
               <div className="icon-box">
               <div className="about-title fs-36 mt-36 bold">
                        <div className="tit">
                            产品
                        </div>
                    </div>
                <ul className="flex-justify-center">
                    <li>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/logo1.png")} alt="" width="118" height="118"/>
                            <div className="fs-24 mt-24">
                            金刚清理保卫者
                            </div>
                            <div className="fs-16 fc-w6  mt-16">
                            专业清理加速  消除一切不快
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/logo2.png")} alt="" width="118" height="118"/>
                            <div className="fs-24 mt-24">
                            天天快清理
                            </div>
                            <div className="fs-16 fc-w6  mt-16">
                            让手机疾速如飞
                            </div>
                        </div>
                    </li>
               
                </ul>
               </div>
            </div>
        );
    }
export default Home;