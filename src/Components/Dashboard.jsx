
function DashBoard(props){
    return (
        <>
            <div className="display">
                    <p className='label'>Company Name</p>
                    <p className='result'>{props.account.company}</p>
                </div>
                <div className="display">
                    <p className='label'>Trader's Name</p>
                    <p className='result'>{props.account.name}</p>
                </div>
                <div className="display">
                    <p className='label'>Net P&L</p>
                    <p className='result'>{props.account.profit}</p>
                </div>
                <div className="display">
                    <p className='label'>Equity</p>
                    <p className='result'>{props.account.equity}</p>
                </div>
                <div className="display">
                    <p className='label'>Server</p>
                    <p className='result'>{props.account.server}</p>
                </div>
        </>
    )
}

export default DashBoard;