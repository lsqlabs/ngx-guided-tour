import { GuidedTourService } from './guided-tour.service';
import { GuidedTourComponent } from './guided-tour.component';
import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        GuidedTourComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GuidedTourComponent
    ],
    entryComponents: [
        GuidedTourComponent
    ]
})
export class NgxGuidedTourModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxGuidedTourModule,
            providers: [
                ErrorHandler,
                GuidedTourService
            ]
        };
    }
}
