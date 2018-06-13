import React from 'react';
import ReactDom from 'react-dom';
import { Router} from 'react-router-dom';
import history from './router/history';

import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import './assets/favicon.ico';

// import zh from './locales/zh';
// import en from './locales/en';
// import intl from 'intl';
// addLocaleDate([...en,...zh]);

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
                <Router history={history} >
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