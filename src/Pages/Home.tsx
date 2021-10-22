import React, {useState} from "react";
//@ts-ignore
import Frame from 'react-frame-component';
import MotherOfQuestions from "../Components/MotherOfQuestions";

import textdata from './testTests.json'

const Home = () => {

    const [index, setIndex] = useState(0);
    const answers: never[] = [];
    const questionsCount = textdata.questions.length

    return(
        <div>
            <MotherOfQuestions answers={answers} questionIndex={index} question={textdata.questions[index]} setQuestionIndex={setIndex} isLast={index === questionsCount-1} />
        </div>
    )
}

export default Home;