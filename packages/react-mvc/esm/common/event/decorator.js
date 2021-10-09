"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribe = exports.emit = void 0;
const eventBus_1 = require("./eventBus");
/**
 * Emit decorator, when the function be called,
 * it's going to notify the listener
 * @param name Event name
 */
function emit(name) {
    return function (target, property, descriptor) {
        const original = descriptor.value;
        if (typeof original === 'function') {
            descriptor.value = function (...args) {
                try {
                    const result = original.apply(this, args);
                    eventBus_1.EventBus.emit(name, args);
                    return result;
                }
                catch (e) {
                    throw e;
                }
            };
        }
        return descriptor;
    };
}
exports.emit = emit;
/**
 * When the event emitted, it's going to call target function
 * @param name Event name
 */
function subscribe(name) {
    return function (target, property, descriptor) {
        const original = descriptor.value;
        if (typeof original === 'function') {
            eventBus_1.EventBus.subscribe(name, original);
        }
        return descriptor;
    };
}
exports.subscribe = subscribe;
//# sourceMappingURL=decorator.js.map