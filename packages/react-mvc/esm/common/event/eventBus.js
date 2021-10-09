"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalEvent = exports.EventBus = void 0;
const eventEmitter_1 = require("./eventEmitter");
exports.EventBus = new eventEmitter_1.EventEmitter();
class GlobalEvent {
    /**
     * Subscribe the service event
     * @param name Event name
     * @param callback Callback function
     */
    subscribe(name, callback) {
        exports.EventBus.subscribe(name, callback);
    }
    /**
     * Emit the service event
     * @param name Event name
     * @param args Arguments
     */
    emit(name, ...args) {
        exports.EventBus.emit(name, ...args);
    }
    /**
     * Unsubscribe the specific event
     * @param name The event name
     * @param callback The subscribed function
     */
    unsubscribe(name) {
        exports.EventBus.unsubscribe(name);
    }
}
exports.GlobalEvent = GlobalEvent;
//# sourceMappingURL=eventBus.js.map