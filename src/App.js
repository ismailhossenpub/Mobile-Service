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
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminSidebar></AdminSidebar>
          </PrivateRoute>
          <PrivateRoute path="/manageBook">
            <ManageBook></ManageBook>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Orders />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
    
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
