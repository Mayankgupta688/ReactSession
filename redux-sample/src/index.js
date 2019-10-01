import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import EmployeeList from "./components/employeeList";
import rootReducer from "./reducers/index";

var storeWithMiddleware = applyMiddleware(thunk)(createStore);
var storeData = storeWithMiddleware(rootReducer);

ReactDOM.render((

    <Provider store={storeData}><EmployeeList></EmployeeList></Provider>

) , document.getElementById("root"))