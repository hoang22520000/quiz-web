import React from "react";
import Anomynous from "../assets/Anomynous.png"
class Card extends React.Component {
    render(){
        return <div>
            <div class=" w-[300px] bg-white h-[500x] ">
        <div class="relative w-full h-[224px] mb-3">
        <img src={Anomynous} class="absolute w-[282px] h-[211.5px] rounded-[8px] left-[12px] top-[12px]" alt="ảnh đề thi"/>
        <div class="absolute z-[3] flex justify-center bg-white w-[87px] h-[28px] items-center left-[26px] top-[26px] text-lg rounded-[20px]">{ this.props.price }</div>
        </div>
        <div class="h-[82px] flex justify-between">
            <h1 class="text-lg font-bold pl-3 pt-3 w-2/3">{ this.props.title }</h1>
            <h1 class="text-lg font-italic pl-3 pt-3 w-1/3 pr-3 text-right">{ this.props.time } phút</h1>
        </div>
        <p class="text-md pl-3">{ this.props.description }</p>
    </div>
        </div>
    }
}
export default Card;