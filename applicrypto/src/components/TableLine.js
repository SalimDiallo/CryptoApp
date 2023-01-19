import React from 'react';
import PercentChange from './PercentChange';

const TableLine = ({coin, index}) => {
    return (
      <div className="top infos">

                    <div className='trier'>
                       <p><img src="./assets/star-empty.svg" alt={coin.name} /></p>
                        <p>{index+1}</p>
                         <p><img src={coin.image} alt={coin.name} /></p>
                         <p><img src="./assets/chart-icon.svg" alt={coin.name} /></p>
                        <p>{coin.name + " - " + coin.symbol.toUpperCase()}</p>
                         <p><img src="./assets/info-icon.svg" alt={coin.name} /></p>
                       
                   </div>

                             <p className='elPrix'>{coin.current_price} $ </p>
                             <p className='elMarketCap'>{coin.market_cap} </p>
                            <p className='elVolume'>{coin.total_volume}</p>
                            <PercentChange name="el1h" percent={coin.price_change_percentage_1h_in_currency} />
                            <PercentChange name="el1j" percent={coin.price_change_percentage_24h} />
                            <PercentChange name="el1s" percent={coin.price_change_percentage_7d_in_currency} />
                            <PercentChange  name="el1m" percent={coin.price_change_percentage_30d_in_currency} />
                            <PercentChange name="el1y" percent={coin.price_change_percentage_1y_in_currency} />
                            <PercentChange name="el6m" percent={coin.price_change_percentage_200d_in_currency} />
                            <PercentChange name="elATH" percent={coin.ath_change_percentage} />
                        
        </div>
    );
};

export default TableLine;