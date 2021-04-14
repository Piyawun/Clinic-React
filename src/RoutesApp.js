import React from 'react'

import { Router, Switch, Route, Redirect } from 'react-router-dom'

import Sidebar from './pages/SidebarComponent';


import Home from './pages/Home'
import Login from './authentication/login'
import PatientComponent from './pages/patient/Patient'
import PaymentComponent from './pages/payment/Payment'
import MedicineComponent from './pages/medicine/Medicine'


import DoctorComponent from './pages/doctor/Doctor'
import DoctorReportComponent from './pages/doctor/DoctorReport'

import UserComponent from './pages/user/UserComponent'
const isLogin = () => {
    if (localStorage.getItem("accessToken")) {
        return true;
    }

    return false;
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Sidebar><Component {...props} /></Sidebar>
                : <Redirect to="/login" />
        )} />
    );
};

const PublicRoute = ({ component: Component, force, ...rest }) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLogin() && force ?
                <Redirect to="/dashboard" />
                : <Component {...props} />
        )} />
    );
};

const RoutesApp = () => {

    return (
        <Switch>
            <PublicRoute exact path="/" force={true} component={Login}></PublicRoute>
            <PublicRoute exact path="/login" force={true} component={Login}></PublicRoute>
            <PrivateRoute exact path="/dashboard" component={Home}></PrivateRoute>
            <PrivateRoute exact path="/patient" component={PatientComponent}></PrivateRoute>
            <PrivateRoute exact path="/doctor" component={DoctorComponent}></PrivateRoute>
            <PrivateRoute exact path="/doctor/report/:id" component={DoctorReportComponent}></PrivateRoute>
            <PrivateRoute exact path="/medicine" component={MedicineComponent}></PrivateRoute>
            <PrivateRoute exact path="/payment" component={PaymentComponent}></PrivateRoute>
            <PrivateRoute exact path="/user" component={UserComponent}></PrivateRoute>

        </Switch>
    )
}


export default RoutesApp;