/*
 *  功能：为上下文provideers包裹住组件
 *  create by tiankai on 05/15/18 11:10:44
 */

import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './router';
import Authorized from './Authorized';
import NoMatch from 'static/NoMatch';
import Welcome from './../components/Welcome';
import { history } from 'src/store/createStore';

class Root extends Component {
    render(){
    return(
        <Provider store={this.props.store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/login" exact component={Welcome} />
              <Route path="/404" exact component={NoMatch}/>
              <Authorized
                path="/"
                component={Routes}
                noMatch="/login"
              />
            </Switch>
          </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
