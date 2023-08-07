import React from 'react'
import { Navigate } from 'react-router'

function ProtectedRoute({children,allowedRoles}) {
console.log(allowedRoles)
    const storageUser=JSON.parse(localStorage.getItem("serverlogin"))
    console.log(storageUser)
    let authData={role: storageUser.role}
   
  return (
    <div>

{authData.role ===allowedRoles ? children: <Navigate to="/login" replace/>}

    </div>
  )
}

export default ProtectedRoute