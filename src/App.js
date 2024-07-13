
import {useState} from "react"
// import PropTypes from 'prop-types';
import Navbar from "./components/Navbar.js"
import Textbox from "./components/Textbox.js"
// function Textbox(props){
//   let [text,updateText]=useState('Please enter your text here')
//   updateText(currentText=>currentText.toUpperCase())
//   return(
//     <>
//     <textarea className="Textbox border border-black my-[2rem] mx-[10vw] w-[80vw] h-[50vh] px-1">{text}</textarea>
//     <br/>
//     <button onClick={updateText} id="BtnUC">Convert text to UpperCase</button>
//     </>
//   )
// }
function Button(props){
  console.log("Rendered!")
  let [counter,updateCounter]=useState(0);
  function clickFunc(){
    updateCounter(prevValue=>prevValue+1)
  }
  console.log(counter);
  return (
    <>
    <button id="btn4" className={`btn2 tw-border hover:tw-font-bold hover:tw-cursor-pointer hover:tw-underline tw-mx-10 tw-text-[${props.btntextcolor}]`} onClick={clickFunc}>Clicked {counter} times</button>
    </>
  );
}
// function Textbox(){
//   function HandleClick(){
//     let text=document.createTextNode(prompt("Please enter your text here"));
//     let holder=document.createElement("span");
//     holder.appendChild(text);
//     document.getElementsByClassName("textbox")[0].appendChild(holder);
//   }
//   return (
// <>
// <div className="textbox h-[50vh] w-[75vw] border cursor-text border-black my-10 mx-[12.5vw]" onClick={HandleClick}></div>
// </>
//   )
// }

function App() {
  // let textclr="black";
  // let [bgc,setbgc]=useState("white")
  // addEventListener("mouseover",setbgc((crrbgc)=>{
  //   if(crrbgc==="white"){textclr="black";return "white"}
  //   else{textclr="white"; return "dark"}
  // })) 
  return (
    <>
   <Navbar sec1="Home" sec2="About Us" sec3="Services"/>
   <Textbox/>
   <Button btntextcolor="green"/>
   </>
  );
}

export default App;
