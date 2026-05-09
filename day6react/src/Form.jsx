import { use } from "react";
import { useState } from "react";

export default function Form() {
  // let [fullName, setFullName] = useState("");
  // let [username,setUsername]=useState("ag");

  let [fromData, setFromData] = useState({
    fullName: "",
    userName: "",
    password:"",
  });

  // let handleNameChange = (event) => {
  //   console.log(event.target.value);
  //   setFullName(event.target.value);
  // };
  // let handleuserName = (event) => {
  //   console.log(event.target.value);
  //   setUsername(event.target.value);
  // };

  let handleFromChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    setFromData((currData) => {
      return {
        ...currData,
        [fieldName]: fieldValue, //[]-->Evaluates the variable fieldName first.
      };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
    setFromData({
      userName: "",
      fullName: "",
      password: "",
    });
  };

  return (
    <form action="">
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="write some thing"
        value={fromData.fullName}
        onChange={handleFromChange}
        name="fullName"
      />
      <br />
      <label htmlFor="userName">Username</label>
      <input
        type="text"
        placeholder="write some thing"
        value={fromData.userName}
        onChange={handleFromChange}
        name="userName"
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        placeholder="write some thing"
        value={fromData.password}
        onChange={handleFromChange}
        name="password"
      />
      <br />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}
