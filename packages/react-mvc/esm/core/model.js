"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const lodash_1 = require("lodash");
const event_1 = require("../common/event");
var ModelEvents;
(function (ModelEvents) {
    ModelEvents["Update"] = "Model.Update";
})(ModelEvents || (ModelEvents = {}));
class Model extends event_1.GlobalEvent {
    constructor() {
        super();
        this._event = new event_1.EventEmitter();
    }
    /**
     * Set the state values, and notify the view component to re render
     * @param values update target state values
     */
    setState(values, callback) {
        const nextState = (0, lodash_1.assign)(this.state, values);
        this.render(nextState);
        callback === null || callback === void 0 ? void 0 : callback(this.state, nextState);
    }
    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    render(nextState) {
        this._event.emit(ModelEvents.Update, this.state, nextState);
    }
    onUpdateState(callback) {
        this._event.subscribe(ModelEvents.Update, callback);
    }
    forceUpdate() {
        this.setState((0, lodash_1.cloneDeep)(this.state));
    }
    getState() {
        return this.state;
    }
    get isModel() {
        return true;
    }
}
exports.Model = Model;
//# sourceMappingURL=model.js.map