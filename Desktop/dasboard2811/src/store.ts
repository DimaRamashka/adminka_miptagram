import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import navigation from './reducers/navigation';
import profile from './reducers/profile';
import domains from './reducers/domains';

export default createStore(
    combineReducers({
        navigation: navigation,
        profile: profile,
        domains: domains
    }),
    applyMiddleware(thunk)
);