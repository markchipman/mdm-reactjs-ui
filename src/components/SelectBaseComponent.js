import React, {Component} from 'react';

class SelectBaseComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        console.log(this.props.path + ' select base change value=' + event.target.value);
        this.setState({value: event.target.value});
    }
    render() {
        return <div><strong>{this.props.context.label}</strong><br/>
            <select value={this.state.value} onChange={this.handleChange}>
                {this.items.map(function (item) {
                    return <option value={item} key={item}>{item}</option>
                })}
            </select>
        </div>
    }
}

export default SelectBaseComponent;
