import React, { useContext, useState, useEffect } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  // useEffect(() => {
    
  //   if(authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  
  // }, [authData]);
  

  const handleLogin = (email, password) => {
    if(email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}))
    } else if(authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password);
      if(employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee'}));
      }
    } else {
      alert("invalid");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === "admin" ? <AdminDashboard /> : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  )
}

export default App