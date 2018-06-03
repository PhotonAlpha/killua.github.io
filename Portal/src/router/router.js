import React from 'react';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';

import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

import SpringBoot from 'bundle-loader?lazy&name=springBoot!pages/SpringBoot/SpringBoot';
import SpringCloud from 'bundle-loader?lazy&name=springCloud!pages/SpringCloud/SpringCloud';
import Docker from 'bundle-loader?lazy&name=docker!pages/Docker/Docker';
import Archives from 'bundle-loader?lazy&name=archives!pages/Archives/Archives';
import Wow from 'bundle-loader?lazy&name=wow!pages/Videos/WorldOfWarcraft';
import Python from 'bundle-loader?lazy&name=python!pages/Videos/Python';
import About from 'bundle-loader?lazy&name=about!pages/About/About';
// import Home from 'pages/Home/Home';
// import Page1 from 'pages/Page1/Page1';
// import Counter from 'pages/Counter/Counter';
// import UserInfo from 'pages/UserInfo/UserInfo';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div>
        <Route exact path="/" component={createComponent(Home)}/>
        <Route path="/page1" component={createComponent(Page1)}/>
        <Route path="/counter" component={createComponent(Counter)}/>
        <Route path="/userinfo" component={createComponent(UserInfo)}/>

        <Route path="/springboot" component={createComponent(SpringBoot)}/>
        <Route path="/springcloud" component={createComponent(SpringCloud)}/>
        <Route path="/docker" component={createComponent(Docker)}/>
        <Route path="/archives" component={createComponent(Archives)}/>
        <Route path="/wow" component={createComponent(Wow)}/>
        <Route path="/python" component={createComponent(Python)}/>
        <Route path="/about" component={createComponent(About)}/>
        
        <Route path="/404" component={createComponent(NotFound)}/>
    </div>
    // <div>
    //     <Header>
            
    //         <Switch>
    //             {/* <Route exact path="/" component={createComponent(Home)}/>
    //             <Route path="/page1" component={createComponent(Page1)}/>
    //             <Route path="/counter" component={createComponent(Counter)}/>
    //             <Route path="/userinfo" component={createComponent(UserInfo)}/>
    //             <Route component={createComponent(NotFound)}/> */}
                
                
    //         </Switch>
    //     </Header>
    // </div>
);
// export default getRouter;

// const getRouter = () => (
//     <Router>
//         <div>
//             <ul>
//                 <li><Link to="/">首页</Link></li>
//                 <li><Link to="/page1">Page1</Link></li>
//                 <li><Link to="/counter">Counter</Link></li>
//                 <li><Link to="/userinfo">UserInfo</Link></li>
//             </ul>
//             <Switch>
//                 <Route exact path="/" component={createComponent(Home)}/>
//                 <Route path="/page1" component={createComponent(Page1)}/>
//                 <Route path="/counter" component={createComponent(Counter)}/>
//                 <Route path="/userinfo" component={createComponent(UserInfo)}/>
//                 <Route component={createComponent(NotFound)}/>
//             </Switch>  
//         </div>    
//     </Router>
// );