import { useState } from "react";


export default function LudoBoard(){
    let [moves,setMoves]=useState({red:0,green:0,yellow:0,blue:0});

    let updateblue=()=>{
      
        console.log(`moves.blue=${moves.blue}`);
       // setMoves({...moves,blue:moves.blue + 1});//by sending new object copy change is made  // use {}for js

       setMoves((prevMoves)=>{
         return {... prevMoves,blue:prevMoves.blue + 1};
       })
    }

    let updateRed=()=>{
        setMoves((prevMoves)=>{
            return {... prevMoves,red:prevMoves.red + 1};
         })
    }
    let updateGreen=()=>{
        setMoves((prevMoves)=>{
            return {... prevMoves,green:prevMoves.green + 1};
         })
    }
    let updateYellow=()=>{
        setMoves((prevMoves)=>{
            return {... prevMoves,yellow:prevMoves.yellow + 1};
         })
    }

    return(
        <div>
            <p>Game begin!</p>
        <div className="board">
            <p>blue moves = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
            <p>yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            <p>green moves = {moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            <p>red moves = {moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        </div>
        </div>
    )
}