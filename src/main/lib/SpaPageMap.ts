/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import Class from "./Class.js";

export default class SpaPageMap {

    private static singleInstance: SpaPageMap;

    private readonly pageMap = new Map<string, Class>();

    private constructor() {
        // Intentionally empty.
    }

    public static instance(): SpaPageMap {
        if (!SpaPageMap.singleInstance) {
            SpaPageMap.singleInstance = new SpaPageMap();
        }
        return SpaPageMap.singleInstance;
    }

    public addPage(pageHashUrl: string, page: Class): void {

    }
}
