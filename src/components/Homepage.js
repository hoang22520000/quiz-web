import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Login from "./Login";
class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default Homepage;
