import {useState} from "react"
import Alert from "./Alert.js";
export default function Textbox(){
    let [alt,setalt]=useState(null);
    let [text,setText]=useState("Please enter your text here");
    let [numWords,setnumWords]=useState(5);
    function insertText(){
        console.log(text)
        setText(document.getElementById("textbox").value)
        console.log(text)
        var countWords=0;
        var wordLength=1;
        let arr1=Array.from(document.getElementById("textbox").value)
        console.log(arr1)
        for (let index = 0; index < arr1.length ; index+=wordLength) {
            wordLength=1;
            if(arr1[index]!==" " && arr1[index]!=="\n"){
                countWords+=1;
                console.log(countWords)
                for (let index1 = index+1; index1 < arr1.length; index1++) {
                    if(arr1[index1]=== " "||arr1[index1]==="\n"){break}
                    wordLength+=1;
                    }
            }
        }
        setnumWords(countWords)
    }
    console.log(text)
    function toUpcase(){
        setalt(<Alert message="Success! text changed to Upper Case."/>)
        setTimeout(() => {
            setalt(null)
        }, 2500);
        console.log(text)
        setText(document.getElementById("textbox").value.toUpperCase())
        console.log(text)
    }
    return(
        <>
        <textarea id="textbox" className="textarea tw-h-[50vh] tw-w-[80vw] tw-mx-[10vh] tw-my-10 tw-border-2 tw-border-black" value={text} onChange={insertText}></textarea>
        <button className="btn1 tw-mx-5 tw-border-black tw-border-opacity-50 hover:tw-border-opacity-100 tw-border-2 tw-rounded-lg tw-bg-white hover:tw-bg-blue-600 hover:tw-text-green-400" onClick={toUpcase}>Change to Upper Case</button>
        {alt}
        <div className="dispWord tw-w-max">
            {numWords} words
        </div>
        </>
    )
}