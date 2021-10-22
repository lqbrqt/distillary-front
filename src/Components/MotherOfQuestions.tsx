import React from "react";

import DefaultTextQuestion from "./DefaultTextQuestion/DefaultTextQuestion";
import ListOfAnswers from "./ListOfAnswers/ListOfAnswers";
import TextFieldWitHhighlighting from "./TextQuerstionWithHighlighting/TextFieldWitHhighlighting";

const MotherOfQuestions = (props:{question:any, setQuestionIndex:any, questionIndex:number, answers:any, isLast:boolean}) => {

    return(
        <div>
            {props.question.type === 'codeQuestion' ? <TextFieldWitHhighlighting isLast={props.isLast} answers={props.answers} text={props.question.text} index={props.questionIndex} setIndex={props.setQuestionIndex} /> :
            props.question.options ? <ListOfAnswers isLast={props.isLast} answers={props.answers} index={props.questionIndex} setIndex={props.setQuestionIndex} text={props.question.text} options={props.question.options}/> :
            <DefaultTextQuestion isLast={props.isLast} answers={props.answers} index={props.questionIndex} setIndex={props.setQuestionIndex} text={props.question.text} /> 
        }
        </div>
    )       
                    
}

export default MotherOfQuestions;