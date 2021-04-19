import React, { createContext, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import ServicesDetail from "./components/Home/ServicesDetail/ServicesDetail";
import AddService from "./components/Admin/AddService/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import Review from "./components/UserPage/Review/Review";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Checkout from "./components/UserPage/Checkout/Checkout";
import Orders from "./components/UserPage/Orders/Orders";
import ManageBook from "./components/Admin/ManageBook/ManageBook";
import Admin from "./components/Admin/Admin/Admin";
import AdminSidebar from "./components/Share/AdminSidebar/AdminSidebar";
import AllOrders from "./components/Admin/AllOrders/AllOrders";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/allOrder">
            <AllOrders></AllOrders>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute path="/admin">
            <AdminSidebar></AdminSidebar>
          </PrivateRoute>
          <Route path="/manageBook">
            <ManageBook></ManageBook>
          </Route>
          <Route path="/addReview">
            <Review></Review>
          </Route>
          <PrivateRoute path="/checkout/:serviceId">
            <Checkout />
          </PrivateRoute>
          <Route path="/order">
            <Orders />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
