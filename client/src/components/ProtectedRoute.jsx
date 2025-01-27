import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, role }) => {
  let user = localStorage.getItem('user')
  user = user ? JSON.parse(user) : null
  if (!user || (role && user.role != role)) {
    return <Navigate to='/' />
  }
  return children
}

export default ProtectedRoute