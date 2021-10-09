"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const react_1 = __importDefault(require("react"));
function render(model, View, Controller) {
    return class ModelView extends react_1.default.Component {
        constructor(props) {
            super(props);
            this.update = () => {
                this.setState({
                    lastUpdated: Date.now(),
                });
            };
            this.onChange = this.onChange.bind(this);
            this.state = {
                lastUpdated: Date.now(),
            };
        }
        componentDidMount() {
            if (model.isModel) {
                model.onUpdateState(this.onChange);
            }
            else if (typeof model === 'object') {
                for (const prop in model) {
                    if (prop) {
                        const mo = model[prop];
                        if (mo.isModel) {
                            mo.onUpdateState(this.onChange);
                        }
                    }
                }
            }
        }
        onChange(prevState, nextState) {
            this.update();
        }
        getModelState() {
            const target = {};
            if (model.isModel) {
                const mo = model;
                Object.assign(target, Object.assign({}, mo.getState()));
            }
            else if (typeof model === 'object') {
                for (const prop in model) {
                    if (prop) {
                        const mo = model[prop];
                        if (mo.isModel) {
                            Object.assign(target, {
                                [prop]: Object.assign({}, mo.getState()),
                            });
                        }
                    }
                }
            }
            return target;
        }
        render() {
            return (react_1.default.createElement(View, Object.assign({}, this.state, this.getModelState(), this.props, Controller)));
        }
    };
}
exports.render = render;
//# sourceMappingURL=view.js.map