import React from 'react';
import './init.component.sass';

const InitComponent = ({ content }) => (
    <div className="Init">
        <h1>Init</h1>
        <h1>{ content }</h1>
    </div>
);

export default InitComponent;