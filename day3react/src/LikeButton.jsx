import { useState } from "react"

export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    let [clicked,setClicked]=useState(0);
    let toggle=()=>{
        setIsLiked(!isLiked);
        setClicked(clicked+1);
    }
   let colred={color:"red"};
    return(
        <>
        <p onClick={toggle}>
            {/* {isLiked.toString()} //for displaying bool's value  */}
            {
                isLiked?(<i class="fa-solid fa-heart fa-2xl" style={colred}></i>):
                <i className="fa-regular fa-heart fa-2xl"></i>   
            }
        </p>
        <p>count={clicked}</p>
        </>
    )
}