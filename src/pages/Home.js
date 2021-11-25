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
  const response = await fetch(menuItemsUrl);
  const data = await response.json();
  console.log(data);
  setMenuItems(data);
}

  return (
    <div className="home-container">
     <div className="card-container">
     {menuItems.map(menu => (
      <FoodCard key={menu.id} foodName={menu.foodName} />
     ))}
    </div>
    <div className="sidebar-container">
    <SideBar />
    </div>
    </div>
  );
};

export default Home;
