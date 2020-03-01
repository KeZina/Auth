import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import firebase from '../utils/firebase';

export const createUser = data => {
    return {
        type: 'CREATE_USER',
        data
    }
}

const createUserLoading = () => {
    return {
        type: 'CREATE_USER_LOADING'
    }
}

const createUserSuccess = data => {
    return {
        type: 'CREATE_USER_SUCCESS',
        data
    }
}

const createUserError = error => {
    return {
        type: 'CREATE_USER_ERROR',
        error
    }
}

function* watchCreateUser() {
    yield takeEvery('CREATE_USER', fetchCreateUser);
}

function* fetchCreateUser(action) {
    try {
        yield put(createUserLoading());
        yield call(async () => {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(
                    action.data.email,
                    Math.floor(Math.random() * 1e15).toString()
                );
        });
        yield call(async () => {
            await firebase
                .firestore()
                .collection('users')
                .add(action.data);
        });
        yield put(createUserSuccess(action.data));
    } catch(e) {
        yield put(createUserError(e));
    }
}

const initialState = {
    firstName: null,
    secondName: null,
    username: null,
    email: null,
    phone: null,
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case 'CREATE_USER_LOADING':
            return {
                ...state,
                isLoading: true
            };
        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                isLoading: false,
                ...action.data
            };
        case 'CREATE_USER_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchCreateUser);

const Store = ({children}) => {
    return (
        <Provider store = {store}>
            {children}
        </Provider>
    )
}

export default Store;