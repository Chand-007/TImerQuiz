import './ScorePage.css'


const ScorePage=({score,handleReset})=>{
    return(
        <div className='OuterContainer'>
            <div className='container-score'>
            <h2>Your Test is finished</h2>
            <p>Thanks for Attempting the exam</p>
            <h2>Score:<span className='score'>{score}</span></h2>
            <div className='resetButton'>
                <button className='reset' onClick={()=>{handleReset()}}>Reset</button>
            </div>
        </div>
    </div>
        
    )
}

export default ScorePage