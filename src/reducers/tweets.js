import { RECEIVE_TWEETS } from '../actions/tweets';

export default function tweets(state = [], action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.Tweets,
      };
    default:
      return state;
  }
}
