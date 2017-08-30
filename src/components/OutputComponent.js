import React, { Component } from 'react';

class OutputComponent extends Component{
    constructor(props) {
        super(props);
        this.value = 0;  // Lookup ref value in Model.
    }
    render() {
        return  <div><strong>{this.props.context.label}</strong><br/>{this.value}</div>
    }
}

export default OutputComponent;