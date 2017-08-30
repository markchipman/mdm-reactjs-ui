
import React, { Component } from 'react';
import OutputComponent from './components/OutputComponent'
import DefaultComponent from "./components/DefaultComponent";
import TableComponent from './components/TableComponent';
import RepeatComponent from "./components/RepeatComponent";
import SwitchComponent from "./components/SwitchComponent";
import RangeComponent from "./components/RangeComponent";
import SelectComponent from "./components/SelectComponent";


class DynamicComponent extends Component{
    constructor(props) {
        super(props);
        this.component = this.getComponent(props.context.ui);
    }
    getComponent(ui) {
        switch (ui) {
            case 'output':
                return OutputComponent;
            case 'table':
                return TableComponent;
            case 'repeat':
                return RepeatComponent;
            case 'switch':
                return SwitchComponent;
            case 'range':
                return RangeComponent;
            case 'select':
                return SelectComponent;
            default:
                return DefaultComponent;
        }
    }
    render() {
        return  <this.component context={this.props.context} path={this.props.path}/>
    }
}

export default DynamicComponent;