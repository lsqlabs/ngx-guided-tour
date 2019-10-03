# ngx-guided-tour
Guided tour component using SASS and typescript. Allows you to use selectors to step your user through workflows and introduce them to your application. Customiziable theme and many features. Heavily inspired by [react-joyride](https://github.com/gilbarbara/react-joyride)

See a quick demo - [https://lsqlabs.github.io/ngx-guided-tour/](https://lsqlabs.github.io/ngx-guided-tour/)

## Installation

1. Install npm module:

    `npm install ngx-guided-tour --save`

2. Add modules to app.module.ts
```typescript
import {GuidedTourModule, GuidedTourService} from 'ngx-guided-tour';

@NgModule({
    imports: [
        GuidedTourModule,
        ...
    ],
    providers: [
       GuidedTourService,
       ...
    ],
```

## Usage

Add ngx-guided-tour to your app.component.html .
    
```html
<ngx-guided-tour></ngx-guided-tour>
```

Add guided-tour-base-theme.scss to your main style import page. If you want to create your own theme add it after your defined constants.

```scss
@import '../node_modules/ngx-guided-tour/scss/guided-tour-base-theme.scss';
```
Define your tour using the GuidedTour type:

```typescript
interface GuidedTour {
    /** Identifier for tour */
    tourId: string;
    /** Use orb to start tour */
    useOrb?: boolean;
    /** Steps for the tour */
    steps: TourStep[];
    /** Function will be called when tour is skipped */
    skipCallback?: (stepSkippedOn: number) => void;
    /** Function will be called when tour is completed */
    completeCallback?: () => void;
    /** Minimum size of screen in pixels before the tour is run, if the tour is resized below this value the user will be told to resize */
    minimumScreenSize?: number;
    /** Dialog shown if the window width is smaller than the defined minimum screen size. */
    resizeDialog?: {
        /** Resize dialog title text */
        title?: string;
        /** Resize dialog text */
        content: string;
    }
}
```

and steps:
```typescript
interface TourStep {
    /** Selector for element that will be highlighted */
    selector?: string;
    /** Tour title text */
    title?: string;
    /** Tour step text */
    content: string;
    /** Where the tour step will appear next to the selected element */
    orientation?: Orientation | OrientationConfiguration[];
    /** Action that happens when the step is opened */
    action?: () => void;
    /** Action that happens when the step is closed */
    closeAction?: () => void;
    /** Skips this step, this is so you do not have create multiple tour configurations based on user settings/permissions */
    skipStep?: boolean;
    /** Adds some padding for things like sticky headers when scrolling to an element */
    scrollAdjustment?: number;
    /** Adds default padding around tour highlighting. Does not need to be true for highlightPadding to work */
    useHighlightPadding?: boolean;
    /** Adds padding around tour highlighting in pixels, this overwrites the default for this step. Is not dependent on useHighlightPadding being true */
    highlightPadding?: number;
}
```

Orientation configuration:
```typescript
interface OrientationConfiguration {
    /** Where the tour step will appear next to the selected element */
    orientationDirection: Orientation,
    /** When this orientation configuration starts in pixels */
    maximumSize?: number
}
```

Then use the `GuidedTourService` to to start your tour by calling `GuidedTourService.startTour`.

If a selector is not found, the step will be skipped.

## TourStep Interface

selector (optional) - If no selector is present then the tour will show a step in the middle of the page. If a selector is set but not found, it will skip the step.

title (optional) - Title that shows on the top of the step.

content - Content of the tourstep. Uses inner html so tags will work.

orientation (optional) - Defaults to top. Accepts bottom, bottomLeft, bottomRight, center, left, right, top, topLeft, and topRight. Can be taken from the guided-tour.constants.ts file. This also supports a array of OrientationConfiguration. When an array of OrientationConfiguration is passed to it, it will use the smallest maximumSize the screen can fit into. This is useful for tablet or mobile flexing. It will also change when the user resizes the screen.

action (optional) - Function called at the beginning of step. This is executed before the tour step is rendered allowing for content to appear.

closeAction (optional) - Function called after step is ended.

scrollAdjustment (optional) - Number used to adjust where to scroll to on a step and when to scroll.

useHighlightPadding (optional) - Adds some extra padding around the highlight for elements that may need just a little more on the highlight.

## GuidedTour Interface

tourId - unique Identifer string

useOrb (optional) - Use orb to start tour. The tour will start when the user hovers over the orb. The orb is based on the positioning of the first step.

steps - List of TourSteps that the tour steps through.

skipCallback (optional) - Function called when the tour is skipped. Passes the index of the step that was skipped on.

completeCallback (optional) - Function is called when the tour is completed (done is pressed).

minimumScreenSize (optional) - Will enforce a minimum size before the tour will start (in pixels). If the window is resized below this size during a tour a message will inform the user to expand their browser.

preventBackdropFromAdvancing (optional) - Prevents the tour from advancing by clicking the backdrop. This should only be set if you are completely sure your tour is displaying correctly on all screen sizes otherwise a user can get stuck.

## ngx-guided-tour component inputs

topOfPageAdjustment (optional) - Used to adjust values to determine scroll. This is a blanket value to adjust for things like nav bars.

tourStepWidth (optional) - Sets the width of tour steps.

minimalTourStepWidth (optional) - The minimal width of tour steps.

skipText (optional) - The text of the skip button.

nextText (optional) - The text of the next button.

doneText (optional) - The text of the done button (button on the last step).

closeText (optional) - The text of the close button (shown on the resize popup).

backText (optional) - The text of the back button.

progressIndicatorLocation (optional) - The location of the progress indicator (e.g. "1/5"). It can be placed inside the next button (default), at the top of the tour block or hidden. If set to ProgressIndicatorLocation.TopOfTourBlock the indicator will be shown on all steps. If it's shown inside the next button, it will be hidden on the last step.

progressIndicator (optional) - A ng-template to customize the progress indicator (e.g. "1/5"). The following context is provided:  
    - currentStepNumber: The number of the current step (starting with 1)  
    - totalSteps: The total number of steps


## Style variables
These SASS variables have default values, but they can be set to customize the tour elements. Define them before importing guided-tour-base-theme.scss .

$tour-skip-link-color : Skip button color.

$tour-text-color : Color of the text that is in the tour step box.

$tour-next-text-color : Next button text color.

$tour-zindex : Base z-index for the tour.

$tour-orb-color : Color of the orb to start a tour.

$tour-next-button-color : Next button color.

$tour-next-button-hover : Next button hover color.

$tour-back-button-color : Back button color.

$tour-shadow-color : Shadow backdrop that is used for the tour.

$tour-step-color : Background color for the tour step box.