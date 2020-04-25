import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoute from './AppRoute';
import pickSide from '../../pages/registration/pickSide'
// import Test from '../../pages/registration'
import store from '../../store';
import 'antd/dist/antd.css'

// /registration/pickside

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <AppRoute path='/' component={pickSide} exact/>
            </Router>
        </Provider>

    );
};

export default App;
