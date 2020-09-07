import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import ClassList from "./pages/ClassList";
import TeacherForm from "./pages/TeacherForm";

import "./assets/styles/global.css";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/study" component={ClassList} />
                <Route path="/teach" component={TeacherForm} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
