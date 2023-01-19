import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GlobalChart from './components/GlobalChart';
import Header from './components/Header';
import Table from './components/Table';

const App = () => {
  const[dataCoin, setDataCoin] = useState([]);

  useEffect(()=>{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`
        ).then((res)=>{
          setDataCoin(res.data);
      })
  },[]);
  return (
   <div className="home">
      <header className="header">
              <Header />
            <GlobalChart data={dataCoin} />
      </header>

      <div className='table-container'>
          <Table dataCoin={dataCoin}/>
      </div>
    </div>
  );
};

export default App;