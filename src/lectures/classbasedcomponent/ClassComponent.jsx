import React, { Component } from "react";

class ClassComponent extends Component {

    state = {
        test: 1
    }

    componentWillMount = () => {
        console.log('Before Class component Mount');
    }

    componentDidMount = () => {
        console.log('Class Component Mounted');
    }

    componentDidUpdate = () => {
        console.log('Class Component Updated');
    }

    componentWillReceiveProps(nextprops) {
        console.log('Class Component Will receive props', nextprops);
    }

    componentWillUnmount = () => {
        console.log('Class Component Destroy');
    }

    changestateDemo = () => {
        this.setState({
            test: this.state.test + 1
        })
    }

    render() {
        const { test } = this.state;
        return(
            <div className="center-of-screen">
               <div>
                    <div className="an-20 bold-text">
                        It is your Simple Class Component;
                    </div>

                    <div className="pt20 an-16 medium-text">
                        Your State Value is <span className="redcolor--text ml10">{ test }</span>
                    </div>

                    <button onClick={this.changestateDemo} className="demo-button an-14 demi-bold-text mt20">
                        click here to state change
                    </button>
                </div>
            </div>
        )
    }
}

export default ClassComponent;