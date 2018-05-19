import React from 'react';
import './detail-board.component.sass';

const DetailBoardComponent = ({ match }) => (
    <div className="Detail_Board">
        <h1>DetailBoard { match.params.no }</h1>
    </div>
);

export default DetailBoardComponent;