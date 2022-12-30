import React, { useState, useEffect } from 'react'
import "./ThemeButton.css"

function ThemeButton() {
    const [theme, setTheme] = useState("light");
    
    function HandleClick() {
        if(theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    useEffect(() => {
        document.body.className = theme;
        document.querySelectorAll(".option-box").forEach(function(box) {
            box.classList.toggle(theme);
        });

        
    });

    return (
        <div className="theme-button-div">
            <div onClick={HandleClick} className={`theme-button ${theme}`}>
                {theme === "light" ? <img src='../../assets/moon.svg' alt='dark-mode'></img> : <img src='../../assets/sun.svg' alt='light-mode'></img>}
            </div>
        </div>
    )
}

export default ThemeButton;

