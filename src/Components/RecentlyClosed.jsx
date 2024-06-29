import React, {useState, useEffect} from 'react'

export function calculateTicker(dataOne){
    let seen = new Set();
    let uniqueHistory = dataOne.filter(obj => {
    if(seen.has(obj.position_id)){
        return false;
    }else {
        seen.add(obj.position_id);
        return true;
    }
});

let uniquTickers = {}

    uniqueHistory.forEach(trade => {
        const symbol = trade.symbol

    if (uniquTickers[symbol] == undefined){
        uniquTickers[symbol] = 0;}
    
        uniquTickers[symbol]++;
})
return  uniqueHistory;
}

export function RecentlyClosed(props){

    
    const filteredHistory = props.closedPos.filter(tradeType => tradeType.type !== 2)

    const tableHead = ['Date', 'Ticker', 'Direction','Profit']

    const dataFiltered = ['time', 'symbol','type', 'profit', ]

   const  uniqueHistory = calculateTicker(filteredHistory)


    return(
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
                    uniqueHistory.map((record, i) => (
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

