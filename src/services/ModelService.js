import jp from "jsonpath";

class ModelService {
    constructor() {
        if(!ModelService.instance){
            this.model = {};
            ModelService.instance = this;
        }
        return ModelService.instance;
    }

    setModel(model) {
        this.model = model;
    }

    getValue(ref) {
        return this.getContextValue(this.model, ref);
    }

    getContextValue(context, ref) {
        if (ref === undefined) {
            console.warn("ModelService: Undefined ref from context=" + JSON.stringify(context));
            return undefined;
        }
        if (typeof ref !== 'string') {
            return ref;
        }
        let val = jp.value(context, '$.' + ref);
        return val;
    }

    setValue(ref, value) {
        return this.setContextValue(this.model, ref, value);
    }

    setContextValue(context, ref, value) {
        let previousValue = this.getContextValue(context, ref);
        if (previousValue === value) {
            return value;
        }
        let rv = jp.apply(context, '$.' + ref, oldValue => value);
        if (rv.length === 0) {
            return undefined;
        }
        return rv;
    }
}
const instance = new ModelService();
export default instance;
