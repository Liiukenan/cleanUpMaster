import React from 'react'
import '../assets/css/Home.styl'
function Home() {
        return (
            <div className="home">
               <div className="banner">

               </div>
               <div className="icon-box">
                <ul className="flex-justify-center">
                    <li>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/logo1.png")} alt="" width="118" height="118"/>
                            <div className="fs-24 mt-24">
                            5G快连伴侣
                            </div>
                            <div className="fs-16 fc-hui6 mt-16">
                            让你的网速飞起来
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/logo2.png")} alt="" width="118" height="118"/>
                            <div className="fs-24 mt-24">
                            七星清理
                            </div>
                            <div className="fs-16 fc-hui6 mt-16">
                            清理一切不快
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/logo3.png")} alt="" width="118" height="118"/>
                            <div className="fs-24 mt-24">
                            秀我P图
                            </div>
                            <div className="fs-16 fc-hui6 mt-16">
                            轻松P图  仅需一步
                            </div>
                        </div>
                    </li>
                </ul>
               </div>
            </div>
        );
    }
export default Home;