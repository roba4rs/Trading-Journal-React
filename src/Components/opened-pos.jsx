import React, {useState, useEffect} from 'react';
function OpenPosition(props){

    
    const tableHead = ['Date', 'Ticker', 'Direction','Profit']
    const dataFiltered = ['time', 'symbol', 'type', 'profit']


    return (
        <div>
            <table className='content-table'>
                <thead>
                    <tr>
                       {tableHead.map((tHead, j) => (
                        <td key={j}>{tHead}</td>
                       ))}
                    </tr>
                </thead>
                <tbody>
                {
                    props.openPos.map((record, i) => (
                        <tr key={i}>
                            {dataFiltered.map((value, j) => <td key={j}>{record[value]}</td>)}
                        </tr>
                    ))
                  }
                   
                </tbody>
           </table>
        </div>
    )
   
}
export default OpenPosition;

