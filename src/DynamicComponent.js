
import React, { Component } from 'react';
import OutputComponent from './components/OutputComponent'
import DefaultComponent from "./components/DefaultComponent";


class DynamicComponent extends Component{
    constructor(props) {
        super(props);
        switch (props.type) {
            case 'output':
                this.component = OutputComponent;
                break;
            default:
                this.component = DefaultComponent;
        }
    }
    render() {
        return  <this.component value={this.props.value} />
    }
}

export default DynamicComponent;