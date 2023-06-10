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
      // Xử lý logic sau khi đăng nhập thành công
      console.log(response);
      const token = response.data.token;
      const user = response.data.user.email;
      console.log(user);
      localStorage.setItem("token", token);
      localStorage.setItem("email", user);

      history.push("/");
    } catch (error) {
      // Xử lý lỗi đăng nhập
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
              <p class="mx-6">Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Example: abc123@gmail.com"
                class="mx-6 border-black border rounded-lg h-[45px] placeholder:px-2"
                required
              />
              <p class="mx-6">Password</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                class="mx-6 border-black border rounded-lg h-[45px] placeholder:px-2"
                required
              />
              <button
                class="bg-orange-400 text-white w-[full] h-[40px] rounded-lg mt-5"
                type="submit">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
        <img src={Right_Photo} alt="right_photo" class="w-full  overflow-hidden" />
      </div>
    </div>
  );
}

export default Login;
