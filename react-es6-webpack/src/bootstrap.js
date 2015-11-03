import React from 'react';
import ReactDOM from 'react-dom';

import Chart from './components/Chart.jsx';

window.onload = () => {
    ReactDOM.render(
        React.createElement(Chart),
        document.querySelector('#app')
    );
};