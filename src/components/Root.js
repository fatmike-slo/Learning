import React from "react";

import Calculator from "./Calculator";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

class Root extends React.Component {
    render(){
        return(
            <div className="container">
                <Header /> 
                <div className="col-12">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Root;