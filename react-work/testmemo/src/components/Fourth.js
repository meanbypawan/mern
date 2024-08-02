import React from "react";
function Fourth({sayHello}){
    console.log("Fourth render");
    return <>
      <h4>Fourth component...</h4>
      <button onClick={()=>sayHello()}>Say Hello</button>
    </>
}

const MemoizedFouth = React.memo(Fourth);
export default MemoizedFouth;