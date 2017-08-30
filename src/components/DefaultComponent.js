import React, { Component } from 'react';

class DefaultComponent extends Component{
    render() {
        return  <div>{this.props.context.ui}: {this.props.context.label}</div>
    }
}

export default DefaultComponent;