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
                            流星清理卫士
                            </div>
                            <div className="fs-16 fc-w6  mt-16 bold-200">
                            清理杀毒  又快又准
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/logo2.png")} alt="" width="118" height="118"/>
                            <div className="fs-24 mt-24">
                            星秀酷炫来电秀
                            </div>
                            <div className="fs-16 fc-w6  mt-16 bold-200">
                            打造你的专属来电秀
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/logo3.png")} alt="" width="118" height="118"/>
                            <div className="fs-24 mt-24">
                            简变P图
                            </div>
                            <div className="fs-16 fc-w6  mt-16 bold-200">
                            一步带你玩转P图
                            </div>
                        </div>
                    </li>
               
                </ul>
               </div>
            </div>
        );
    }
export default Home;