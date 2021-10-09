import React, { ComponentType, ReactNode } from "react";
import { IModel } from "./model";
import { Controller } from "./controller";


export type CompoundModel = {
    [index: string | number]: IModel;
};

export type CompoundController = {
    [index: string | number]: Controller;
};

export function render<P, S>(
    model: IModel | CompoundModel, 
    View: ComponentType,
    Controller?: Controller | CompoundController,
    ): ReactNode {
    return class ModelView extends React.Component<P, any> {
        state: { lastUpdated: number };
        constructor(props: P) {
            super(props);
            this.onChange = this.onChange.bind(this);
            this.state = {
                lastUpdated: Date.now(),
            };
        }

        componentDidMount() {
            if (model.isModel) {
                (model as IModel).onUpdateState(this.onChange);
            } else if (typeof model === 'object') {
                for (const prop in model) {
                    if (prop) {
                        const mo = (model as CompoundModel)[prop];
                        if (mo.isModel) {
                            mo.onUpdateState(this.onChange);
                        }
                    }
                }
            }
        }

        onChange(prevState: S, nextState: S) {
            this.update();
        }

        update = () => {
            this.setState({
                lastUpdated: Date.now(),
            });
        };

        getModelState() {
            const target = {};
            if (model.isModel) {
                const mo = model as IModel;
                Object.assign(target, { ...mo.getState() });
            } else if (typeof model === 'object') {
                for (const prop in model) {
                    if (prop) {
                        const mo = (model as CompoundModel)[prop];
                        if (mo.isModel) {
                            Object.assign(target, {
                                [prop]: { ...mo.getState() },
                            });
                        }
                    }
                }
            }
            return target;
        }

        render() {
            return (
                <View
                    {...this.state}
                    {...this.getModelState()}
                    {...this.props}
                    {...Controller}
                />
            );
        }
    };
}