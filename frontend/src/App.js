import Map, {Marker, Popup} from 'react-map-gl';
//import * as React from 'react';
import React, { useEffect, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css'
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import "./app.css";
import axios from "axios";
import moment from 'moment';
import Register from "./components/Register";
import Login from "./components/Login";
import LogoutIcon from '@mui/icons-material/Cancel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

function App() {
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(null);
  //useState(myStorage.getItem("user"));
  const[pins, setPins] = useState([]);
  const[userPins, setUserPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [rating, setRating] = useState(0);
  const [showRegister, setShowRegister] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showOnly, setShowOnly] = useState(true);


  useEffect(() => {
    const getPins = async ()=>{
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
        setUserPins(res.data);
       
     }catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  function toggleBoolean() {
     setShowOnly(!showOnly);
    if (showOnly) {
      setUserPins(pins.filter(pin => pin.username === currentUser))
    }
    else {
      setUserPins(pins.filter(pin => true))
    }
  }

  const handleMarkerClick = (id, lat, long)=>{
    setCurrentPlaceId(id);
  };

  const handleAddClick  = (e) => {
    if (currentUser != null){
    const [long, lat] = (e.lngLat).toArray();
    setNewPlace({
      lat:lat,
      long:long
    })
  }
  };

  const handleSubmit = async (e)=>{
    
    e.preventDefault()
    const newPin ={
      username:currentUser,
      title: title,
      desc: desc,
      rating: rating,
      lat:newPlace.lat,
      long:newPlace.long,
    }
    setRating(0);
    if (newPin.title.length < 1 || newPin.title.length > 35){
      window.alert("Ensure your title is less than 35 characters and non-empty.");
  }
  else if (newPin.desc.length < 1 || newPin.desc.length > 100){
      window.alert("Ensure your review is less than 100 characters and non-empty.");
  }
  else if (newPin.rating === 0 || newPin.rating === null){
    window.alert("Ensure you pick a rating.");
}

  else {

    try{
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setUserPins([...userPins, res.data]);
      setNewPlace(null);
    } catch(err){
      console.log(err);
    }
  }
  }

  //under construction still
  // const deletePin = async (e)=>{
  //   e.preventDefault();
  //   try{
  //     const res = await axios.delete("/pins", currentPlaceId);
  //     setPins([...pins, res.data]);
  //     setUserPins([...userPins, res.data]);
  //     setNewPlace(null);
  //   } catch(err){
  //     console.log(err);
  //   }
  // }

  const handleLogout = ()=> {
    myStorage.removeItem("user");
    setCurrentUser(null);
  }

  const greeting2 = ()=> {
    setShowLogin(true);
    setShowRegister(false);
  }

  const greeting = ()=> {
    setShowRegister(true);
    setShowLogin(false);
  }

  return (
    <div className="App">
        <Map
          mapboxAccessToken={process.env.REACT_APP_MAPBOX}
          initialViewState={{
            latitude: 0,
            zoom: 2,
            longitude: 0
          }}
          style={{width:"100vw", height:"100vh"}}
          mapStyle='mapbox://styles/mapbox/light-v10'
          onDblClick = {handleAddClick}
          >

            {userPins.map(p => (
          <>
            <Marker
              latitude={p.lat}
              longitude={p.long}
            >
              <RoomIcon
                style={{
                  color: p.username===currentUser ? "rgb(" + 0 + "," + 0 + "," + 0 + ")"
                : "rgb(" + 250 + "," + 0 + "," + 50 + ")", cursor: "pointer"}}
                onClick={() => handleMarkerClick(p._id)}
              />
            </Marker>
            
             {p._id === currentPlaceId && p.username === currentUser &&
            (
              <Popup
                key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                anchor="top"
                onClose={()=>setCurrentPlaceId(null)}
              >
                <div className="card">
                  <label>Place</label>
                  <span className="place">{p.title}</span>
                  <label>Review</label>
                  <span className="desc">{p.desc}</span>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<StarIcon style={{color: "gold"}} />)}
                  </div>
                  <label>Information</label>
                  <span className="username">
                    Created by {p.username}
                  </span>
                  <span className="date">{moment(p.createdAt).fromNow()}</span>
                  {/* {
                    <form onSubmit={deletePin}>
                      <button className="deleteButton" type ="submit">Delete Pin</button>
                      </form>
                  } */}
                </div>
              </Popup>
            )} 
            {p._id === currentPlaceId && p.username !== currentUser &&
            (
              <Popup
                key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                anchor="top"
                onClose={()=>setCurrentPlaceId(null)}
              >
                <div className="card">
                  <label>Place</label>
                  <span className="place">{p.title}</span>
                  <label>Review</label>
                  <span className="desc">{p.desc}</span>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<StarIcon style={{color: "gold"}} />)}
                  </div>
                  <label>Information</label>
                  <span className="username">
                    Created by {p.username}
                  </span>
                  <span className="date">{moment(p.createdAt).fromNow()}</span>
                </div>
              </Popup>
            )}
          </>
        ))}
        {newPlace && (
        <Popup
                key={newPlace._id}
                latitude={newPlace.lat}
                longitude={newPlace.long}
                closeButton={true}
                closeOnClick={false}
                anchor="top"
                onClose={()=>setNewPlace(null)}
              >
                <div>
                  <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input placeholder="enter a title" 
                    onChange={(e)=>setTitle(e.target.value)}></input>
                    <label>Review</label>
                    <textarea 
                    placeholder="share your experience" 
                    onChange={(e)=>setDesc(e.target.value)}
                   />
                    <label>Rating</label>
                    <select onChange={(e)=>setRating(e.target.value)}>
                      <option value="0"></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button className="submitButton" type ="submit">Add Pin</button>
                  </form>
                </div>
              </Popup>
              )}
              {currentUser ? (
                <div className="buttons">
                  <VisibilityIcon className="button toggle" onClick={()=>toggleBoolean()}/>
              <LogoutIcon className="button logout" onClick={handleLogout}/>
              </div>
              ) : (
              <div className="buttons">
              <AccountCircleIcon className="button login" onClick={()=>greeting2()}/>
              <AddCircleIcon className="button register" onClick={()=>greeting()}/>
              </div>)}  
              {showRegister &&<Register setShowRegister={setShowRegister}/> }
              {showLogin &&<Login setShowLogin={setShowLogin} myStorage={myStorage} 
              setCurrentUser={setCurrentUser}/> }
              
                
        </Map>

    </div>
    
  );
}

export default App;
