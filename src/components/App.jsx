import React from "react";
import ReactDOM from 'react-dom';
import Description from './Description';
import Image from "./Image";
import Thanks from "./Thanks";
import Button from "./Button";
function App()
{
    return <div>
    <div className="heading">
    <h1>Happy Birthday</h1>
    </div>
    <Description/>
    <Image/>
    {/* <Thanks/> */}
    {/* <Button/> */}
    </div>;
}
export default App;