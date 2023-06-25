import React from 'react';
import { RiArrowRightLine } from "react-icons/ri";

const Card = (props) => {
    return (
        <li>
            <div className="box btn-shadow card">
            <h4>{props.title}</h4>
               <p className='cate'>  {props.category}  </p>
             <span>{props.year}</span>
             <hr/>
             <p>{props.desc}</p>
           </div>
        </li>
    );
};

export default Card;