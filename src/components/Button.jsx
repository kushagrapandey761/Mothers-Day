import React from "react";
import ReactDOM from 'react-dom';
function Button(){
    const [isClicked,setClicked] = React.useState(false);
    const [text,setText] = React.useState("Click here for a surprise");
    function handleClick(){
        setClicked(true);
        setText("Scroll Down");
    }
    return <div> <div className="Button">
        <button onClick={handleClick}>{text}</button>
    </div>
    {isClicked?<video src="Maa.mp4" width="1000" height="500" controls/>:null}
    </div>
}
export default Button;