import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";


import "./assets/styles/global.css";

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/study" component={TeacherList} />
                <Route path="/teach" component={TeacherForm} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;