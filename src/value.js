import React from "react";

function Valuemax(){
    const westy={
        backgroundColor:"red",
        color:"white",
        borderRadius:"5px",
        weight:"50px",
        height:"30px",
        fontSize:"19px",
        border:"none",
        fontFaamily: "sans-serif",


    }


    const tunji=()=>{
        alert(  "Yes, you are in Abayomi fullstack developer page!!!");
       
    }
    return(
        <div style={{paddingLeft:"30px"}}>
            <h1>Are you sure you are in Abayomi page?</h1>
            <button onClick={tunji} style={westy}>confirm</button>
        </div>
    )
}
export default Valuemax;