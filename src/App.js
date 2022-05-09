import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Icon from "./assets/icon-dice.svg";
import Divider from "./assets/pattern-divider-desktop.svg";
import { useState, useEffect } from "react";

function App() {
  let [advice, setAdvice] = useState("");
  let [disabled,setDisabled]=useState(false)
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      setAdvice(res.data.slip);
      console.log(res);
    });
  }, []);
  console.log(advice)
  function getAdvice() {
    setDisabled(true)
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      setAdvice(res.data.slip);
      console.log(res);
    });
    setDisabled(false)
  }
  return (
    <div className="App">
      
      <div id="advice">
        <h5 className="put jsk">ADVICE #{advice!==''?advice.id:''}</h5>
        <div className="adv">"{advice !== "" ? advice.advice : "loading"}"</div>
        <span className="dividr">
          <img src={Divider} alt="" />
        </span>
      </div>
      <button className="btn" disabled={disabled}>
        <img src={Icon} alt="" width={30} height={30} onClick={()=>getAdvice()} />
      </button>
      
      <footer>
        <span className="adv">
          Challenge by <a href="#" className="put">FrontEnd Mentor</a>. Coded by{" "}
          <a href="http://twitter.com/afobaje_" className="put">afobaje</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
