import Navbar from "../Navbar";
import Card from "../Card";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function Topic() {
  return (
    <>
      <div className="topic-container">
        <Navbar />
        <div class="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-5 px-3">
            <Link to="/quiz">
              <Card price="Miễn Phí" time={90} title="Test" description="Test Quiz" />
            </Link>
            <Link to="/quiz">
              <Card price="Miễn Phí" time={90} title="Test" description="Test Quiz" />
            </Link>
            <Link to="/quiz">
              <Card price="Miễn Phí" time={90} title="Test" description="Test Quiz" />
            </Link>
            <Link to="/quiz">
              <Card price="Miễn Phí" time={90} title="Test" description="Test Quiz" />
            </Link>
            <Link to="/quiz">
              <Card price="Miễn Phí" time={90} title="Test" description="Test Quiz" />
            </Link>
            <Link to="/quiz">
              <Card price="Miễn Phí" time={90} title="Test" description="Test Quiz" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
