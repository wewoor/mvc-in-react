import { assign, cloneDeep } from 'lodash';
import { EventEmitter, GlobalEvent } from '../common/event';

enum ModelEvents {
    Update = 'Model.Update',
}

export interface IModel<S = any> {
    setState(values: S, callback?: (prevState: S, nextState: S) => void): void;
    render(nextState?: S): void;
    onUpdateState(callback: (prevState: S, nextState: S) => void): void;
    forceUpdate(): void;
    getState(): S;
    get isModel(): boolean;
}

export abstract class Model<S = any>
    extends GlobalEvent
    implements IModel<S> {
    protected abstract state: S;
    private _event: EventEmitter;

    constructor() {
        super();
        this._event = new EventEmitter();
    }

    /**
     * Set the state values, and notify the view component to re render
     * @param values update target state values
     */
    public setState(
        values: Partial<S>,
        callback?: (prevState: S, nextState: S) => void
    ) {
        const nextState = assign(this.state, values);
        this.render(nextState);
        callback?.(this.state, nextState);
    }

    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    public render(nextState?: S) {
        this._event.emit(ModelEvents.Update, this.state, nextState);
    }

    public onUpdateState(callback: (prevState: S, nextState: S) => void) {
        this._event.subscribe(ModelEvents.Update, callback);
    }

    public forceUpdate() {
        this.setState(cloneDeep(this.state));
    }

    public getState(): S {
        return this.state;
    }

    get isModel(): boolean {
        return true;
    }
}
