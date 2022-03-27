import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { responsiveStoreEnhancer } from 'redux-responsive';
import reducers from '../reducers';

let middleware = [thunk];

export default function() {
  return createStore(
    reducers,
    composeWithDevTools(
      responsiveStoreEnhancer,
      applyMiddleware(...middleware)
    )
  );
}
