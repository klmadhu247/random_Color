import React, { useState } from "react";
import './random.css'

function Random_Color (){
const [colorType,setColorType]= useState('')
const [color,setColor] = useState('')

const getHEXColor=()=>
{
 let letters =  '0123456789ABCDEF';
 let color = '#';

 for(let i=0;i<6;i++)
 {
    let randomIndex = Math.floor(Math.random()*16);
    color=color+letters[randomIndex];

 }
 return color;

}

const getRGBColor=()=>
{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    const rgbcolor = `rgb(${r},${g},${b})`;

    return rgbcolor;
}

const handleHEX=()=>
{
    setColorType('HEX Color')
    setColor(getHEXColor())

}
const handleRGB=()=>
{
    setColorType('RGB Color');
    setColor(getRGBColor())

}
const handleRandom=()=>
{

    if(colorType==='HEX Color')
    {
        setColor(getHEXColor())
    }
    else if (colorType==='RGB Color')
    {
        setColor(getRGBColor());
    }

}
    return(
        <div> 
            <div style={{textAlign:'center', backgroundColor:`${color}`,height:'100vh',margin:0}}>
         <button onClick={handleHEX}>Create HEX Color</button>
        <button onClick={handleRGB}>Create RGB Color</button>
        <button onClick={handleRandom}>Generate Random Color</button>
       <div style={{color:'white', fontSize:'80px',marginTop:'50px'}}>{colorType}</div> 
       <div style={{color:'white',fontSize:'140px',marginTop:'100px'}}>{color}</div>
        </div>

        

       </div>
    )
}
export default Random_Color;