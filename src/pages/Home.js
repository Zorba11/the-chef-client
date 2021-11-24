import React from "react";
import FoodCard from "../components/FoodCard";
import SideBar from "../components/SideBar";
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
     <div className="card-container">
      <FoodCard />
      <FoodCard />
    </div>
    <div className="sidebar-container">
    <SideBar />
    </div>
    </div>
  );
};

export default Home;
