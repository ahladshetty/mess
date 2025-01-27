import { useState, useEffect } from 'react';
import './Menu.css';
import Navbar from './Navbar';
import { userAppContext } from "../context/appContext";

const Menu = () => {

  const {fetchMenu, menuData, error, handleUpdateMenu} = userAppContext()

  let user = localStorage.getItem('user') // for update menu
  user = user ? JSON.parse(user) : null

  useEffect(() => {

    fetchMenu()
  }, []);

  const groupMenuByDay = () => {
    const groupedMenu = {};
    menuData.forEach((menuItem) => {
      if (!groupedMenu[menuItem.Day]) {
        groupedMenu[menuItem.Day] = [];
      }
      groupedMenu[menuItem.Day].push(menuItem);
    });
    return groupedMenu;
  };

  

  return (
    <div className='nav-menu-container'>
      <Navbar />
      <br />
      <h2 style={{ fontSize: '46px' }}>MESS</h2>
      <div className="menu-container">
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          Object.entries(groupMenuByDay()).map(([day, meals]) => (
            <div key={day} className="menu-card">
              <div className="day-header">{day}</div>
              <div className="meals-container">
                {meals.map((menuItem) => (
                  <div key={menuItem.Menuid} className="meal-section">
                    <div className="meal-time">{menuItem.Timeslot}</div>
                    <div className="menu-item">{menuItem.Food.Fname}</div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {user?.user?.role === "staff" && <button onClick={handleUpdateMenu}>Update Menu</button>}

    </div>
  );
};

export default Menu;
