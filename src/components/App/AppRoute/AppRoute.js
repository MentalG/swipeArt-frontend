import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Default from '../../../layouts/Default'

const layouts = {
    default : Default
};

const AppRoute = ({ path, component: Page, layoutName = 'default', ...rest }) => {
    const Layout = layouts[layoutName];
    console.dir(Layout);
    const renderComponent = props => (
        <Layout>
            <Page {...props} />
        </Layout>
    );

    return <Route path={path} {...rest} render={renderComponent} />;
};

AppRoute.propTypes = {
    path       : PropTypes.string.isRequired,
    component  : PropTypes.func.isRequired,
    layoutName : PropTypes.string
};

export default AppRoute;
