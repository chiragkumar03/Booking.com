import './App.css';
import React, { useState, Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
// import Home from './common/home';
import Home1 from './common/home';
import Header from "./common/header/header";
import Footer from './common/footer/footer';
import Profile from './common/pages/profile';
import Login from './common/pages/login';
import Signup from './common/pages/signup';
import Cart from './common/pages/cart';
import Category from './common/category';
import data from './common/data';
import Admin from './common/pages/admin';
import Details from './common/details';

function App() {
  
  const [name, setlocationName] = useState("Haryana");
  const [listdata,setlocationData] = useState(data[name]);

  const [loggedin,setLogin] = useState('0');

  const [usrname, setusrName] = useState("");
  const [usrmail, setusrMail] = useState("");


  const [detailId, setDetailId] = useState("1");

  function changelocationHandler(e){
      
      setlocationName(e.target.innerText);
      setlocationData(data[e.target.innerText]);
  }

  
  function changelocationHandler1(e){
    setlocationName(e.target.value);
    changeFilterHandler(e.target.value,selectedRooms,selectedDir,selectedSize,selectedPrice);
}

  function clickHandle(){
    setLogin('1');

  }
  function clickHandle1(){
    setLogin('0');
  }


  const [selectedRooms, setSelectedRooms] = useState('All');


  const handleRoomChange = (event) => {
      setSelectedRooms(event.target.value);
      changeFilterHandler(name,event.target.value,selectedDir,selectedSize,selectedPrice);
  };

  const [selectedDir, setSelectedDir] = useState("All");


  const handleDirChange = (event) => {
      setSelectedDir(event.target.value);
      changeFilterHandler(name,selectedRooms,event.target.value,selectedSize,selectedPrice);
  };

  const [selectedSize, setSelectedSize] = useState("All");


  const handleSizeChange = (event) => {
      setSelectedSize(event.target.value);
      // changeFilterHandler(name,selectedRooms,selectedDir,event.target.value,selectedPrice);
  };

  const [selectedPrice, setSelectedPrice] = useState("All");


  const handlPriceChange = (event) => {
      setSelectedPrice(event.target.value);
      changeFilterHandler(name,selectedRooms,selectedDir,selectedSize,event.target.value);
  };



  function changeFilterHandler(locname,room,dir,size,price){
    let ff = data[locname];

    ff = ff.filter((e)=>{
      if(room==e.bedroom){
          return e;
      }

      if(room==='All'){
          return e;
      }
    })


    ff= ff.filter((e)=>{
      if(dir==e.face){
          return e;
      }
      if(dir==='All'){
          return e;
      }
    })

    ff= ff.filter((e)=>{

      if(price>e.price){
          return e;
      }
      if(price==='All'){
          return e;
      }
    })

   
    setlocationData(ff);

  }

  
  return (
    <Router>
      <div className="App">
        <Header islogin={loggedin} usrname={usrname} ></Header>
        
        <Routes>
          <Route
            path="/"
            element={<Home1 setlocationData={setlocationData} data={data} changelocationHandler={changelocationHandler} />}
          ></Route>
          <Route
            path="/profile"
            element={<Profile islogin={loggedin} clickHandle={clickHandle} clickHandle1={clickHandle1
            } usrname={usrname} usrmail={usrmail}/>}
          ></Route>
          <Route
            path="/signup"
            element={<Signup />}
          ></Route>
          <Route
            path="/login"
            element={<Login clickHandle={clickHandle} setusrName={setusrName} setusrMail={setusrMail} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart usrname={usrname} />}
          ></Route>
          <Route
            path="/admin"
            element={<Admin usrname={usrname} />}
          ></Route>
          <Route
            path="/category"
            element={<Category usrname={usrname} setlocationData={setlocationData} listdata={listdata} data={data} name={name} changelocationHandler1={changelocationHandler1} changelocationHandler={changelocationHandler} loggedin={loggedin}  selectedRooms={selectedRooms} handleRoomChange={handleRoomChange} selectedDir={selectedDir} handleDirChange={handleDirChange} selectedSize={selectedSize} handleSizeChange={handleSizeChange} selectedPrice={selectedPrice} handlPriceChange={handlPriceChange} setDetailId={setDetailId}/>}
          ></Route>
          <Route
            path="/Detail"
            element={<Details detailId={detailId} setDetailId={setDetailId} loggedin={loggedin} listdata={listdata}/>}
          ></Route>
        </Routes>
        {/* <button onClick={clickHandle}>click</button> */}
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
