import React from "react";
import Right_Photo from "../assets/right_photo.png"
import Facebook from "../assets/Facebook.png"
import Navbar from "./Navbar";
class Login extends React.Component{

    

    render(){
        return <div>
            <Navbar/>
            <div class="w-full h-screen overflow-hidden grid grid-cols-2">
        <div class="flex items-center justify-center">
            <div class="w-[584px] h-[80vh] shadow-2xl border-red-800 border-2 flex flex-col justify-center">
                
                <h1 class="font-bold text-center text-3xl">Đăng nhập</h1>
                <p class="mx-6">Email</p>
                <input type="text" placeholder="Example: abc123@gmail.com" class="mx-6 border-black border rounded-lg h-[45px] placeholder:px-2" required />
                <p class="mx-6">Password</p>
                <input type="password" placeholder="********" class="mx-6 border-black border rounded-lg h-[45px] placeholder:px-2" required />
                <router-link to="/" class="mx-6">
                    <button class="bg-orange-400 text-white w-full h-[45px] rounded-lg mt-4" >Đăng nhập</button>
                </router-link>
                <div class="flex bg-[#1877f2]">
                    <img src={Facebook} class="mt-4 mx-6"/>
                    <button class="bg-[#1877f2] text-white w-full h-[45px] rounded-lg mt-4 mx-6">Đăng nhập bằng facebook</button>
                </div>

            </div>
            
            </div>
        <img src={Right_Photo} alt="right_photo" class="w-full  overflow-hidden"/>
    </div>
        </div>;
    
}
}

export default Login;