import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { GuidedTourComponent } from './guided-tour.component';
import { GuidedTourService } from './guided-tour.service';

export * from './guided-tour.constants';
export {
    GuidedTourService,
    GuidedTourComponent
}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GuidedTourComponent
    ],
    exports: [
        GuidedTourComponent
    ],
    entryComponents: [
        GuidedTourComponent
    ]
})
export class GuidedTourModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: GuidedTourModule,
            providers: [
                ErrorHandler,
                GuidedTourService
            ]
        }
    }
}
