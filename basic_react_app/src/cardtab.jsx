import Cardamz from "./cardamz";

export default function Cardtab(){
    let des1=[<li>8000 DPI</li>,<li>5 Programmable Buttons</li>];
    let des2=[<li>intutive touch Surface</li>,<li>Designed for iPad Pro</li>];
    let des3=[<li>Designed for iPad Pro</li>,<li>intutive touch Surface</li>];
    let des4=[<li>Wireless Mouse 2.4GHz</li>,<li>Optical Orientation</li>];
    return(
        <div className="cardtab" style={{display:'flex'}}>

            <Cardamz title="Logitech MX Master" des={des1} price={12495} />
            <Cardamz title="Apple Pencil(2nd Gen)" des={des2} price={11900} />
            <Cardamz title="Zebronics" des={des3} price={1599} />
            <Cardamz title="petronics" des={des4} price={599} />
        </div>


    //   do again
        
       
    )
}