import React, { useState } from 'react';
import TableLine from './TableLine';

const Table = ({dataCoin}) => {

    const [number,setNumber] = useState(100);

   const tableHeader = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1s",
    "1m",
    "6m",
    "1y",
    "ATH",
  ];
    return (
       <div className="table">
            <div className="top">

                    <div className='trier'>
                        <p><label htmlFor='nbr'>Top :</label><input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} id="nbr"/></p>
                        <input type="range" name="" id="nbre" min='1' max='100' value={number} onChange={(e)=>setNumber(e.target.value)}/>
                   </div>

                            {tableHeader.map((element)=>(
                                <p key={element} className={"el"+element}>{element}</p>
                        ))}
                 
            </div> 

            {dataCoin
                .slice(0,number)
                .map((coin, index)=>(
                <TableLine coin={coin} index={index}/>
            ))}
        </div>
    );
};

export default Table;