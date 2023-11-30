/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import Class from "./Class.js";
import Method from "./Method.js";

export default function pageHashUrl(value: string): Method {
    return function classDecorator<C extends Class>(originalClass: C, context: ClassDecoratorContext): Class {
        return originalClass;
    }
}

