import React, { useState } from "react";
import '../../styles/index.css';


export const TrafficLight = () => {

    const [color, setColor] = useState('red');

    const handleClick = (selectColor) => {
        setColor(selectColor);
    }

    const handleButton = () => {

        if (color == 'red') setColor ('green');
        if (color == 'green') setColor ('yellow');
        else if (color == 'yellow') setColor ('red');
    }

    return(
        <div>
            <div className="trafficTop"></div>
            <div className="container">
                <div className={`red ${color === 'red' ? "active": ""}`} onClick={() => handleClick('red')}></div>
                <div className={`yellow ${color === 'yellow' ? "active": ""}`} onClick={() => handleClick('yellow')}></div>
                <div className={`green ${color === 'green' ? "active": ""}`} onClick={() => handleClick('green')}></div>
            </div>
            <button className="Togle Color" onClick={handleButton}>Toggle Color</button>
        </div>
        
    )

}

    