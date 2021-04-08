import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearItem, clearPrice } from './actions/index';
import axios from 'axios';
import Loader from './components/Loader';
import MenuPage from './components/MenuPage';
import InfoPage from './components/InfoPage';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Order from './components/Order';
import ProfilePage from './components/ProfilePage';
import ShoppingCart from './components/ShoppingCart';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [menuData, setMenuData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userErr, setUserErr] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [activeUser, setActiveUser] = useState({});
  const [orderObj, setOrderObj] = useState({});
  const items = useSelector(state => state.item);
  const price = useSelector(state => state.price);

  const dispatch = useDispatch();

  let orderCon = {
    order: {
        items: items,
        total: price,
        ordernumber: uuidv4(),
        date: new Date()
    }
};

  useEffect(() => {
      axios.get('http://localhost:3001/menu/api')
        .then(res => setMenuData(res.data))
        .catch(error => console.log(error))
      fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => setUserData(data));
  },[]);

  useEffect(() => {
    setOrderObj(orderCon);
  },[items,price]);

  const logIn = (e) => {
    setActiveUser(e[0]);
    setUserErr(false);
    setLoggedIn(true);
  }

  const handleUser = async (user, pass) => {
    await fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUserData(data));

    let matchedUser = userData.filter(item => {
      return item.email === user && item.password === pass;
    });
    
    userData.forEach(item => {
        if (item.email === user && item.password === pass) {
          logIn(matchedUser);
        } else {
          setUserErr(true);
        }
    });
  }

  const saveOrder = async () => {
    try {
      await axios.patch(`http://localhost:3001/users/${activeUser._id}`, {
      orders: [
        ...activeUser.orders, 
        orderObj
      ]});
      await fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => setUserData(data));
    } catch(err) {
      console.log(err);
    }
    dispatch(clearItem());
    dispatch(clearPrice());
  }

  return (
    <div className="App">
      <ShoppingCart reRender={(a,b) => handleUser(a,b)} saveOrder={() => saveOrder()} activeCart={activeCart} 
      userData={activeUser} order={orderObj} />
      <Header setActiveCart={e => setActiveCart(e)} 
              activeMenu={activeMenu} 
              setActiveMenu={e => setActiveMenu(e)}
              activeCart={activeCart} />
      <SideMenu loggedIn={loggedIn} activeMenu={activeMenu} setActiveMenu={e => setActiveMenu(e)} />
      <Switch>
        <Route exact path="/">
          <Loader />
        </Route>
        <Route path="/menu">
          <MenuPage loggedIn={loggedIn} data={menuData} />
        </Route>
        <Route path="/info">
          <InfoPage />
        </Route>
        <Route path="/register">
          <Register users={userData} loggedIn={loggedIn} />
        </Route>
        <Route loggedIn={loggedIn} path="/login">
          <LogIn error={userErr} loggedIn={loggedIn} activeUser={activeUser} handleUser={(a, b) => handleUser(a, b)} />
        </Route>
        <Route path="/order-status">
          <Order orderNumber={orderObj.order} />
        </Route>
        <Route path="/profile">
          <ProfilePage reRender={(a,b) => handleUser(a,b)} loggedIn={loggedIn} activeUser={activeUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
