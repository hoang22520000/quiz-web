import React from "react";
import Right_Photo from "../assets/right_photo.png";
import Facebook from "../assets/Facebook.png";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3006/users/login", { email, password });
      // Xử lý logic sau khi đăng nhập thành công, ví dụ chuyển hướng trang, lưu thông tin người dùng vào local storage, vv.
      console.log(response);
      const token = response.data.token;
      const user = response.data.user.email;
      console.log(user);
      localStorage.setItem("token", token);
      localStorage.setItem("email", user);

      history.push("/");
    } catch (error) {
      // Xử lý lỗi đăng nhập, ví dụ hiển thị thông báo lỗi
      console.error(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div class="w-full h-screen overflow-hidden grid grid-cols-2">
        <div class="flex items-center justify-center">
          <div class="w-[584px] h-[80vh] shadow-2xl border-red-800 border-2 flex flex-col justify-center">
            <h1 class="font-bold text-center text-3xl">Đăng nhập</h1>
            <form onSubmit={handleLogin}>
            <div className="flex items-center justify-center ">
              <div class="my-4 w-4/5 font-medium">Email:</div>
            </div>
              <div className="flex items-center justify-center">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Example: abc123@gmail.com"
                class="border-black border rounded-lg h-[45px] placeholder:px-2 w-4/5"
                required
              />
              </div>
              <div className="flex items-center justify-center ">
              <div class="my-4 w-4/5 font-medium">Password:</div>
            </div>
              <div className="flex items-center justify-center">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                class="mx-6 border-black border rounded-lg h-[45px] w-4/5 placeholder:px-2"
                required
              />
              </div>
              <div class="flex items-center justify-center">
              <button
                class="bg-orange-400 text-white w-3/5 h-[40px] rounded-lg mt-5 font-semibold"
                type="submit">
                Đăng nhập
              </button>
              
              
              </div>
            </form>
            <div class="w-full flex justify-center">
            <div className="flex bg-[#1877f2] text-white w-3/5 h-[40px] rounded-lg mt-5">
                    <img src={Facebook} class="mx-6"/>
                    <button className="grow bg-[#1877f2] text-white w-full h-full rounded-lg">Đăng nhập bằng facebook</button>
            </div>
            </div>
          </div>
        </div>
        <img src={Right_Photo} alt="right_photo" class="w-full  overflow-hidden" />
      </div>
    </div>
  );
}

export default Login;
