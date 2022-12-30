import React from 'react'
import "./OptionBox.css"

function OptionBox(props) {
    function HandleClick(e) {
        const borderStyle = e.target.style.border;
        e.target.style.backgroundColor = "#2669F4";
        e.target.style.color = "white";
        e.target.style.border = "none";
        setTimeout(function(){
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "black";
            e.target.style.border = borderStyle;

            props.click(e);
        }, 200)
    }

    return (
        <div id={props.id} onClick={HandleClick} className='option-box'>
        {props.text}
        </div>
    )
}

export default OptionBox
