import React, { useEffect, useState } from 'react';
import colors from '../styles/_settings.scss';

const PercentChange = ({percent , name}) => {

    const [color , setColor] = useState();

   useEffect(()=>{
            if(percent){
                if (percent >= 0) {
                    setColor(colors.green2);
                }else {
                    setColor(colors.red2);
                }
            }else{
                    setColor(colors.white1); 
            }
     },[percent]);
    
    return (
          <p className={"percent-change-container" + (name)? name : ""} style={{color}}>
            {percent ? percent.toFixed(1) + "%" : "-"}
        </p>
    );
};

export default PercentChange;