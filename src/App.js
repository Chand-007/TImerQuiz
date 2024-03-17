import LeftPage from './LeftPage'
import RightPage from './RightPage';
import { Questions } from './Questions';
import { useState } from 'react';
import ScorePage from './ScorePage';
import './App.css'



var i=0

function App() {
  const[questions,setQuestions]=useState(Questions[i])
  const [score,setScore]=useState(0)
  const [answerIndex,setAnswerIndex]=useState(null)
  const [result,setResult]=useState(false)



  function handleNextQuestion(){


    if(i===Questions.length-1){

      if(answerIndex === questions.Answer){
        setScore(prev=>prev+1)
      }
      setResult(true)
      i=0
      setQuestions(Questions[i])
      return
    }





    if(answerIndex === questions.Answer){
      setScore(prev=>prev+1)
    }




    i++;
    setQuestions(Questions[i])
  }

  function handleReset(){
    setResult(false)
    setScore(0)
  }

  function handleTimeOut(){
    setResult(true)
    i=0
    setQuestions(Questions[i])
    return
  }


  if(result){
    return(
      <>
      <ScorePage score={score} handleReset={handleReset}/>
      </>
    )
  }



  return (


    <div className='mainContainer'>


      <div className='LeftContainer'>


        <LeftPage
         question={questions} 
        />


      </div>



      <div className='RightContainer'>



        <RightPage answer={questions}
        handleNextQuestion={handleNextQuestion}
        setAnswerIndex={setAnswerIndex}
        handleTimeOut={handleTimeOut}
        />


      </div>


      
    </div>
  );
}

export default App;
