import React, { Component } from 'react';
import './css/Reset.css';

class Result extends Component {
    setStyle() {
        return{
            color: this.props.color,
            border: 2+"px" + " solid " + this.props.color,
            fontSize: this.props.size
        };
    };

    render() {
        return (
            <div className="card col-12">
                <div className="card-header">
                    Font-size: {this.props.size}px - Color: {this.props.color}
                </div>
                <div className="card-body">
                    <div id="content_text" style={this.setStyle()}>
                        Noi dung text
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
