import axios from "axios"

export function handleLogin(userId){
    localStorage.setItem('loginStatus',userId)
}

export async function handleLogout(){
    localStorage.removeItem('loginStatus')
    await axios.get('/api/auth/logout')
    window.location.href='/'
}

export function isAuthenticated(){
    const userId= localStorage.getItem('loginStatus')
    if(userId){
        return userId
    } else{
        return false
    }
}