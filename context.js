import axios from "axios";
import { useState, useContext, createContext } from "react";

const Appcontext = createContext();
const url="https://opentdb.com/api.php?amount=10&category=27&difficulty=easy";
const AppProvider = ({ children }) => {
    const [waiting, setWaiting] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [questions, setQuestions] = useState([]);
}

  const fetchApi=async(url)=>{
    setLoading(true);
    try{
        const response=await axios.get(url);
        if (response) {
            const data= response.data.results;
            if (data.length >0){
                setQuestions(data);
                setLoading(false);
                setError(false);
                setWaiting(false);
            } else {
                setError(true);
                setLoading(false);
                setWaiting(true);
            }

        }
        else {
            setWaiting(true);
        }
    } catch(error){
        console.log(error);
    }   
}

const nextQuestion=()=>{
    setIndex((prevIndex) => {
        if (prevIndex === questions.length - 1) {
          openModal();
          return questions.length - 1;
        } else {
          return prevIndex + 1;
        }
      });
    };

const checkAnswer = (value) => {
        if (value) {
          setCorrect((prev) => prev + 1);
        }
        nextQuestion();
    };