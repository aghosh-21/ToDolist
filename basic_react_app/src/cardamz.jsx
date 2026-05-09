import "./cardamz.css";

export default function Cardamz({title,des,price}){

    return(
        <div className="card">
            <h3>{title}</h3>
            <p >{des}</p>
            <div className="span">

            <span style={{textDecoration:'line-through'}}>{price}</span>
            <span>{price*0.95}</span>
            </div>
        </div>
        
    )
}