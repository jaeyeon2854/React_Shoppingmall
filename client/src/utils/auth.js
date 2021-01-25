import axios from "axios"

export function handleLogin({userId,adminId,role,name}){
    localStorage.setItem('id',userId)
    localStorage.setItem('role',role)
    localStorage.setItem('name',name)
    localStorage.setItem('adminId',adminId)
}

export async function handleLogout(){
    localStorage.removeItem('id')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
     localStorage.removeItem('adminId')
    localStorage.removeItem('adminrole')
    localStorage.removeItem('adminname')
    await axios.get('/api/auth/logout')  
    window.location.href = '/'
}

export function isAuthenticatedAdmin(){
    const adminId= localStorage.getItem('adminId')
    if(adminId){
        return adminId
    } else {
        return false 

    }
}

export function isAuthenticated(){
    const userId= localStorage.getItem('id')
    if(userId){
        return userId
    } else {
        return false 

    }
}