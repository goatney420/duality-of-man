import { Link } from "react-router-dom"; 
import "../App.css"

function Home () {
    return(
        <>
        <div className="window-container">
            <div className="windows-header">
                <span className="windows-header-text"> The Duality of Man</span>
                <button class="header-button">
                    <img src="https://win98icons.alexmeub.com/images/close-icon.png" alt="x"/>
                </button>
            </div>

            <div className="content">
            <center>
                <h2>all men can be placed into one of four categories</h2>
                <div className="link-container">
                    <Link className="link-tag" to="/Categories">continue</Link>
                </div>
                </center>
            </div>
        </div>
        </>
    )
}

export default Home;
