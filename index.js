import { utils as utils$1 } from 'pixi.js';

var emitter = new utils$1.EventEmitter();

var utils;
(function (utils) {
    function blah() { return "I'm a string!"; }
    utils.blah = blah;
})(utils || (utils = {}));

var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());

export { Foo as F, emitter, utils };
