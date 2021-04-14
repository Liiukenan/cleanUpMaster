import React from 'react'
import '../assets/css/About.styl'
function About() {
        return (
            <div className="about flex-justify-center flex-column">
               <div className="banner flex-items-center flex-justify-center bold">
               科莱悦动
               </div>
               <div className="flex-column flex-items-center">
                    <div className="about-title fs-36 mt-36 bold">
                        <div className="tit">
                            关于我们
                        </div>
                    </div>
                    <div className="about-content fs-24 text-center">
                        <div>
                        北京科莱悦动科技有限公司
                        </div>
                        <div className="mt-30">
                        联系电话：13021236277（周一至周日，10:00-18:00）
                        </div>
                        <div className="mt-30">
                        联系地址：北京市朝阳区高碑店乡半壁店村惠河南街1008号B座5层东区5016
                        </div>
                    </div>
               </div>
            </div>
        );
    }
export default About;