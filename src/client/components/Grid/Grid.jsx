import React from 'react';
import './Grid.scss';

export default ({name, items}) => (
    <div>
        <p>{name}</p>
        <div>
            {items.map((item, index) => (<div key={index}>a</div>))}
        </div>
    </div>
);