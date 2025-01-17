import { useState, createContext, useContext } from "react";

const AppContext = createContext() // store

const AppProvider = ({ children }) => { // provider

    const [menuData, setMenuData] = useState([]);
    const [error, setError] = useState(null);

    const [credentials, setCredentials] = useState({ Uname: "", Upasswd: "" });


    const fetchMenu = async () => {
        try {
            const response = await fetch('http://localhost:5000/menu');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setMenuData(data);
        } catch (error) {
            console.error('Error fetching menu data:', error);
            setError('Error fetching menu data. Please try again later.');
        }
    };

    const fetchFoodOptions = async () => {
        try {
            const response = await fetch("http://localhost:5000/foodnames");
            if (!response.ok) {
                throw new Error("Failed to fetch food options");
            }
            const data = await response.json();
            console.log("Food Options:", data);
            return data

        } catch (error) {
            console.error("Error fetching food options:", error.message);
        }
    };

    const handleUpdateMenu = () => {
        fetch('http://localhost:5000/updatemenu', {
            method: "PUT",
        });
        console.log('menu updated')
        alert('menu updated')
    }

    const userLogin = async () => {
        try {
            const response = await fetch("http://localhost:5000/loginuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Uname: credentials.Uname,
                    Upasswd: credentials.Upasswd,
                }),
            });
            const alo = await response.json()
            console.log(alo)
            return alo
        } catch (error) {
            console.error("login error:", error);

        }

    }

    const staffLogin = async () => {
        try {
            const response = await fetch("http://localhost:5000/loginstaff", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Sname: credentials.Uname,
                    Spasswd: credentials.Upasswd,
                }),
            });
            const alo = await response.json()
            return alo
        } catch (error) {
            console.error("login error:", error.message);

        }
    }

    return <AppContext.Provider value={{ fetchMenu, menuData, error, fetchFoodOptions, handleUpdateMenu, userLogin, staffLogin, credentials, setCredentials }}>{children} </AppContext.Provider>
}


const userAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, userAppContext }