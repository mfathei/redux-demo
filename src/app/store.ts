import { tassign } from 'tassign'

import { INCREMENT } from './actions';

export interface IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT:
            // return { counter: state.counter + 1 };// using this we need to rewrite all other props in the interface like, prop1: 10, prop2: 'test'
            // return Object.assign({}, state, {counter: state.counter + 1});// we use this to ignore the previous props rewrite problem but we still can add a non-existent property like , isOnline: true
            return tassign(state, { counter: state.counter + 1 });// best solution as u can't and non-existent props
    }
    return state;
}