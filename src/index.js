import Store from './store';

export default (initialState, reducer) => new Store(initialState, reducer);