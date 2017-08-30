import React from 'react';
import DynamicComponent from "../DynamicComponent";
import ContainerBaseComponent from "./ContainerBaseComponent";

class TableComponent extends ContainerBaseComponent {

    render() {
        if (this.props.context === null) {
            return null;
        }
        this.update();
        return <div>
            <h3>{this.props.context.label}</h3>
            {this.elements.map(function (element) {
                return <DynamicComponent type={element.type} context={element.context} path={element.path}
                                         key={element.path} />
            })}
        </div>
    }
}

export default TableComponent;
