import React from "react";

function Third({customer}){
    console.log("Third render");
    return <>
      <h4>Third Component..{customer.id+"  "+customer.name+"  "+customer.age}</h4>
    </>
}

const MemoizedThird = React.memo(Third);
export default MemoizedThird;