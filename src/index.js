import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {createStore} from "redux";
import {connect, Provider} from "react-redux"
import hello from './reducers/hello'
import counterReducer from "./reducers/counterReducer";
import HelloContainer from './components/Hello'
import CounterComponent from "./components/CounterComponent";
import moduleReducer from "./reducers/moduleReducer";
import ModuleListComponent from "./components/ModuleListComponent";
import ModuleListContainer from "./containers/ModuleListContainer";



const store = createStore(moduleReducer)


ReactDOM.render(
    <React.StrictMode>
        {/*<App/>*/}
        <Provider store = {store}>
          <ModuleListContainer/>
        {/*<HelloContainer/>*/}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
