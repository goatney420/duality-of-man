import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./routes/Home";
import Categories from './routes/Categories';
import StartQuiz from './routes/StartQuiz';
import Quiz from './routes/Quiz';
import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import { Tooltip } from 'react95';
// import { Hourglass } from 'react95';
// import { Button } from 'react95';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;
  
function App() {
  return (
    <div className="App">

		<div className="home-icons-container">
      <div className='home-icons'>
        <img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png" alt="folder"/>
        <span>Secrets</span>
      </div>

      <div className='home-icons'>
        <img src="https://win98icons.alexmeub.com/icons/png/computer-4.png" alt="computer"/>
        <span>My Computer</span>
      </div>

      <div className='home-icons'>
        <img src="https://win98icons.alexmeub.com/icons/png/cd_drive-0.png" alt="cd"/>
        <span>Adulting</span>
      </div>
			
		</div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
    </ThemeProvider>

		<Routes>
        <Route path="/" element={<Home/>}/>
		<Route path="/Categories" element={<Categories/>}/>
        <Route path="/StartQuiz" element={<StartQuiz/>}/>
        <Route path="/Quiz" element={<Quiz/>}/>
      </Routes>	

    </div>
  );
}

export default App;

