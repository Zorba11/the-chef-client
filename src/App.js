import "./App.css";
import Home from "./pages/Home";
import { RecoilRoot, useRecoilState } from 'recoil';
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import {chefStatusState} from './atoms/ChefStatusState';

const theme = createTheme({
  palette: {
    primary: deepOrange
  },
});

function App() {
  // const [message, setMessage] = useState('You server message here.');
  return (
    
    <ThemeProvider theme={theme}>
    <div className="App">
    <RecoilRoot>
      <Home />
      </RecoilRoot>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
