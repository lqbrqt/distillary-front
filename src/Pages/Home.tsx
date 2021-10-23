import React, {useState, useEffect} from "react";
//@ts-ignore
import Frame from 'react-frame-component';
import MotherOfQuestions from "../Components/MotherOfQuestions";
import LoginForm from "../Components/UI/Loginform";
import axios from 'axios';

import { API_URI } from "../config";
import ListOfAnswers from "../Components/ListOfAnswers/ListOfAnswers";
import ResultCard from "../Components/ResultCard";

const getData = async () => {
    const result = await axios.get(`${API_URI}/test/random`);
    return result;
}

const Home = () => {

    const [index, setIndex] = useState(-1);
    const [data, setData] = useState();
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState();
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
        const response = await axios.post(`${API_URI}/test/${data.id}`, {
            user:{
                //@ts-ignore
                nickname:outAnswers[0].login,
                //@ts-ignore
                phoneNumber:outAnswers[0].number
            }, 
            answers:outAnswers.slice(1)
        })
        //@ts-ignore
        setResult(response.data.right)
        setShowResult(true);
    }
    

    if(showResult){
        return(
            <div>
                <ResultCard  countOfRightAnswers={result}/>
            </div>
        )
    }

    return(
        <div>
            {index === -1 ? <LoginForm setAnswers={setAnswers} answers={answers} index={index} setIndex={setIndex}/> :
            //@ts-ignore
            data && data.questions? <MotherOfQuestions setAnswers={setAnswers} answers={answers} lastQuestionHandler={lastQuestionHandler} questionIndex={index} question={data.questions[index]} setQuestionIndex={setIndex} isLast={index === questionsCount-1} /> : <div>Loading...</div>
            }
        </div>
    )
}

export default Home;