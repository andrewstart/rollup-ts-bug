/// <reference types="pixi.js" />
import { utils } from "pixi.js";
declare const emitter: utils.EventEmitter;
declare namespace utils$0 {
    function blah(): string;
}
declare class Foo {
    bar: utils.EventEmitter;
}
declare namespace libRef { }
interface Problem {
    foo: libRef.Foo;
    doAThing: (ref: typeof libRef) => void;
}
export { Foo as F, utils$0 as utils, emitter, Problem };
