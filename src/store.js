export default class Store {
  constructor(initialState, reducer) {
    this.state = initialState;
    this.reducer = reducer;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(action, this.state);
    return this.state;
  }

}