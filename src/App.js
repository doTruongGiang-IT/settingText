import React, { Component } from 'react';
import ColorPicker from './Components/ColorsPicker';
import SettingSize from './Components/SettingSize';
import Reset from './Components/Reset';
import Result from './Components/Result';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 14
    };
  }

  SettingColor = (color) => {
    this.setState( {
      color: color
    } );
  };

  SettingSize = (size) => {
      this.setState( {
        fontSize: ( this.state.fontSize + size >= 8 && this.state.fontSize + size <= 36 ) ? this.state.fontSize + size : this.state.fontSize
      } );
  };

  SettingDefault = (value) => {
    if( value ) {
      this.setState( {
        color: 'red',
        fontSize: 14
      } );
    }
  };

  render() {
    return (
      <div className="App">
        <div className="row col-12 mt-5">
          <ColorPicker color={this.state.color} changeColor={this.SettingColor} />
          <SettingSize fontSize={this.state.fontSize} changeSize={this.SettingSize} />
        </div>

        <div className="row col-12 mt-2">
            <Reset default={this.SettingDefault}/>
          </div>

        <div className="row col-12 mt-4">
          <Result color={this.state.color} size={this.state.fontSize}/>          
        </div>
      </div>
    );
  }
}

export default App;
