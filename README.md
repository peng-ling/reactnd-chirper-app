### Chirper

Here’s our middleware wiring:

export default applyMiddleware(
  thunk,
  logger
);
Each thing returned by an action creator - be it an action or a function - will go through our thunk middleware. This is the source code for the thunk middleware:

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
If the thunk middleware sees an action, that action will be sent to the next middleware in line - the logger middleware. If it sees a function, the thunk middleware will call that function. That function can contain side effects - such as API calls - and dispatch actions, simple Javascript objects. These dispatched actions will again go to all of the middleware. The thunk middleware will see that it’s a simple action and pass the action on to the next middleware, the logger.

Once inside the logger:

const logger = store => next => action => {
  console.group(action.type);
  console.log("The action:", action);
  const returnValue = next(action);
  console.log("The new state:", store.getState());
  console.groupEnd();
  return returnValue;
};
