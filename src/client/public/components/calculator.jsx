import React from 'react';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number : 0
        };
        this.counter = this.counter.bind(this);
    }

    counter () {
        this.setState({number: this.state.number + 1});
    }

    render() {
        return (
            <div>
                Number : <span>{this.state.number}</span>
                <div><button onClick={this.counter}>plus</button></div>
            </div>
        );
    }

}

export default Calculator;