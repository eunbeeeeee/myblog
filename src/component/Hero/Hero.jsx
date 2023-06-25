import React from 'react';
import "./hero.css";
import HeroImg from "../../img/me.png";
import { Typewriter } from 'react-simple-typewriter';
import { DiAndroid, DiJava, DiReact } from "react-icons/di";
import { RiFacebookCircleLine, RiTwitterLine, RiKakaoTalkLine } from "react-icons/ri";
const Hero = () => {
    return (
        <>
          <section className="hero" id="hero">
              <div className="container f-flex top">
                 <div className="left top">
                    <h3>welcome to my world</h3>
                    <h1>
                        Hi, I'm <span>EunBee</span>
                    </h1>
                    <h2>
                       a
                       <span>
                           <Typewriter words={[" Newbie Developer.", " Professional Coder."]} 
                                       loop cursor cursorStyle="|"
                                       delaySpeed={1000} typeSpeed={70} deleteSpeed={50}
                           />
                       </span>
                    </h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>

                   <div className="hero-btn d-flex">
                       <div className="col">
                           <h4>View My SNS</h4>
                           <div className="button">
                               <button className="btn-shadow">
                                  <RiFacebookCircleLine className="icon" />
                               </button>
                               <button className="btn-shadow">
                                  <RiTwitterLine className="icon" />
                               </button>
                               <button className="btn-shadow">
                                  <RiKakaoTalkLine  className="icon" />
                               </button>
                           </div>
                       </div>
                       <div className="col">
                            <h4>BEST MY SKILL</h4>
                                <div className="button">
                                    <button className="btn-shadow">
                                        <DiAndroid  className="icon" />
                                    </button>
                                    <button className="btn-shadow">
                                        <DiJava  className="icon" />
                                    </button>
                                    <button className="btn-shadow">
                                        <DiReact  className="icon" />
                                    </button>
                                </div>
                       </div>
                   </div>

                 </div>
                 <div className="right">
                    <div className="right-img">
                        <img src={HeroImg} alt="me" />
                    </div>
                 </div>  
              </div>            
          </section>
        </>
    );
};

export default Hero;