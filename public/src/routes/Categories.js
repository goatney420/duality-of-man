import { Link } from "react-router-dom"; 
import "../App.css"

function Categories () {
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
                {/* <h2>men</h2> */}

                <table className="table">
                  <tr>  
                    <th>Icon</th>
                    <th>Name</th>
                  </tr>
                  <tr>
                    <td className="icon">🐚</td>
                    <td className="name">Puka Shell Necklace</td>
                  </tr>
                  <tr>
                    <td className="icon">✝️</td>
                    <td className="name">Cross Necklace</td>
                  </tr>
                  <tr>
                    <td className="icon">🔱</td>
                    <td className="name">Puka trying to be Cross</td>
                  </tr>
                  <tr>
                    <td className="icon">📿</td>
                    <td className="name">Cross trying to be Puka</td>
                  </tr>
                </table>

                <div className="link-container">
                    <Link className="link-tag" to="/StartQuiz">continue</Link>
                </div>
                </center>
            </div>
        </div>
        </>
    )
}

export default Categories;
