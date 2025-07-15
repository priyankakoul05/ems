import React from "react";
import Child from "./Child";

function Parent(){
    const [msg, setMsg] = React.useState("");

    function getData(data){
        setMsg(data);
    }

    return (
        <div>
            <h1>message:{msg}</h1>
            <Child getData={getData} />
        </div>
    )
}

export default Parent;