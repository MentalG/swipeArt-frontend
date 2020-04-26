import React from 'react';
import PropTypes from 'prop-types';

const Default = props => {
    const { children } = props;

    return (
       <div>
          {children}
        </div>
    );
};

Default.propTypes = {
    children : PropTypes.array.isRequired
};

export default Default;
