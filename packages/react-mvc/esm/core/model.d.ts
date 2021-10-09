import { GlobalEvent } from '../common/event';
export interface IModel<S = any> {
    setState(values: S, callback?: (prevState: S, nextState: S) => void): void;
    render(nextState?: S): void;
    onUpdateState(callback: (prevState: S, nextState: S) => void): void;
    forceUpdate(): void;
    getState(): S;
    get isModel(): boolean;
}
export declare abstract class Model<S = any> extends GlobalEvent implements IModel<S> {
    protected abstract state: S;
    private _event;
    constructor();
    /**
     * Set the state values, and notify the view component to re render
     * @param values update target state values
     */
    setState(values: Partial<S>, callback?: (prevState: S, nextState: S) => void): void;
    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    render(nextState?: S): void;
    onUpdateState(callback: (prevState: S, nextState: S) => void): void;
    forceUpdate(): void;
    getState(): S;
    get isModel(): boolean;
}
