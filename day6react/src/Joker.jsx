import { useEffect, useState } from "react";

export default function Joker() {
  let link= 'https://official-joke-api.appspot.com/random_joke';
  let [joke,setJoke]=useState({});

  let getJokes=async()=>{
    const response=await fetch(link);
    const data= await response.json();
    console.log(data);
    setJoke({setup:data.setup,punchline:data.punchline})
  }
  useEffect( function doJokes() {
    getJokes();
  },[])

  return (
    <div>
      <h3>Joker!</h3>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={getJokes}>Get Jokes</button>
    </div>
  );
}
