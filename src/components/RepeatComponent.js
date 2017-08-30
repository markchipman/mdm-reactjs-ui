import React from 'react';
import DynamicComponent from "../DynamicComponent";
import ContainerBaseComponent from "./ContainerBaseComponent";

class RepeatComponent extends ContainerBaseComponent {

    render() {
        if (this.props.context === null) {
            return null;
        }
        this.update();
        return <div className="panel panel-info">
            <div className="panel-heading">
                <h2 className="panel-title">{this.props.context.label}</h2>
            </div>
            <table className="table-condensed">
                <tbody>
                <tr>
                    {this.elements.map(function (element) {
                        return <td key={element.path}>
                            <DynamicComponent type={element.type} context={element.context} path={element.path}
                                              key={element.path}/>
                        </td>
                    })}
                </tr>
                </tbody>
            </table>
        </div>
    }
}

export default RepeatComponent;
