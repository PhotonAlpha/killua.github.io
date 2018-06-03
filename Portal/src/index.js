import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';

import getRouter from 'router/router';

import App from 'components/App/App';

renderWithHotReload(App);
if (module.hot) {
    module.hot.accept('components/App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}
function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement/>
                </Router>
            </Provider>    
        </AppContainer>,
        document.getElementById('app')
    )
}

// /*初始化*/
// renderWithHotReload(getRouter());

// /*热更新*/
// if (module.hot) {
//     module.hot.accept('./router/router', () => {
//         const getRouter = require('./router/router').default;
//         renderWithHotReload(getRouter());
//     })
// }
// function renderWithHotReload(RootElement) {
//     ReactDom.render(
//         <AppContainer>
//             <Provider store={store}>
//                 {RootElement}
//             </Provider>    
//         </AppContainer>,
//         document.getElementById('app')
//     )
// }

// ReactDom.render(
//     getRouter(), document.getElementById('app')
// );