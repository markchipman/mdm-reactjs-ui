// eslint-disable-next-line
import React, {Component} from 'react';
import jp from "jsonpath";

class ContainerBaseComponent extends Component {
    update() {
        if (this.props.context === null) {
            return;
        }
        this.elements = [];
        let elements = jp.query(this.props.context, '$..controls')[0];
        for (let el in elements) {
            let context = elements[el];
            let type = this.props.context.ui != null ? this.props.context.ui : 'default';
            this.elements.push({context: context, path: this.getPath(el), type: type});
        }
    }

    getPath(name) {
        if (this.props.path === undefined) {
            return name;
        }
        return this.props.path + '.' + name;
    }
}

export default ContainerBaseComponent;
