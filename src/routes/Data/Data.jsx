import {useState } from "react";
import "./Data.css";
import { Gas } from "../../components/Gas/Gas";
import { Electricity } from "../../components/Electricity/Electricity";
import { Petroleum } from "../../components/Petroleum/Petroleum";

export const Data = () => {

  const [currentData, setCurrentData] = useState("Gas");
  return (

    <div className="data-section">
    <div className="data-nav">
      <h4 className="content">Energy Data</h4>
      <ul className="energy-list">
        <li className={currentData === "Gas" ? 'data-active': "" } onClick={()=> setCurrentData('Gas')}>Gas</li>
        <li className={currentData === "Electricity" ? 'data-active': ""} onClick={()=> setCurrentData('Electricity')}>Electricity</li>
        <li className={currentData === "Petroleum" ? 'data-active': "" }onClick={()=> setCurrentData('Petroleum')}>Petroleum</li>
      </ul>
    </div>
    <div className="info">
      {currentData === "Gas"? <Gas /> : currentData === "Electricity"? <Electricity />: <Petroleum />}
    </div>


      </div>
    
  );
};