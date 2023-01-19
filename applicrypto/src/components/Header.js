import React, { useEffect, useState } from 'react';
import axios from "axios";
import PercentChange from './PercentChange';
import TableFilters from './TableFilters';

const Header = () => {
const [globalIcons , setGlobalIcons] = useState([]);


useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/global").then((res)=>{
            setGlobalIcons(res.data.data);
        })
},[])

    return (
      <div >

           <div className="global-coin">
          <div className="left-global">
             <div className="name-site">
                <img src="./assets/logo.png" alt="arrow icon" />
                <h1>Watch Tower</h1>
             </div>
                <h2>Crypto-monnaies : {globalIcons.active_cryptocurrencies && globalIcons.active_cryptocurrencies.toLocaleString()} </h2>
                <h2>Markets : {globalIcons.markets && globalIcons.markets}</h2>
            </div>

            <div className="right-global">
                <h2>Glogal Market Cap : {<PercentChange percent={globalIcons.market_cap_change_percentage_24h_usd} />}</h2>
                {/* <h2>BTC dominance : {globalIcons.market_cap_percentage.btc && globalIcons.market_cap_percentage.btc.toFixed(1) +" %"}</h2>
                <h2>Eth dominance : {globalIcons.market_cap_percentage.eth && globalIcons.market_cap_percentage.eth.toFixed(1) + " %"}</h2> */}
            </div>
                <TableFilters />
        </div>

        </div>
    );
};

export default Header;