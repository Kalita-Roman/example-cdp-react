import React from 'react';
import './App.scss';

import Grid from '../Grid';

export default () => (<div className="app" >
    <p>Hello, World!</p>
    <Grid name="A" items={[{}, {}, {}]}/>
    <Grid name="B" items={[{}, {}]}/>
</div>);