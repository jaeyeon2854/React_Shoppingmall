import axios from "axios";

export function handleLogin({ userId, role, name }) {
    localStorage.setItem('id', userId)
    localStorage.setItem('role', role)
    localStorage.setItem('name', name)
}

export async function handleLogout() {
    localStorage.removeItem('id')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
    await axios.get('/api/auth/logout')
    window.location.href = '/'
}

export function isAuthenticated() {
    const userId = localStorage.getItem('id')
    if (userId) {
        return userId
    } else {
        return false
    }
}

export function isAdmin() {
    const role = localStorage.getItem('role')
    if (role === 'admin') {
        return true
    } else {
        return false
    }
}