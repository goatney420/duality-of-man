import { Link } from "react-router-dom"; 
import "../App.css"

function StartQuiz () {
    return(
        <>
        <div className="window-container">
        <div className="windows-header">
                <span className="windows-header-text">The Duality of Man</span>
                <button class="header-button">
                    <img src="https://win98icons.alexmeub.com/images/close-icon.png" alt="x"/>
                </button>
            </div>
            <div className="content">
                <center>
                <h2>which are you</h2>
                <div className="link-container">
                    <Link className="link-tag" to="/Quiz">take quiz</Link>
                </div>
                </center>
                
            </div>
        </div>
        </>
    )
}

export default StartQuiz;
