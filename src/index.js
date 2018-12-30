import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import '../src/styles/styles.less'
import routes from './routes';
import rootReducer from './reducers';
import * as myStore from './common/store.service';


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    ));

myStore.setStore(store);

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
)