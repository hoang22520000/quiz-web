import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Login from "./Login";
import Card from "./Card";
class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
        <div class="h-full bg-slate-200 overflow-x-hidden">
    <h1 class="font-bold text-5xl pl-10 pt-10">Chủ đề trắc nghiệm nổi bật</h1>
    <p class="px-10 text-lg pb-5">
        Lựa chọn chủ đề yêu thích và các bài test nhanh chóng
    </p>
    <div class="flex flex-row flex-wrap gap-3 justify-between px-60 pb-6">
        <Card price="Miễn Phí" time={90} title="Đề Thi THPTQG 2022 môn Toán" description="Đề Thi THPTQG 2022 môn toán" />
        <Card price="20.000đ" time={120} title="English Test" description="Đề thi TOEIC Test"/>
        <Card price="Miễn phí" title="Đề thi Giữa kỳ 2 môn Lịch Sử 10" description="Đề thi giữa kỳ 2 môn Lịch sử 10 trường THPT Chuyên Lê Quý Đôn Đà Nẵng"/>
        
    </div>
</div>
      </div>
    );
  }
}

export default Homepage;
