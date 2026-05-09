import { useState } from "react"

export default function Counter() {
    // let count=0;

    // function intCount(){
    //     count+=1;
    //     console.log(count);
    //}     //not working methods
    
    //let[stateVariable,setStateVariable]=useState(10);
    // deconstraction of array
    let [count,setCount]=useState(0);//making count a state variable //use for inicilization
    //console.log(arr);
    let incCount=()=>{
        //count=count+1; not work
        setCount(count+1);
        console.log(count);
        
    }
        
    return(
        <>
        <h1>States in React</h1>
        <h3>Count={count}</h3>
        <button onClick={incCount}>Increase Count</button>
        </>
    )
}