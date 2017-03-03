import React from "react";


class Calculator extends React.Component {
    

    render(){
        return(
            <div className="container">
                    <div className="row">
                        <div className="col-xs-4 ">
                        </div>
                        <div className="col-xs-4">
                            <div id="calculator">
                                <div className="top">
                                    <span className="clear">C</span>
                                    <div className="screen"></div>
                                </div>
                                
                                <div className="keys">
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span className="operator">+</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span className="operator">-</span>
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span className="operator">÷</span>
                                    <span>0</span>
                                    <span>.</span>
                                    <span className="eval">=</span>
                                    <span className="operator">x</span>
                                </div>
                            </div>                                                                                                                                                                                                      
                        </div>
                        <div className="col-xs-4">
                            <p></p>
                        </div>                                             
                    </div>
            </div>
        );
    }
}

export default Calculator;