
import React, { Component } from 'react';
import OutputComponent from './components/OutputComponent'
import DefaultComponent from "./components/DefaultComponent";
import TableComponent from './components/TableComponent';
import RepeatComponent from "./components/RepeatComponent";


class DynamicComponent extends Component{
    constructor(props) {
        super(props);
        switch (props.context.ui) {
            case 'output':
                this.component = OutputComponent;
                break;
            case 'table':
                this.component = TableComponent;
                break;
            case 'repeat':
                this.component = RepeatComponent;
                break;
            default:
                this.component = DefaultComponent;
        }
    }
    render() {
        return  <this.component context={this.props.context} path={this.props.path}/>
    }
}

export default DynamicComponent;