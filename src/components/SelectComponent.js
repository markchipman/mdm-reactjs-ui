import SelectBaseComponent from "./SelectBaseComponent";

class SelectComponent extends SelectBaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 'CPAP'  // getValue(this.props.context.ref)
        };
        this.items = [
            'CPAP', 'AutoSet', 'HerAuto' // getValue(this.props.context.bind)
        ];
    }
}

export default SelectComponent;
