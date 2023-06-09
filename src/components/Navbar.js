import React from "react";
import Icon_header from "../assets/Icon_Header.svg";
import { Dropdown, initTE } from "tw-elements";

class Navbar extends React.Component{
    
    componentDidMount() {
        initTE({ Dropdown });
    }

	componentDidUpdate() {
		initTE({ Dropdown });
	}
    render(){
        initTE({ Dropdown }, true );

        return <div class="flex justify-between items-center h-20 w-full overflow-x-hidden">
            
	<div class="bg-white w-1/4 h-full items-center flex ml-4">
		<img src={Icon_header} alt="icon" class="scale-125 "/>
		<h2 class="ml-4 text-2xl">Tracnghiem.xyz</h2>
	</div>
	<div class="w-1/2 bg-white h-full flex justify-center ">
		<div class="grid h-full items-end" data-te-dropdown-ref>
			<button
				class="flex items-center whitespace-nowrap rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none"
				type="button"
				id="dropdownMenuButton9"
				data-te-dropdown-toggle-ref
				aria-expanded="false"
				data-te-ripple-init>
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
							clip-rule="evenodd" />
					</svg>
				</span>
			</button>
			<div data-te-dropdown-menu-ref class="w-[50vh] absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" >
				<div class="grid grid-cols-2" >
					<div class="w-full">
						<ul >
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Lớp 12
								</button>
							</li>
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Lớp 11
								</button>
							</li>
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Lớp 10
								</button>
							</li>
              <li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Lớp 9
								</button>
							</li>
              
						</ul>
					</div>
          <div class="w-full">
						<ul >
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Lớp 8
								</button>
							</li>
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Lớp 7
								</button>
							</li>
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Lớp 6
								</button>
							</li>
              
						</ul>
					</div>  
				</div>
			</div>
		</div>


    

    <div class="grid h-full items-end" data-te-dropdown-ref>
			<button
				class="flex items-center whitespace-nowrap rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none"
				type="button"
				id="dropdownMenuButton9"
				data-te-dropdown-toggle-ref
				aria-expanded="false"
				data-te-ripple-init>
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
							clip-rule="evenodd" />
					</svg>
				</span>
			</button>
			<div data-te-dropdown-menu-ref class="w-[50vh] absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" >
				<div class="grid grid-cols-2" >
					<div class="w-full">
						<ul >
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  THPT Quốc gia môn Toán
								</button>
							</li>
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  THPT Quốc gia môn Lý
								</button>
							</li>
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  THPT Quốc gia môn Hóa
								</button>
							</li>
              <li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  THPT Quốc gia môn Sinh
								</button>
							</li>
						</ul>
					</div>
          <div class="w-full">
						<ul >
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  THPT Quốc gia môn Lịch Sử
								</button>
							</li>
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  THPT Quốc gia môn Địa Lý
								</button>
							</li>
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  THPT Quốc gia môn Tiếng Anh
								</button>
							</li>
              <li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  THPT Quốc gia môn GDCD
								</button>
							</li>
						</ul>
					</div>  
				</div>
			</div>
		</div>


    <div class="grid h-full items-end" data-te-dropdown-ref>
			<button
				class="flex items-center whitespace-nowrap rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none"
				type="button"
				id="dropdownMenuButton9"
				data-te-dropdown-toggle-ref
				aria-expanded="false"
				data-te-ripple-init>
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
							clip-rule="evenodd" />
					</svg>
				</span>
			</button>
			<div data-te-dropdown-menu-ref class="w-[50vh] absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" >
				<div class="grid grid-cols-3" >
					<div class="w-full">
						<ul >
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Tin học văn phòng
								</button>
							</li>
							
						</ul>
					</div>
          <div class="w-full">
						<ul >
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Quản trị hệ thống
								</button>
							</li>
							
						</ul>
					</div>  
          <div class="w-full">
						<ul >
							<li>
								<button
									href="#"
									class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
									data-te-dropdown-item-ref>
                  Lập trình
								</button>
							</li>
							
						</ul>
					</div>  
				</div>
			</div>
		</div>

	</div>
	<div class="bg-white w-1/4 h-full flex items-center justify-center">
		<button class="bg-orange-500 p-4 rounded-3xl text-white justify-center align-center ">Đăng nhập</button>
		
	</div>
</div>
    }
}
export default Navbar;