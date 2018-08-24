import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GuidedTour, TourStep } from './guided-tour.constants';

@Injectable()
export class GuidedTourService {
    public guidedTourCurrentStepStream: Observable<TourStep>;
    public guidedTourOrbShowingStream: Observable<boolean>;

    private _guidedTourCurrentStepSubject = new Subject<TourStep>();
    private _guidedTourOrbShowingSubject = new Subject<boolean>();
    private _currentTourStepIndex = 0;
    private _currentTour: GuidedTour = null;
    private _onFirstStep = true;
    private _onLastStep = true;

    constructor(
        public errorHandler: ErrorHandler
    ) {
        this.guidedTourCurrentStepStream = this._guidedTourCurrentStepSubject.asObservable();
        this.guidedTourOrbShowingStream = this._guidedTourOrbShowingSubject.asObservable();
    }

    public nextStep(): void {
        if (this._currentTour.steps[this._currentTourStepIndex].closeAction) {
            this._currentTour.steps[this._currentTourStepIndex].closeAction();
        }
        if (this._currentTour.steps[this._currentTourStepIndex + 1]) {
            this._currentTourStepIndex++;
            this._setFirstAndLast();
            if (this._currentTour.steps[this._currentTourStepIndex].action) {
                this._currentTour.steps[this._currentTourStepIndex].action();
                // Usually an action is opening something so we need to give it time to render.
                setTimeout(() => {
                    if (this._checkSelectorValidity()) {
                        this._guidedTourCurrentStepSubject.next(this._currentTour.steps[this._currentTourStepIndex]);
                    } else {
                        this.nextStep();
                    }
                });
            } else {
                if (this._checkSelectorValidity()) {
                    this._guidedTourCurrentStepSubject.next(this._currentTour.steps[this._currentTourStepIndex]);
                } else {
                    this.nextStep();
                }
            }
        } else {
            if (this._currentTour.completeCallback) {
                this._currentTour.completeCallback();
            }
            this.resetTour();
        }
    }

    public backStep(): void {
        if (this._currentTour.steps[this._currentTourStepIndex].closeAction) {
            this._currentTour.steps[this._currentTourStepIndex].closeAction();
        }
        if (this._currentTour.steps[this._currentTourStepIndex - 1]) {
            this._currentTourStepIndex--;
            this._setFirstAndLast();
            if (this._currentTour.steps[this._currentTourStepIndex].action) {
                this._currentTour.steps[this._currentTourStepIndex].action();
                setTimeout(() => {
                    if (this._checkSelectorValidity()) {
                        this._guidedTourCurrentStepSubject.next(this._currentTour.steps[this._currentTourStepIndex]);
                    } else {
                        this.backStep();
                    }
                });
            } else {
                if (this._checkSelectorValidity()) {
                    this._guidedTourCurrentStepSubject.next(this._currentTour.steps[this._currentTourStepIndex]);
                } else {
                    this.backStep();
                }
            }
        } else {
            this.resetTour();
        }
    }

    public skipTour(): void {
        if (this._currentTour.skipCallback) {
            this._currentTour.skipCallback(this._currentTourStepIndex);
        }
        this.resetTour();
    }

    public resetTour(): void {
        document.body.classList.remove('tour-open');
        this._currentTour = null;
        this._currentTourStepIndex = 0;
        this._guidedTourCurrentStepSubject.next(null);
    }

    public startTour(tour: GuidedTour): void {
        this._currentTour = tour;
        this._currentTourStepIndex = 0;
        this._setFirstAndLast();
        this._guidedTourOrbShowingSubject.next(this._currentTour.useOrb);
        if (this._currentTour.steps.length > 0) {
            if(!this._currentTour.useOrb) {
                document.body.classList.add('tour-open');
            }
            if (this._currentTour.steps[this._currentTourStepIndex].action) {
                this._currentTour.steps[this._currentTourStepIndex].action();
            }
            if (this._checkSelectorValidity()) {
                this._guidedTourCurrentStepSubject.next(this._currentTour.steps[this._currentTourStepIndex]);
            } else {
                this.nextStep();
            }
        }
    }

    public activateOrb(): void {
        this._guidedTourOrbShowingSubject.next(false);
        document.body.classList.add('tour-open');
    }

    private _setFirstAndLast(): void {
        this._onLastStep = (this._currentTour.steps.length - 1) === this._currentTourStepIndex;
        this._onFirstStep = this._currentTourStepIndex === 0;
    }

    private _checkSelectorValidity(): boolean {
        if (this._currentTour.steps[this._currentTourStepIndex].selector) {
            const selectedElement = document.querySelector(this._currentTour.steps[this._currentTourStepIndex].selector);
            if (!selectedElement) {
                this.errorHandler.handleError(
                    // If error handler is configured this should not block the browser.
                    new Error(`Error finding selector ${this._currentTour.steps[this._currentTourStepIndex].selector} on step ${this._currentTourStepIndex + 1} during guided tour: ${this._currentTour.tourId}`)
                );
                return false;
            }
        }
        return true;
    }

    public get onLastStep(): boolean {
        return this._onLastStep;
    }

    public get onFirstStep(): boolean {
        return this._onFirstStep;
    }

    public get currentTourStepDisplay(): number {
        return this._currentTourStepIndex + 1;
    }

    public get currentTourStepCount(): number {
        return this._currentTour && this._currentTour.steps ? this._currentTour.steps.length : 0;
    }
}
