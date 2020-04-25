import { createReducer } from '@reduxjs/toolkit';
import { testRequest } from '../actions/test'

const initialState = {
    isLoading : false
};

const Reducer = createReducer(initialState, {
    [testRequest] : state => {
        state.isLoading = true;
    }
});

export default Reducer;
