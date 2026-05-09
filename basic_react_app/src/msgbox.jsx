export default function Msgbox({username,color}){
    let style={color:color};
    return(
    <h3 style={style}>hello {username}</h3>
    )
}