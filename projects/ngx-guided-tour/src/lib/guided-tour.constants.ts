
export interface TourStep {
    /** Selector for element that will be highlighted */
    selector?: string;
    /** Tour title text */
    title?: string;
    /** Tour step text */
    content: string;
    /** Where the tour step will appear next to the selected element */
    orientation?: Orientation | OrientationConfiguration[];
    /** Action that happens when the step is opened */
    action?: () => Promise<boolean>;
    /** Action that happens when the step is closed */
    closeAction?: () => Promise<boolean>;
    /** Skips this step, this is so you do not have create multiple tour configurations based on user settings/configuration */
    skipStep?: boolean;
    /** Adds some padding for things like sticky headers when scrolling to an element */
    scrollAdjustment?: number;
    /** Adds default padding around tour highlighting. Does not need to be true for highlightPadding to work */
    useHighlightPadding?: boolean;
    /** Adds padding around tour highlighting in pixels, this overwrites the default for this step. Is not dependent on useHighlightPadding being true */
    highlightPadding?: number;
    /** Delay in ms after action/closeAction completed */
    postActionDelay?: number;
}

export interface GuidedTour {
    /** Identifier for tour */
    tourId: string;
    /** Use orb to start tour */
    useOrb?: boolean;
    /** Steps fo the tour */
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
    /**
     * Prevents the tour from advancing by clicking the backdrop.
     * This should only be set if you are completely sure your tour is displaying correctly on all screen sizes otherwise a user can get stuck.
     */
    preventBackdropFromAdvancing?: boolean;
}

export interface OrientationConfiguration {
    /** Where the tour step will appear next to the selected element */
    orientationDirection: Orientation;
    /** When this orientation configuration starts in pixels */
    maximumSize?: number;
}

export class Orientation {
    public static readonly Bottom = 'bottom';
    public static readonly BottomLeft = 'bottom-left';
    public static readonly BottomRight = 'bottom-right';
    public static readonly Center = 'center';
    public static readonly Left = 'left';
    public static readonly Right = 'right';
    public static readonly Top = 'top';
    public static readonly TopLeft = 'top-left';
    public static readonly TopRight = 'top-right';
}

export enum ProgressIndicatorLocation {
    InsideNextButton = 'inside-next-button',
    TopOfTourBlock = 'top-of-tour-block',
    None = 'none',
}  
