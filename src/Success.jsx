import React from 'react';
import "./success.css";
import {AiOutlineCheckCircle} from "react-icons/ai"

const Success = () => {
    return (
        <div className="bg">
            <div className="card">
                <span><AiOutlineCheckCircle style= {{color: "#fff"}}
                 className="card__success"/></span>
                <h1 className="card__msg">Payment Complete</h1>
                <h2 className="card__submsg">Thank you!</h2>
                <div className="card__tags">
                    <span className="card__tag">completed</span>
                </div>
            </div>
        </div>
    );
}

export default Success
