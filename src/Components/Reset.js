import React, { Component } from 'react';
import './css/Reset.css';

class Reset extends Component {
    settingDefault = () => {
        this.props.default(true);
    };

    render() {
        return (
            <a href="#" className="btn btn-primary btn-reset" onClick={this.settingDefault}>Reset</a>
        );
    }
}

export default Reset;
