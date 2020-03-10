import { State, store } from '../../state';

import { connect } from 'webcomponents-redux';

/**
 * The Counter element. Implements Single class Model, where one class has both UI and Redux logic.
 */
export class CounterElementV1 extends HTMLElement {
    countElement: HTMLSpanElement | null;

    /**
     * The constructor attaches the shadow root.
     */
    constructor() {
        super();

        this.countElement = null;

        this.attachShadow({ mode: 'open' });
    }

    /**
     * Returns list of observed attributes.
     */
    static get observedAttributes(): string[] {
        return ['value'];
    }

    /**
     * Populate the component markup and attach the button click event listeners.
     */
    connectedCallback(): void {
        this.shadowRoot!.innerHTML = `
            <div>
                <div>Counter value is <span>${this.getAttribute('value')}</span></div>
                <button>Increment</button>
                <button>Decrement</button>
            </div>`;

        this.shadowRoot!.querySelectorAll('button')[0].addEventListener('click', () => {
            // @ts-ignore
            this.increment && this.increment();
        });
        this.shadowRoot!.querySelectorAll('button')[1].addEventListener('click', () => {
            // @ts-ignore
            this.decrement && this.decrement();
        });

        this.countElement = this.shadowRoot!.querySelector('span');

        // @ts-ignore
        this.connectState();
    }

    /**
     * Update component upon observed attribute change.
     * @param name - The attribute name
     * @param oldValue - The attribute old value
     * @param newValue - The attribute new value
     */
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void {
        if (!this.isConnected) {
            return;
        }

        if (name === 'value' && newValue !== oldValue) {
            this.countElement!.innerText = newValue;
        }
    }

    /**
     * The function is called, every time redux state changes.
     * It checks the properties of counter state for any change and triggers the component update.
     * @param oldState - The old state
     * @param newState - The new state
     */
    mapStateToProps(oldState: State, newState: State): void {
        if (oldState === undefined) {
            this.attributeChangedCallback('value', null, newState.counter.count);
            return;
        }

        if (newState.counter.count !== oldState.counter.count) {
            this.attributeChangedCallback('value', oldState.counter.count, newState.counter.count);
        }
    }

    /**
     * Returns props used for dispatching actions to the store.
     * @param dispatch - The dispatching function
     */
    mapDispatchToProps(dispatch: Function): object {
        return {
            increment: (): void => dispatch({ type: 'INCREMENT' }),
            decrement: (): void => dispatch({ type: 'DECREMENT' }),
        };
    }
}

connect(CounterElementV1, store);
