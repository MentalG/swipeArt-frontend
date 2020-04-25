import { createAction } from '@reduxjs/toolkit';

export const testRequest = createAction('testRequest');

export const test = () => {
    return async (dispatch) => {
        dispatch(testRequest());
        console.log('test');
        
    };
};
