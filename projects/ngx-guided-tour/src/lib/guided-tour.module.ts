import { GuidedTourService } from './guided-tour.service';
import { GuidedTourComponent } from './guided-tour.component';
import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowRefService } from './windowref.service';

@NgModule({
  declarations: [GuidedTourComponent],
  imports: [CommonModule],
  providers: [WindowRefService],
  exports: [GuidedTourComponent],
  entryComponents: [GuidedTourComponent],
})
export class GuidedTourModule {
  public static forRoot(): ModuleWithProviders<GuidedTourModule> {
    return {
      ngModule: GuidedTourModule,
      providers: [ErrorHandler, GuidedTourService],
    };
  }
}
