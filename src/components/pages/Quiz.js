import { useGlobalContext } from "../../context";
import Confirm from "../confirm";
import Loading from "../Loading";
import Modal from "../Modal";
export default function Quiz() {
  const {
    waiting,
    loading,
    index,
    questions,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if(waiting){
    return <Confirm/>
  }
  if (loading) {
    return <Loading />;
  }
  const { incorrect_answers, correct_answer, question } = questions[index];
  const answers = [...incorrect_answers];
  if (incorrect_answers.length > 1) {
    let num = Math.floor(Math.random() * 4);
    if (num === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[num]);
      answers[num] = correct_answer;
    }
  } else {
    let num = Math.floor(Math.random() * 2);
    answers.push(answers[num]);
    answers[num] = correct_answer;
  }
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <Modal />
        <div class="p-3 py-5 bg-white rounded-lg shadow-xl w-11/12 max-w-[800px]">
          <p class="text-right text-green-600 pb-2 text-lg">Câu {index + 1}/{questions.length}</p>
          <h1 class="text-3xl font-medium text-center"  >{question}</h1>
          <div class="grid grid-cols-1 my-5 space-y-2 place-content-center">
          {answers.map((answer, index) => {
              return (
                <button
                  onClick={() => checkAnswer(answer === correct_answer)}
                  key={index}
                  className="bg-blue-500 w-4/5 rounded-lg mx-auto text-white p-2 hover:bg-blue-400"
          
                >{answer}</button>
              );
            })}
          
          </div>

          <div class="flex justify-center pt-4">
            <button class="py-2 px-7 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700" onClick={nextQuestion}>Câu hỏi tiếp theo</button>
          </div>
      </div>
    </div>
    </div>
  );
}
