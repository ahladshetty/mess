import React, { useState, useEffect } from "react";
import "./Cover.css";
import Navbar from './Navbar';

const Cover = () => {
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
    <div className="full-screen nav-cover-container">  
    <Navbar/> 
    <br />  
    <h2>WELCOME TO</h2>
    <h1>NAMMA MESS</h1>
      <div className="cover-container">
        {error ? (
          <div className="cover-error-message">{error}</div>
        ) : (
          <div className="cover-day-container">
            <div className="cover-day-header">
              {getCurrentDayMenu()[0]?.Day || "No Menu Available"}
            </div>
            <div className="cover-meals-container">
              {getCurrentDayMenu().map((menuItem) => (
                <div key={menuItem.Menuid} className="cover-menu-card">
                  <div className="cover-meal-section">
                    <div className="cover-meal-time">{menuItem.Timeslot}</div>
                    <div className="cover-menu-item">{menuItem.Food.Fname}</div>
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

export default Cover;
