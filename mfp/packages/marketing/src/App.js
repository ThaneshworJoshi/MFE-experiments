import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import {StylesProvider} from '@material-ui/core/styles'    

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default ({history}) => { 
    return (
        <div>
            <StylesProvider>
                <BrowserRouter history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
}