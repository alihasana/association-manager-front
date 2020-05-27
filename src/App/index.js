import React, {Component, Suspense, useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
import AuthAPI from "../services/AuthAPI";

const PrivateRoute = ({ component: Component, ...rest }) => {
    let [isAuthenticated] = useState(AuthAPI.isAuthenticated) ;
    return (
        <Route {...rest} render={props => {
            return (
                isAuthenticated ? (
                        <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/auth/signin-1',
                        state: { from: props.location }
                    }}/>
                )
            )
        }}/>
    )
}

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    render() {
        const menu = routes.map((route, index) => {
          return (route.component) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}
                            <PrivateRoute path="/" component={AdminLayout} />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

export default App;
