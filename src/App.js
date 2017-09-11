import React, {Component} from 'react';
import './App.css';
import TableComponent from "./components/TableComponent";
import axios from 'axios';
import ModelService from "./services/ModelService"


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            controls: null
        };
        this.path = undefined;
    }

    componentDidMount() {
        axios.get('mini_model_ui_example.json')
            .then(res => {
                this.setState({controls: res.data.Controls});
                ModelService.setModel(res.data.Model);
            });
    }

    render() {
        return (
            <div>
                <div className="center">
                    <h1>Data Driven ReactJs Dynamic Content Demo</h1>
                </div>
                <TableComponent context={this.state.controls} path={this.path} />
            </div>
        );
    }
}

export default App;
