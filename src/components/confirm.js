import { useGlobalContext } from "../context";

const Confirm = () =>{
    const { error, startQuiz } = useGlobalContext();
    return(
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="min-h-1/12 bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 ">
            <h1 class="text=2xl text-center">Bạn có chắc chắn làm bài?</h1>
            {error && (
          <p className="text-red-600">
            Không thể tạo bộ câu hỏi, vui lòng thử lại sau
          </p>
        )}
        <button
          type="submit"
          className="bg-yellow-600 rounde-md w-full p-2 text-white hover:bg-yellow-500" 
          onClick={startQuiz}
        >
          Bắt đầu làm bài
        </button>
        </div>
        </div>
    )
}

export default Confirm;