import React from 'react';
import {render} from 'react-dom';

import Calculator from './components/calculator.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>React Node calculator</p>
                <Calculator/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));