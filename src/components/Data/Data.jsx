import Navbar from "../Navbar/Navbar"
import './Data.css'


export const Data = () => {

    return (
        <div>
            <Navbar/>
             <div className="data-section">
            <ul className='data-opt'>
                <li className="data-li">Electricity</li>
                <li className="data-li">Petroleum</li>
                <li className="data-li">Gas</li>
            </ul>
        </div>
        </div>
       
    )
}