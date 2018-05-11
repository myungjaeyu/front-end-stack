import React from 'react';
import PropTypes from 'prop-types';
import './header.component.sass';

const HeaderComponent = ({ title, subTitle }) => (
    <div className="Header">
        <h1 className="Header__Title">
            { title } <span className="Header_Title__Sub">{ subTitle }</span>
        </h1>
    </div>
);

HeaderComponent.propTypes = {
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.string.isRequired
};

export default HeaderComponent;