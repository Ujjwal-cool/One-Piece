import './App.css';
import Navbar from './Components/Navbar';
import {useState} from 'react';

function App() {
  const[mode,setMode] = useState("lightMode");
  const[modeBt,setModeBt] = useState("Dark Mode");
  const[theme,setTheme] = useState("def");
  

  const ItachiTheme=()=>
  {
    setTheme("Itachi");
  }
  
  const ZoroTheme=()=>
  {
    setTheme("Zoro");
  }

 

  const luffyTheme=()=>
  {
    setTheme("Luffy");
  }

  const kakashiTheme=()=>
  {
    setTheme("Kakashi");
  }
  const toggleMode=()=>{
    if(mode==="darkMode"){
      setMode("lightMode");
      document.body.style.backgroundColor="white";
      setModeBt("Light Mode");
    }
    else{
      setMode("darkMode");
      document.body.style.backgroundColor="gray";
      setModeBt("Dark Mode");
    }
  }
  return (
    <div className={theme}>
      <Navbar fashion={mode} ItachiTh={ItachiTheme} LuffyTh={luffyTheme} ZoroTh={ZoroTheme}  KakashiTh={kakashiTheme} togg={toggleMode} theme={modeBt} />

    </div>

  );
}

export default App;
