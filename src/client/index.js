import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

renderApp();

if (module.hot) {
    module.hot.accept('./components/App.jsx', () => {
        renderApp();
    });
}

function renderApp() {
    const App = require('./components/App.jsx').default;
    render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('react-app'),
    );
}
