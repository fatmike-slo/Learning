import React from "react";
import {Link} from "react-router";

class Header extends React.Component {
    render(){
        return(
            <div className="header-container navbar navbar-default" >
                <div className="container-fluid" >

                        <div className="btn-group" role="group" >
                            <Link to={"/calculator"} type="button" className="btn btn-default">Calculator</Link>
                            <Link type="button" className="btn btn-default">Other Stuff</Link>
                            <Link to={"/home"} type="button" className="btn btn-default">Home</Link>                                                                                   
                        </div>
                </div>
            </div>
        );
    }
}

export default Header;