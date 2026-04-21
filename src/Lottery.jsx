import { useState } from "react";

export default function Lottery() {
  let [lnum, setLnum] = useState(Math.floor(Math.random() * 900) + 100);
  let [h1, setH1] = useState( false );


  let doSum = (num) => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  
  let getNewTicket = () => {
    //setLnum(Math.floor(Math.random() * 1000));//lnum don't immideatly update 
    //it is ayns job takes time
    let newNum=Math.floor(Math.random() * 900) + 100;
    setLnum(newNum);
    const sum = doSum(newNum);
    if (sum == 15) {
      setH1(true);
    }
    else{
        setH1(false);
    }
  };

  return (
    <div className="card">
      {h1 ? <h1>Congratulation , you win</h1> : <h1>Lottery</h1>}
      <h4>Lottery={lnum}</h4>
      <button onClick={getNewTicket}>Get New Ticket</button>
    </div>
  );
}
