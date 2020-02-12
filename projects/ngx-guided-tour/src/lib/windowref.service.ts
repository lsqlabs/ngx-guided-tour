import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

function getWindow(): any {
    return window;
}

function getMockWindow(): any {
    return {
        innerWidth: 0,
        innerHeight: 0,
        scrollY: 0,
        scrollX: 0,
        pageYOffset: 0,
        pageXOffset: 0,
        scroll: () => {},
        scrollTo: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
    }
}

@Injectable()
export class WindowRefService {
    private readonly isBrowser: boolean = false;

    get nativeWindow(): any {
        if (this.isBrowser) {
            return getWindow();
        } else {
            return getMockWindow();
        }
    }

    constructor(@Inject(PLATFORM_ID) platformId) {
        this.isBrowser = isPlatformBrowser(platformId);
    }
}
