import {React,useState} from "react";
import "./Input.css";

const Input = (prop)=>{
    const [inputText, setInputText] = useState("");
    const formHandler = (event)=>{
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: inputText
        }
        setInputText("");
        prop.setGoal(newGoal);
    }
    
    const setInput = (event)=>{
        setInputText(event.target.value);
    }


    return (
    <form className="form" onSubmit={formHandler}>
        <input type="text" value={inputText} onChange={setInput}/>
        <button type="submit">Add</button>
    </form>
    )
}

export default Input;