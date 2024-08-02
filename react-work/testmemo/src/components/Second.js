import React from "react";

function Second({message}){
    console.log("Second-render");
    return <>
      <h2>Second Component....{message}</h2>
    </>
}

const MemoizedSecond = React.memo(Second);
export default MemoizedSecond;