import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
// import Favicon from 'react-favicon';

import App from 'components/App';
import Home from 'components/Home';
import CreatePet from 'components/CreatePet';

import styles from './main.scss';

function handleChange() {
  window.scrollTo(0, 0);
}

ReactDOM.render(
  <div className={styles.appBody}>
    <Provider>
      <Router
        history={browserHistory}
        onUpdate={function () {
          handleChange();
        }}
      >
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="create-pet" component={CreatePet} />
        </Route>

      </Router>
    </Provider>
    {/* <Favicon url="http://res.cloudinary.com/dewd4pral/image/upload/v1497110700/favicon_gtxunq.png"/> */}
  </div>, document.getElementById('app'),
);
