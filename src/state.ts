import { combineReducers, createStore } from 'redux';

/**
 * Interface for Action.
 */
export interface Action {
    type: string;
}

/**
 * Interface for State.
 */
export interface State {
    counter: CounterState;
}

/**
 * Interface for Counter State.
 */
export interface CounterState {
    count: number;
}

/**
 * Reducer for CounterElement.
 * @param state - The state
 * @param action - The action
 * @returns - Tne next state
 */
export function counterReducer(state: CounterState, action: Action): CounterState {
    if (!state) {
        return { count: 0 };
    }

    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const reducers = combineReducers({
    counter: counterReducer,
});

export const store = createStore(reducers);
