import React from 'react';
import Groupdata from '../../data/api4';
import { RiDoubleQuotesR} from "react-icons/ri";

const Slide= ({id, img,role,name,company,post,date,desc,valueIndex,index}) => {
    let position = "nextSlide"
    if(valueIndex === index){
        position = "activeSlide"
    }
    if(valueIndex === index - 1 
        ||
        (index === 0 && valueIndex === Groupdata.length - 1)
        ){
            position = "lastSlide"
        }

    return (
        <>
        <article className={`d-flex ${position}`} ket={id}>
            <div className="left box-shadow">
                <div className="img">
                    <img src={img} alt={img} />
                </div>
            </div>
            <div className="right">
                <div className="icon">
                    <RiDoubleQuotesR/>
                </div>
                <h4>{name}</h4>
                <p><span>{post}</span></p>
                <p>{role} : ({company}) - {date} 가입</p>
                <p className="desc">
                    {desc}
                </p>

            </div>
        </article>
        </>
    );
};

export default Slide;