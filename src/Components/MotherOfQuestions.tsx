import React from "react";

import DefaultTextQuestion from "./DefaultTextQuestion/DefaultTextQuestion";
import ListOfAnswers from "./ListOfAnswers/ListOfAnswers";
import TextFieldWitHhighlighting from "./TextQuerstionWithHighlighting/TextFieldWitHhighlighting";

const MotherOfQuestions = (props:{question:any, setQuestionIndex:any, questionIndex:number, answers:any, isLast:boolean, lastQuestionHandler:any, setAnswers:any}) => {

    return(
        <div>
            {props.question.type === 'codeQuestion' ? <TextFieldWitHhighlighting setAnswers={props.setAnswers} lastQuestionHandler={props.lastQuestionHandler} isLast={props.isLast} answers={props.answers} id={props.question.id} text={props.question.text} index={props.questionIndex} setIndex={props.setQuestionIndex} /> :
            props.question.options.length !== 0 ? <ListOfAnswers id={props.question.id} setAnswers={props.setAnswers} lastQuestionHandler={props.lastQuestionHandler} isLast={props.isLast} answers={props.answers} index={props.questionIndex} setIndex={props.setQuestionIndex} text={props.question.text} options={props.question.options}/> :
            <DefaultTextQuestion id={props.question.id} setAnswers={props.setAnswers} lastQuestionHandler={props.lastQuestionHandler} isLast={props.isLast} answers={props.answers} index={props.questionIndex} setIndex={props.setQuestionIndex} text={props.question.text} /> 
        }
        </div>
    )       
                    
}

export default MotherOfQuestions;