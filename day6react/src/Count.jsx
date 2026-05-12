import { useEffect, useState } from "react";

export default function Count() {
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);

    let handleCountx=()=>{
        setCountx(countx=>countx+1);  
    }
    let handleCounty=()=>{
        setCounty(county=>county+1);  
    }
    useEffect(function disMsg(){
        console.log("this is a side effect");
    },[countx])//depandencies
    // []-->empty array means this only works in 1st time re-render 
  return (
    <div>
      <h3>countx={countx}</h3>
      <button onClick={handleCountx}>+1</button>
      <br /><br />
      <h3>county={county}</h3>
      <button onClick={handleCounty}>+1</button>
    </div>
  );
}
