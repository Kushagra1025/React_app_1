import {useState} from "react"
import Alert from "./Alert.js"
export default function Navbar(props){
    let [alt,setalt]=useState(null)
   let [mode,setMode]=useState({theme:"dark", style:{backgroundColor:"white" , color:"black"}})
    function HandleClick(){
        setalt(<Alert message={`Success! ${mode.theme} has been enabled.`}/>)
        setTimeout(()=>{
            setalt(null)
        },1500)
    setMode((crrMode)=>{
        if(crrMode.theme==="light"){
            document.body.style.backgroundColor="white";
            document.getElementsByClassName("dispWord")[0].style.backgroundColor="blue";
            document.getElementsByClassName("dispWord")[0].style.color="yellow";
            document.getElementById("btn4").style.color="black";
        }
        else{
            document.body.style.backgroundColor="#123456";
            document.getElementById("btn4").style.color="white";
            document.getElementsByClassName("dispWord")[0].style.backgroundColor="yellow";
            document.getElementsByClassName("dispWord")[0].style.color="blue";
            }
        if(crrMode.theme==="light"){
            return {theme:"dark",style:{backgroundColor:"white",color:"#178293"}}
        }
        else{
            return {theme:"light",style:{backgroundColor:"#123456",color:"white"}}
        }
    }
    )
}

console.log(mode.style.color);
    return(
      <> 
      <div className="navbar1 tw-h-[10vh] tw-sticky tw-top-0 tw-w-full tw-gap-8 tw-border tw-border-purple-500 tw-flex  tw-rounded-lg" style={mode.style}>
        <div className="box tw-content-center tw-text-center tw-h-full tw-w-[10vw]  hover:tw-font-bold hover:tw-underline hover:tw-cursor-pointer">{props.sec1}</div>
        <div className="box tw-content-center tw-h-full tw-w-[10vw] hover:tw-font-bold hover:tw-underline hover:tw-cursor-pointer">{props.sec2}</div>
        <div className="box tw-content-center tw-text-center tw-h-full tw-w-[10vw] hover:tw-font-bold hover:tw-underline hover:tw-cursor-pointer">{props.sec3}</div>
  
      </div>
      <button className={`tw-text-[${mode.style.color}]`} onClick={HandleClick}> Enable {mode.theme} mode</button>
      <br />
      {alt}
      <br />
      </>
    )
  }
