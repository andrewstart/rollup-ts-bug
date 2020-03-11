/// <reference types="pixi.js" />
import { utils } from "pixi.js";
declare const emitter: utils.EventEmitter;
declare namespace utils$0 {
    function blah(): string;
}
declare class Foo {
    bar: utils$0.EventEmitter;
}
export { emitter, utils$0 as utils, Foo };
