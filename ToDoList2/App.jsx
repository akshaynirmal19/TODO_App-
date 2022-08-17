import React, { useState } from "react";
import ListCom from "./ListCom";





function App(){

    const [num, setNum]=useState(0);


 function numInc(){

        setNum(num+1)

 }

 function numDec(){

    if(num>0){

        setNum(num-1)

    }else{

        alert("not below zero number")

        setNum(0)
    }

    

}

  return(
   <>

    <div className="main_div">
        <div className="center_div">

        <h1>{num}</h1>
        <div className="btn_div">

        <button onClick={numInc}>PLUS</button>
        <button onClick={numDec}>MINUS</button>


        </div>

        </div>
    </div>
   </>

    );
}

export default App;








