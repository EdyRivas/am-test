import React from "react";
import TopBar from "../components/topbar";
import Cards from "../components/homeComponent";
import './../styles/home/home.sass'
const Home = () => {
  return (
    <div className="background">
      <TopBar />
      <Cards />
    </div>
  );
};

export default Home;
