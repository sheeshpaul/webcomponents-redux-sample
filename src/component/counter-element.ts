/**
 * The Counter element.
 */
export class CounterElement extends HTMLElement {
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
}
