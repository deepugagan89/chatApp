import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Details from './components/details';
import Chat from './components/chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <HashRouter>
            <Switch>
              <Route path="/" exact component={Details}></Route>
              <Route path="/chat/:chatId" exact component={Details}></Route>
              <Route path="/chat" exact component={Chat}></Route>
            </Switch>
          </HashRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
