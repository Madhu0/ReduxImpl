import uuid from 'uuid';

export default class Store {
  constructor(initialState, reducer) {
    this.state = initialState;
    this.reducer = reducer;
    this.subscribers = {};
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(action, this.state);
    Object.keys(this.subscribers).forEach((key) => {
      if (typeof this.subscribers[key] === 'function') {
        this.subscribers[key](this.state);
      }
    });
    return this.state;
  }

  subscribe(callback) {
    const id = uuid();
    this.subscribers[id] = callback;
    return () => {
      this.subscribers[id] = undefined;
    }
  }
}