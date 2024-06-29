import { useState, useEffect } from 'react';
import './main.css';
import OpenPosition from './opened-pos';
import { TradeHistory } from './trade-history';
import BarChart from './BarChart';
import LineChart from './lineChart';
import PieChart from './Pie';
import DashBoard from './Dashboard';
import { RecentlyClosed } from './RecentlyClosed';

function MainBody() {

    const [account, setAccount] = useState([])
    const [pnlOnly, setPnlOnly] = useState([])
    const [data, setData] = useState([]);
    const [history, setHistory] = useState([])
    const [displayComponent, setDisplayComponent] = useState('open')

    const showOpenPos = () => {
        
        setDisplayComponent('open')
    }
    const showClosedPos = () => {

        setDisplayComponent('closed')
   
    }
const symbols = [];
    
{/* Fetching data for trade history including profit and loss metrics*/}
    useEffect(() => {
        fetch('http://localhost:5000/proft-loss-included')
            .then(res => res.json())
            .then(history => {
                setHistory(history)
            })
    }, []);
    
{/* Fetching data for accout history */}
    useEffect(() => {
        fetch('http://localhost:5000/account-info')
            .then(res => res.json())
            .then(account => {
                setAccount(account)
            })
    }, []);
{/* Fetching data for only profits in a sigle array for the specified perios*/}
    useEffect(() => {
        fetch('http://localhost:5000/only-profits-filtered')
            .then(res => res.json())
            .then(profitLoss => {
                setPnlOnly(profitLoss)
            })
    }, []);


 {/* Fetching data for currently running open positions */}
    
    useEffect(() => {
        fetch('http://localhost:5000/opened-positions')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, []);

    const mainData = history.filter(obj2 => 
        !data.some(record => record.identifier === obj2.position_id)
    );
    
    history.filter(sym => {
        symbols.push(sym.symbol)
     })

    const occurrences = {};

    for (let i = 0; i < symbols.length; i++) {
         let item = symbols[i];
        occurrences[item] = (occurrences[item] || 0) + 1;
    }
   
    console.log(occurrences)

    const reversedData = [];

    {/*Reverse the array of open positions so that it can be ranked from recent trades*/}
    for(let i=(data.length-1); i>=0; i--){
        reversedData.push(data[i])
    }

    return (
        <>
            <div className="main-content">
                <DashBoard account ={account.company}  name = 'Compnay Name'/>
                <DashBoard account ={account.name}  name = 'Traders Name'/>
                <DashBoard account ={account.profit}  name = 'Net P&L'/>
                <DashBoard account ={account.equity}  name = 'Equity'/>
                <DashBoard account ={account.server}  name = 'Compnay Name'/>
            </div>

            <div className="charts">
                <div className="chart-dis"><BarChart profit={pnlOnly}/></div>
                <div className="chart-dis"><LineChart profit={pnlOnly} /></div>
                <div className="chart-dis"><PieChart uniquElement = {occurrences}/></div>
            </div>
            <div  className='button-div'>
                <div>
                    <button className='buttons-toggle' onClick={showOpenPos}>
                        Open Positions</button>
                    <button className='buttons-toggle' onClick={showClosedPos}>Recently Closed</button>
                </div>
                <div className='trade-history'>
                    <p className='trade-history'>Trade History</p>
                </div>
            </div>
            <div className="lower-section">
                <div className="section">
                    
                    {displayComponent == 'open' && <OpenPosition openPos = {reversedData}/>}
                    {displayComponent == 'closed' && <RecentlyClosed closedPos = {mainData}/>}
                    
                </div>
            <div className="calender"><TradeHistory closedPos = {mainData.reverse()}/></div>
            </div>

        </>
       

      
    )
}

export default MainBody;