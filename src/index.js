import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import Calculator from "./components/Calculator";
import Root from "./components/Root";
import Home from "./components/Home";



class Index extends React.Component {
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"/home"} component={Home} />
                    <Route path={"/calculator"} component={Calculator} />                    
                </Route>
            </Router>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));