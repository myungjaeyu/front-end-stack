import React from 'react';
import PropTypes from 'prop-types';
import './main.component.sass';

const MainComponent = ({ content }) => (
    <div className="Main">
        <h1>{ content }</h1>
    </div>
);

MainComponent.propTypes = {
    content : PropTypes.string.isRequired
};

export default MainComponent;