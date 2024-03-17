import './RightPage.css'
import { useState ,useEffect} from 'react'


var alphabets=['A','B','C','D','E','F','G']
var j=-1;
var interval

const RightPage=({answer,handleNextQuestion,setAnswerIndex,handleTimeOut})=>{
    const [colorIndex,setColorIndex]=useState(null)
    const [word,setWord]=useState(alphabets)
    const [time,setTime]=useState(20)

    useEffect(()=>{
         interval=setInterval(()=>{
            setTime(prev=>prev-1)
        },1000)
        return ()=>clearInterval(interval)
    },[])

    useEffect(()=>{
        if(time === 0){
            clearInterval(interval)
            handleTimeOut()
        }
    },[time])

    return(
        <div className='container'>
        <div className='top-container'>
                <h2>Select one answer</h2>
            
            <div class='clockComponent'>
                <p className='time'>{`00:00:${time}`}</p>
            </div>
            <button className='Next-button' onClick={
                ()=>{
                    handleNextQuestion()
                    setColorIndex(null)
                }
                }>
                Next question
            </button>
        </div>
            <div className='bottom-container'>
                <div className='AnswerContainer'>
                {answer.choices.map((ones,index)=>{
                    return(
                    <div id ={index} className='answer-H' onClick={
                        (id)=>{
                            setColorIndex(index)
                            setAnswerIndex(index)
                        }       
                    }>
                    <p className='answer'>{ones}</p>
                    <p className={colorIndex===index?'new-option':'option'}>{alphabets[index]}</p>
                    </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RightPage