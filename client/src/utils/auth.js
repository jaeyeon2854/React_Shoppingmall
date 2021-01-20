import axios from "axios";

export function handleLogin({ userId, role, name, tel }) {
    localStorage.setItem('id', userId)
    localStorage.setItem('role', role)
    localStorage.setItem('name', name)
    localStorage.setItem('tel', tel)
}

export async function handleLogout() {
    localStorage.clear()
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