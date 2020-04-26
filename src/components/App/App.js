import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoute from './AppRoute';
import PickSide from '../../pages/registration/pickSide';
import Intro from '../../pages/intro';
import store from '../../store';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoute path='/' component={PickSide} exact />
        {/* <AppRoute path='/registration/roll' component={PickSide} /> */}
      </Router>
    </Provider>
  );
};

export default App;
