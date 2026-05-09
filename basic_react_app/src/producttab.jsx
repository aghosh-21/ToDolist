import Product from "./product.jsx"
import Msgbox from "./msgbox.jsx";
function Producttab(){
    let option=[<li>"hi-tech"</li> , <li>"durable"</li> , <li>"fast"</li>];
    // let option2={a:"hi-tech",b:"durable",c:"fast"};
    return(
        <>
        <Msgbox username="Ananya Ghosh" color="red"/>
        <Msgbox username="Apna collage" color="yellow"/>
        <Product title="phone" price={30000} features={option} />
        <Product title="laptop" price={50000}/>
        <Product title="pen" price={10}/>
        </>
    )
}
export default Producttab;