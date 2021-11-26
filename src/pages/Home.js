import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import SideBar from "../components/SideBar";
import './Home.css'

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);

  const menuItemsUrl = 'http://localhost:8090/api/v1/menuitem';

useEffect(() => {
  loadMenu()
}, []);

const loadMenu = async() => {
  try {
    const response = await fetch(menuItemsUrl);
    const data = await response.json();
    setMenuItems(data);
  }
  catch(error) {
    console.error(error);
  }
}

  return (
    <div className="home-container">
     <div className="card-container">
     {
       (menuItems.length > 0) ? (menuItems.map(menu => (
        <FoodCard menu={menu} key={menu.id} foodName={menu.foodName} />
       ))) : (
         <h2>Restaurant is closed !</h2>
       )
     }
    </div>
    <div className="sidebar-container">
    <SideBar />
    </div>
    </div>
  );
};

export default Home;
