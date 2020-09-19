import React, { Component } from 'react';
import './css/Reset.css';

class SettingSize extends Component {
    setSize(size) {
        this.props.changeSize(size);
    };

    render() {
        return (
            <div className="card col-5 ml-5">
                <div className="card-header">
                    Size: {this.props.fontSize}px
                </div>
                <div className="card-body">
                    <a href="#" className="btn btn-primary tang" onClick={() => this.setSize(3)}>Tang</a>
                    <a href="#" className="btn btn-primary ml-2" onClick={() => this.setSize(-3)}>Giam</a>          
                </div>
            </div>
        );
    }
}

export default SettingSize;
