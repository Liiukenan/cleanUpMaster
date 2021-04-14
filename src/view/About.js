import React from 'react'
import '../assets/css/About.styl'
function About() {
        return (
            <div className="about flex-justify-center flex-column">
               <div className="banner flex-items-center flex-justify-center bold fc-black">
                悦玺清风
               </div>
               <div className="flex-column flex-items-center">
                    <div className="about-title fs-36 mt-36 bold">
                        <div className="tit">
                            关于我们
                        </div>
                    </div>
                    <div className="about-content fs-24 text-center fc-hui8">
                        <div>
                        北京悦玺清风文化传媒有限公司
                        </div>
                        <div className="mt-30">
                        联系电话：010-57625289（周一至周日，10:00-18:00）
                        </div>
                        <div className="mt-30">
                        联系地址：北京市通州区台湖北里29号楼6层619
                        </div>
                    </div>
               </div>
            </div>
        );
    }
export default About;