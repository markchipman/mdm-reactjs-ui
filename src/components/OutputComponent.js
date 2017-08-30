import React, { Component } from 'react';

class OutputComponent extends Component{
    render() {
        return  <div>OutputComponent: value={this.props.value}</div>;
    }
}

export default OutputComponent;