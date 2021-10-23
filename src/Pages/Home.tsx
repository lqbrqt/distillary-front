import React, {useState, useEffect} from "react";
//@ts-ignore
import Frame from 'react-frame-component';
import MotherOfQuestions from "../Components/MotherOfQuestions";
import LoginForm from "../Components/UI/Loginform";
import axios from 'axios';

import textdata from './testTests.json'
import { API_URI } from "../config";
import ListOfAnswers from "../Components/ListOfAnswers/ListOfAnswers";

const getData = async () => {
    const result = await axios.get(`${API_URI}/test/random`);
    return result;
}

const Home = () => {

    const [index, setIndex] = useState(-1);
    const [data, setData] = useState();
    const [answers, setAnswers] = useState([]);
    //@ts-ignore
    const [questionsCount, setQuestionsCount] = useState(0);

    useEffect(() =>{
        getData().then
        (res=> {
            //@ts-ignore
            setData(res.data)
            //@ts-ignore
            setQuestionsCount(res.data.questions.length)
        })
    }, [])

    const lastQuestionHandler = async (lastAnswer:any) => {
        //@ts-ignore
        const outAnswers = [...answers, lastAnswer]
        //@ts-ignore
        axios.post(`${API_URI}/test/${data.id}`, {
            user:{
                //@ts-ignore
                nickname:outAnswers[0].login,
                //@ts-ignore
                phoneNumber:outAnswers[0].number
            }, 
            answers:outAnswers.slice(1)
        })
    }

    const sendAnswers = () => {
        
    }

    return(
        <div>
            {index === -1 ? <LoginForm setAnswers={setAnswers} answers={answers} index={index} setIndex={setIndex}/> :
            //@ts-ignore
            <MotherOfQuestions setAnswers={setAnswers} answers={answers} lastQuestionHandler={lastQuestionHandler} questionIndex={index} question={data.questions[index]} setQuestionIndex={setIndex} isLast={index === questionsCount-1} />
            }
        </div>
    )
}

export default Home;