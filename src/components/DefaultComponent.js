import React, { Component } from 'react';

class DefaultComponent extends Component{
    render() {
        return  <div>DefaultComponent: value={this.props.value}</div>;
    }
}

export default DefaultComponent;