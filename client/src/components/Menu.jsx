import { useState, useEffect } from 'react';
import './Menu.css';
import Navbar from './Navbar';

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null);

  let user = localStorage.getItem('user') // for update menu
  user = user ? JSON.parse(user) : null

  useEffect(() => {
    
    fetch('http://localhost:5000/menu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMenuData(data))
      .catch((error) => {
        console.error('Error fetching menu data:', error);
        setError('Error fetching menu data. Please try again later.');
      });
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

  const handleUpdateMenu  =  () => {
    fetch('http://localhost:5000/updatemenu', {
      method: "PUT",
    });
    console.log('menu updated')
    alert('menu updated')
  }

  return (
    <div className='nav-menu-container'>
      <Navbar />
      <br />
      <h2 style={{fontSize:'46px'}}>MESS</h2>
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

       {user?.user?.role==="staff" &&<button onClick={handleUpdateMenu}>Update Menu</button>}

    </div>
  );
};

export default Menu;
