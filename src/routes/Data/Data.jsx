import { useEffect, useState } from "react";
import "./Data.css";
import { DataImage } from "./dataImage";
import { Link } from "react-router-dom";
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
        <li onClick={()=> setCurrentData('Gas')}>Gas</li>
        <li  onClick={()=> setCurrentData('Electricity')}>Electricity</li>
        <li onClick={()=> setCurrentData('Petroleum')}>Petroleum</li>
      </ul>
    </div>
    <div className="info">
      {currentData === "Gas"? <Gas /> : currentData === "Electricity"? <Electricity />: <Petroleum />}
    </div>








      
      </div>
    
  );
};
