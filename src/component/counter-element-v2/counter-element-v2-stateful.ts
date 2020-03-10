import { State, store } from '../../state';

import { CounterElementV2 } from './counter-element-v2';
import { connect } from 'webcomponents-redux';

/**
 * The stateful class for CounterElement.
 */
export class CounterElementV2Stateful extends CounterElementV2 {
    /**
     * The function is called, every time redux state changes.
     * It checks the properties of counter state for any change and triggers the component update.
     * @param oldState - The old state
     * @param newState - The new state
     */
    mapStateToProps(oldState: State, newState: State): void {
        if (oldState === undefined) {
            super.attributeChangedCallback('value', null, newState.counter.count);
            return;
        }

        if (newState.counter.count !== oldState.counter.count) {
            super.attributeChangedCallback('value', oldState.counter.count, newState.counter.count);
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

connect(CounterElementV2Stateful, store);
