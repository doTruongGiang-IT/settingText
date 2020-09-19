import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', 'yellow']
        };
    }

    showColor = (color) => {
        return{
            backgroundColor: color
        };
    };

    setActive(color) {
        this.props.changeColor(color);
    };

    render() {
        let elmColors = this.state.colors.map( (color, index) => {
            return <span 
                        key={index} 
                        style={this.showColor(color)} 
                        className={this.props.color === color ? 'active' : ''}
                        onClick={() => this.setActive(color)}
                        ></span>
        } );

        return (
            <div className="card col-5">
                <div className="card-header">
                    Color Picker
                </div>
                <div className="card-body">
                    {elmColors}
                </div>
            </div>
        );
    }
}

export default ColorPicker;
