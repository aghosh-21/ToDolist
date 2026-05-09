import "./product.css"

function Product({title , price,features}){
    let style={backgroundColor: price>30000?"yellow":""}
    return(
        <div className="product" style={style}>
            <h3>{title}</h3>
            <h5>Price :{price}</h5>
            <p>{features}</p>
            {price>30000 && <p>"discount=5%"</p>}
        </div>
    )
}
export default Product;