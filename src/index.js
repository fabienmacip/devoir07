import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

import {createTheme, ThemeProvider} from '@material-ui/core';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    type:"dark"
  }
})




ReactDOM.render(
  
  <React.StrictMode>

    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
  ,

  
  document.getElementById('root')
);


{/* <ThemeProvider theme={darkTheme}>
<CssBaseline />
<App />
</ThemeProvider>
 */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
