import Navbar from "../Navbar";
import Card from "../Card";
export default function Topic() {
  return (
    <>
      <div className="topic-container">
        <Navbar />
        <div class="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-5 px-3">
          <Card price="Miễn Phí" time={90} title="Đề Thi THPTQG 2022 môn Toán" description="Đề Thi THPTQG 2022 môn toán" />
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        </div>
      </div>
    </>
  );
}
