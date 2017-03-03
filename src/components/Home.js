import React from "react";
/*
import HomeLogic from "../logic/HomeLogic";
*/



class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Default Title",
            color: "black",
            backgroundColor: "white"
        };
    }    
    changeStateMethod() {
        this.setState({ title: document.getElementById("input").value });
        this.setState({ color: document.getElementById("input").value });
        this.setState({ backgroundColor: document.getElementById("input2").value });

    }
    resetState(){
            this.setState({ color:"black",
                            backgroundColor:"white",
                            title:"Default Title",
                        });
    }
    methodReset(){
        document.getElementById("input").value = "";
        document.getElementById("input2").value = "";
    }

    render(){
    return(
        <div className="home-container container">
                <div className="row">
                    <div className="well">
                        <h2 style={{color:this.state.color}} className="myH2" >
                            {this.state.title}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-8">
                        Change the title and color: 
                        <input  id="input" type="text" onChange={this.changeStateMethod.bind(this)} autoFocus={true} />
                    </div>
                    {/************/}
                    <div className="col-xs-4">
                        <button onClick={this.methodReset.bind(this)} className="btn btn-warning">Clear input fields</button>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-xs-8">
                        Change div's color
                        <input type="text" id="input2" onChange={this.changeStateMethod.bind(this)} />
                        <hr />
                    </div>
                    {/***********/}
                    <div className="col-xs-4">
                        <button className="btn btn-success" onClick={this.resetState.bind(this)}>Reset Colors Title</button>
                    </div>
                </div>
                    <div className="row">
                        <div style={{backgroundColor:this.state.backgroundColor}} className="col-12">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quisquam quod sit nemo aut soluta voluptatum, eveniet repudiandae pariatur sapiente, ratione quidem, quibusdam consectetur veritatis! Ipsam corrupti pariatur, modi ut.
                        </div>
                        <hr />
                    </div>
                </div>
        );
    }
}
export default Home;




/*import React from "react";
import HomeLogic from "../logic/HomeLogic";



const Home = (props) => {

        return(
            <div className="home-container container">
                    <div className="row">
                        <div className="well">
                            <h2 style={{color:this.state.color}} className="myH2" >
                                {this.state.title}
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8">
                            Change the title and color: 
                            <input  id="input" type="text" onChange={this.changeStateMethod.bind(this)} autoFocus={true} />
                        </div>

                        <div className="col-xs-4">
                            <button onClick={this.methodReset.bind(this)} className="btn btn-warning">Clear input fields</button>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-xs-8">
                            Change div's color
                            <input type="text" id="input2" onChange={this.changeStateMethod.bind(this)} />
                            <hr />
                        </div>

                        <div className="col-xs-4">
                            <button className="btn btn-success" onClick={this.resetState.bind(this)}>Reset Colors Title</button>
                        </div>
                    </div>
                        <div className="row">
                            <div style={{backgroundColor:this.state.backgroundColor}} className="col-12">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quisquam quod sit nemo aut soluta voluptatum, eveniet repudiandae pariatur sapiente, ratione quidem, quibusdam consectetur veritatis! Ipsam corrupti pariatur, modi ut.
                            </div>
                            <hr />
                        </div>
                    </div>
        );
    }

export default Home;
*/
