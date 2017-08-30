import React, { Component } from 'react';

class SwitchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false // getValue(this.props.context.ref)
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
    handleCheckboxChange(event) {
        console.log(this.props.path + ' checkbox changed! ', event.target.checked);
        this.setState({isChecked: event.target.checked});
    }
    render() {
        return  <div><input type='checkbox' onChange={this.handleCheckboxChange} checked={this.state.isChecked} />
            <strong>{this.props.context.label}</strong></div>
    }
}

export default SwitchComponent;
