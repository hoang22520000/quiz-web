import React from "react";
import Icon_header from "../assets/Icon_Header.svg";
import { Route } from "react-router-dom";
import Homepage from "./Homepage";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
function Navbar() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showLogout, setShowLogout] = useState(false);
  useEffect(() => {
    // Kiểm tra nếu có token trong localStorage, đồng nghĩa với việc đã đăng nhập
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      // Lấy thông tin người dùng từ token hoặc từ API nếu cần
      // Ví dụ: const userEmail = decodeToken(token).email;
      const userEmail = localStorage.getItem("email");
      setUserEmail(userEmail);
    }
  }, [history]);
  const handlePushTopic = () => {
    history.push("/topic");
  };
  const handleShowLogout = () => {
    setShowLogout(!showLogout);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    history.push("/login");
  };
  return (
    <div class="flex justify-between items-center h-20 w-full overflow-x-hidden">
      <div class="bg-white w-1/4 h-full items-center flex ml-4">
        <img src={Icon_header} alt="icon" class="scale-125 " />
        <Link to="/">
          <h2 class="ml-4 text-2xl">Tracnghiem.xyz</h2>
        </Link>
      </div>
      <div class="w-1/2 bg-white h-full flex justify-center ">
        <div class="grid h-full items-end" data-te-dropdown-ref>
          <button
            class="flex items-center whitespace-nowrap rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none"
            type="button"
            id="dropdownMenuButton9"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            onClick={handlePushTopic}>
            Bài Kiểm tra
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>

        <div class="grid h-full items-end" data-te-dropdown-ref>
          <button
            class="flex items-center whitespace-nowrap rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none"
            type="button"
            id="dropdownMenuButton9"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            onClick={handlePushTopic}>
            THPT Quốc gia
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>

        <div class="grid h-full items-end" data-te-dropdown-ref>
          <button
            class="flex items-center whitespace-nowrap rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none"
            type="button"
            id="dropdownMenuButton9"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            onClick={handlePushTopic}>
            IT Test
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="bg-white w-1/4 h-full flex items-center justify-center">
        {isLoggedIn ? (
          <>
            <div
              class="bg-orange-500 p-3 rounded-3xl text-white justify-center align-center "
              onClick={handleShowLogout}>
              <p>Welcome, {userEmail}</p>
            </div>
            {showLogout ? (
              <button
                class="bg-white-500 p-3 rounded-3xl text-black justify-center align-center "
                onClick={handleLogout}>
                Log out
              </button>
            ) : (
              <></>
            )}
          </>
        ) : (
          <Link
            to="/login"
            class="bg-orange-500 p-3 rounded-3xl text-white justify-center align-center ">
            Đăng nhập
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
