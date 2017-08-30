import React, {Component} from 'react';
import './App.css';
import DynamicComponent from "./DynamicComponent";
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: null
        };
    }

    componentDidMount() {
        axios.get(`/public/mini_model_ui_example.json`)
            .then(res => {
                this.setState({res});
            });
    }

    render() {
        return (
            <div>
                <div className="center">
                    <h1>Data Driven ReactJs Dynamic Content Demo</h1>
                </div>
                <DynamicComponent type="output" value="This is a dynamic output div!"/>
                <DynamicComponent type="unknown" value="This is an unknown div!"/>
                <span>{JSON.stringify(this.state.model)}</span>
            </div>
        );
    }
}

export default App;
