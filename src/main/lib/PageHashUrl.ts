/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import Class from "./Class.js";
import SpaPageMap from "./SpaPageMap.js";

type Method = (...args: any[]) => any;

export default function pageHashUrl(value: string): Method {
    return function classDecorator<C extends Class>(originalClass: C, context: ClassDecoratorContext): Class {
        return class extends originalClass {
            constructor(...args: any[]) {
                super(...args);
                SpaPageMap.instance().addPage(value, originalClass);
            }
        }
    }
}

