/**
 * Created by sami on 24.2.2017.
 */
import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
        );
    }
}
