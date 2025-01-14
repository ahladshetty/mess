import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from './Navbar';

const Home = () => {
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    fetch("http://localhost:5000/menu")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMenuData(data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        setError("Error fetching menu data. Please try again later.");
      });
  }, []);

  const getCurrentDayMenu = () => {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    // console.log("Current Day:", currentDay);

    const uppercaseMenuData = menuData.map((menuItem) => ({
      ...menuItem,
      Day: menuItem.Day.toUpperCase(),
    }));

    const currentDayMenu = uppercaseMenuData.filter(
      (menuItem) => menuItem.Day === currentDay.toUpperCase()
    );
    // console.log("Current Day Menu:", currentDayMenu);
    return currentDayMenu;
  };

  return (
    <>
    <div className="full-screen nav-home-container">  
    <Navbar/> 
    <br />  
    <h2>WELCOME TO</h2>
    <h1>NAMMA MESS</h1>
      <div className="home-container">
        {error ? (
          <div className="home-error-message">{error}</div>
        ) : (
          <div className="home-day-container">
            <div className="home-day-header">
              {getCurrentDayMenu()[0]?.Day || "No Menu Available"}
            </div>
            <div className="home-meals-container">
              {getCurrentDayMenu().map((menuItem) => (
                <div key={menuItem.Menuid} className="home-menu-card">
                  <div className="home-meal-section">
                    <div className="home-meal-time">{menuItem.Timeslot}</div>
                    <div className="home-menu-item">{menuItem.Food.Fname}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Home;