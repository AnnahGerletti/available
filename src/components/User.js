import React, {Component} from 'react';
import 'rc-calendar/assets/index.css';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';

import logo from '../logo.svg';
import '../App.css';

const formatStr = 'YYYY-MM-DD HH:mm:ss';
function format(v) {
    return v
        ? v.format(formatStr)
        : '';
}

function onStandaloneSelect(value) {
    console.log('onSelect');
    console.log(format(value[0]), format(value[1]));
}

class User extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Are you Available??</h2>
                </div>
                <div className="Main-container">
                    <div className="Cal-container">
                        <RangeCalendar onSelect={onStandaloneSelect}/>
                        <button>Select These Dates</button>
                    </div>
                    <div className="Dir-container">
                        <p>
                            Please follow these directions to how to use this app.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
