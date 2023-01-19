import React, { useEffect, useState } from 'react';
import {Tooltip, Treemap} from 'recharts';
import colors from '../styles/_settings.scss';


const GlobalChart = ({data}) => {
    const [coinData, setCoinData] = useState([]);

     const colorsPicker = (number)=>{
            if (number >= 20) {
                return colors.color1;
            } else if (number >= 5) {
                return colors.green2;
            }else if (number >= 0) {
                return colors.green1;
            } else if(number >= -5){
                return colors.red1;
            } else if(number >= -20){
                return colors.red2;
            } else{
                return colors.black2;
            }
        }

        const excludeCoin = (coin) => {
                if ( coin === "usdt" || coin === "usdc" ||  coin === "busd" || coin === "dai" ||  coin === "ust" || coin === "mim")
                {
                return false;
                } else {
                return true;
                }
            };

    useEffect(()=>{
        let arrayTemp = [];

        if (data.length > 0) {
             for (let i = 0; i < 45; i++) {
                if (excludeCoin(data[i].symbol)) {
                    arrayTemp.push(
                    {
                       name : data[i].symbol.toUpperCase() +" "+ data[i].market_cap_change_percentage_24h.toFixed(1),
                        size: data[i].market_cap,
                        fill: colorsPicker(data[i].price_change_percentage_24h)
                    },
                );
                }
             }
            
        }
        setCoinData(arrayTemp);
    },[data]);

     const TreemapToolTip = ({active, payload}) =>{
            if (active && payload && payload.length) {
               return (
                 <div className="custom-tooltip"><p className="label">
                    {payload[0].payload.name}
                </p></div>
                );
                
            }
                return null;
            
        }
    return (
        <div className="global-chart">
             <Treemap
                width={730}
                height={181}
                data={coinData}
                dataKey='size'
                stroke='rgba(51,51,51)'
                fill='fill'
                aspectRatio='1' >
                    <Tooltip content={<TreemapToolTip/>} />
            </Treemap>
        </div>
    );
};

export default GlobalChart;