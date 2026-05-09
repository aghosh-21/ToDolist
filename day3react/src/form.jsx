function onformsubmit(event){
    event.preventDefault();
    console.log("form submited")
}

export default function Form(){
    return(
        <form >
            <input type="text"placeholder="enter something" />
            
            <button onClick={onformsubmit} >Submit</button>
        </form>
    )
}