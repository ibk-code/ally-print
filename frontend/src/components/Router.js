import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const App = lazy(() => import('./App'))
const About = lazy(() => import('./about/About'));
const SignUp = lazy(() => import('./login/Signup'));
const Login = lazy(() => import('./login/Login'));
const Contact = lazy(() => import('./contact/Contact'));
const UserAccount = lazy(() => import('./account/UserAccount'));
const GetQuote = lazy(() => import('./quote/Quote'));
const Cart = lazy(() => import('./cart/Cart'));
const Track = lazy(() => import('./track/Track'));

const Router = () => (
    <BrowserRouter>
        <Suspense fallback={<div>Loading ...</div>}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/account" component={UserAccount}/>
                <Route path="/quote" component={GetQuote} />
                <Route path="/cart" component={Cart} />
                <Route path="/track" component={Track} />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default Router;