import React from "react";
import loadSvg from '../../assets/loading2.svg'


export const Loader = () => {


    const loadingStyle = {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '7.3em'

    }
    return(
      
        <div style={loadingStyle}>
            <><img src={loadSvg} alt="load SVG" style={loadingStyle} /></>
        </div>
       
    )
}

