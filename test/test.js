import createStore from '../src';

const initialState = {
  test1: {},
  test2: {}
};

const reducer = (action, state) => {
  switch(action.type) {
    case 'test1-action':
      return Object.assign({}, state, action.payload);
    case 'test2-action':
      return Object.assign({}, state, action.payload);
  }
}
console.log('creating store..');
const store = createStore(initialState, reducer);

const notfiedListners = {
  sub1: false,
  sub2: false
};

const unsub1 = store.subscribe(() => {
  notfiedListners.sub1 = true;
});

const unsub2 = store.subscribe(() => {
  notfiedListners.sub2 = true;
});

console.log('Dispatching actions');
store.dispatch({ type: 'test1-action', payload: { test1: { val: 'This is test1' } } });

console.log('Testing Subsbcribers');
if (notfiedListners.sub1 && notfiedListners.sub2) {
  console.log('SUCCESS');
} else {
  console.log('FAILURE');
}

notfiedListners.sub1 = false;
notfiedListners.sub2 = false;
unsub2();

store.dispatch({ type: 'test1-action', payload: { test2: { val: 'This is test2' } } });

console.log('Testing Subsbcribers');
if (notfiedListners.sub1 && !notfiedListners.sub2) {
  console.log('SUCCESS');
} else {
  console.log('FAILURE');
}

const currentState = store.getState();
const expectedState = {
  test1: {
    val: 'This is test1'
  },
  test2: {
    val: 'This is test2'
  },
}
console.log('Current State => ', JSON.stringify(currentState));
console.log('Expected State => ', JSON.stringify(expectedState));
if (JSON.stringify(currentState) === JSON.stringify(expectedState)) {
  console.log('SUCCESS');
} else {
  console.log('FAIL');
}