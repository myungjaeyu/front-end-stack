import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './header.component.sass';

const HeaderComponent = ({ title, subTitle }) => {
    
    const routes = [
        { uri : '/', name : 'main' },
        { uri : '/login', name : 'login' },
        { uri : '/board/detail/3', name : 'detail 3' },
        { uri : '/board/detail/5', name : 'detail 5' }
    ];

    return (
    <div className="Header">
        
        { routes.map((v, index) => <NavLink to={ v.uri } key={ index }> { v.name } </NavLink>) }

        <h1 className="Header__Title">
            { title } <span className="Header_Title__Sub">{ subTitle }</span>
        </h1>

    </div>
    )
};

HeaderComponent.propTypes = {
    title : PropTypes.string,
    subTitle : PropTypes.string
};

export default HeaderComponent;