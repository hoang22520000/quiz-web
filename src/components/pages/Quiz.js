export default function Quiz() {
  
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="p-3 py-5 bg-white rounded-lg shadow-xl w-11/12 max-w-[800px]">
          <p class="text-right text-green-600 pb-2 text-lg">Câu 1/10</p>
          <h1 class="text-3xl font-medium text-center">HTML là viết tắt của...</h1>
          <div class="grid grid-cols-1 my-5 space-y-2 place-content-center">
          <button class="bg-blue-500 w-4/5 rounded-lg mx-auto text-white p-2 hover:bg-blue-400">Hyperlinks and Text Markup Language</button>
          <button class="bg-blue-500 w-4/5 rounded-lg mx-auto text-white p-2 hover:bg-blue-400">Home Tool Markup Language</button>
          <button class="bg-blue-500 w-4/5 rounded-lg mx-auto text-white p-2 hover:bg-blue-400">Hyperlinks and Text Markup Language</button>
          
          </div>

          <div class="flex justify-center pt-4">
            <button class="py-2 px-7 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700">Câu hỏi tiếp theo</button>
          </div>
      </div>
    </div>
    </div>
  );
}
