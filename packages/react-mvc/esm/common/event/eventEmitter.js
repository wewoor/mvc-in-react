"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
class EventEmitter {
    constructor() {
        this._events = new Map();
    }
    emit(name, ...args) {
        const events = this._events.get(name);
        if (events && events.length > 0) {
            // The log for development
            events.forEach((callEvent) => {
                callEvent(...args);
            });
        }
    }
    subscribe(name, callback) {
        if (Array.isArray(name)) {
            name.forEach((key) => {
                this.assignEvent(key, callback);
            });
        }
        else {
            this.assignEvent(name, callback);
        }
    }
    unsubscribe(name) {
        if (Array.isArray(name)) {
            name.forEach((key) => {
                this._events.delete(key);
            });
        }
        else {
            this._events.delete(name);
        }
    }
    assignEvent(name, callback) {
        const event = this._events.get(name);
        if (event) {
            event.push(callback);
        }
        else {
            this._events.set(name, [callback]);
        }
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=eventEmitter.js.map