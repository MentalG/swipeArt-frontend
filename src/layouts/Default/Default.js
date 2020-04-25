import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const Default = props => {
    const { children } = props;

    return (
        <Layout>
          {children}
        </Layout>
    );
};

Default.propTypes = {
    children : PropTypes.array.isRequired
};

export default Default;
