
function DashBoard(props){
    return (
        <>
                <div className="display">
                    <p className='label'>{props.name}</p>
                    <p className='result'>{props.account}</p>
                </div>
        </>
    )
}

export default DashBoard;