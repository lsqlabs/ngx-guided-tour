import { Component } from '@angular/core';
import { GuidedTour, Orientation } from 'projects/ngx-guided-tour/src/lib/guided-tour.constants';
import { GuidedTourService } from 'projects/ngx-guided-tour/src/lib/guided-tour.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngx-guided-tour-demo';

    public dashboardTour: GuidedTour = {
        tourId: 'purchases-tour',
        useOrb: true,
        steps: [
            {
                title: 'Welcome to the Guided Tour Demo',
                selector: '.demo-title',
                content: 'Step 1',
                orientation: Orientation.Bottom
            },
            {
                title: 'General page step',
                content: 'We have the concept of general page steps so that a you can introuce a user to a page or non specific instructions',
            },
            {
                title: 'Positioning',
                selector: '.tour-middle-content',
                content: 'Step position can be set so that steps are always in view. This step is on the left.',
                orientation: Orientation.Left
            },
            {
                title: 'Positioning 2',
                selector: '.tour-middle-content',
                content: 'This step is on the right.',
                orientation: Orientation.Right
            },
            {
                title: 'Scroll to content',
                selector: '.tour-scroll',
                content: 'Automatically scroll to elements so they are in view',
                orientation: Orientation.Top
            }
        ]
    };

    constructor(
        private guidedTourService: GuidedTourService
    ) {

        setTimeout(() => {
            this.guidedTourService.startTour(this.dashboardTour);
        }, 1000);
    }

    public restartTour(): void {
        this.guidedTourService.startTour(this.dashboardTour);
    }
}
