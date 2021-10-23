import React, {useEffect, useState} from "react";

import DefaultTextQuestion from "./DefaultTextQuestion/DefaultTextQuestion";
import ListOfAnswers from "./ListOfAnswers/ListOfAnswers";
import TextFieldWitHhighlighting from "./TextQuerstionWithHighlighting/TextFieldWitHhighlighting";

const MotherOfQuestions = (props:{question:any, setQuestionIndex:any, questionIndex:number, answers:any, isLast:boolean, lastQuestionHandler:any, setAnswers:any}) => {
  const [changeQuestion, setChangeQuestion] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setChangeQuestion(false)
    let timeleft = props.question.timeToComplete;
    var downloadTimer = setInterval(() => {
      console.log('HUETA')
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        setChangeQuestion(true)
        props.setQuestionIndex(props.questionIndex + 1)
      }
      timeleft -= 1;
      setTimeLeft(timeleft)
    }, 1000);
  }, [changeQuestion])

    return(
        <div>
          {timeLeft <= 0 ? <p></p>: <p>Time to left: {timeLeft}</p>}
            {props.question.type === 'codeQuestion' ? <TextFieldWitHhighlighting setAnswers={props.setAnswers} lastQuestionHandler={props.lastQuestionHandler} isLast={props.isLast} answers={props.answers} id={props.question.id} text={props.question.text} index={props.questionIndex} setIndex={props.setQuestionIndex} /> :
            props.question.options.length !== 0 ? <ListOfAnswers id={props.question.id} setAnswers={props.setAnswers} lastQuestionHandler={props.lastQuestionHandler} isLast={props.isLast} answers={props.answers} index={props.questionIndex} setIndex={props.setQuestionIndex} text={props.question.text} options={props.question.options} time={props.question.timeToComplete}/> :
            <DefaultTextQuestion id={props.question.id} setAnswers={props.setAnswers} lastQuestionHandler={props.lastQuestionHandler} isLast={props.isLast} answers={props.answers} index={props.questionIndex} setIndex={props.setQuestionIndex} text={props.question.text} time={props.question.timeToQuestion} /> 
        }
        </div>
    )       
                    
}

export default MotherOfQuestions;