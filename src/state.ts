import { combineReducers, createStore } from 'redux';

import { counterReducer } from './component/counter-element-reducer';

export interface Action {
    type: string;
}

export interface State {
    counter: CounterState;
}

export interface CounterState {
    count: number;
}

const reducers = combineReducers({
    counter: counterReducer,
});

export const store = createStore(reducers);
