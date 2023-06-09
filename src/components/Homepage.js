import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
class Homepage extends React.Component{
    render(){
        return <div>
            <Navbar/>
        <Body />
        </div>;
    }
}

export default Homepage;